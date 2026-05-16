import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { createBadgeTexture } from './BadgeTexture.js';

export function ProfileBadge3D({ theme }) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)');
    const coarse = matchMedia('(pointer: coarse)');
    const update = () => setReduced(reduce.matches || coarse.matches);
    update();
    reduce.addEventListener('change', update);
    coarse.addEventListener('change', update);
    return () => {
      reduce.removeEventListener('change', update);
      coarse.removeEventListener('change', update);
    };
  }, []);

  return (
    <div className="badge-stage" aria-label="Interactive 3D medical AI profile badge">
      <Canvas
        camera={{ position: [0, 0, 7.4], fov: 36 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={<BadgeFallback />}>
          <ambientLight intensity={1.25} />
          <directionalLight position={[3, 4, 5]} intensity={2.4} />
          <spotLight position={[-3, 3, 4]} angle={0.45} penumbra={0.7} intensity={1.2} />
          <BadgeScene theme={theme} reduced={reduced} />
        </Suspense>
      </Canvas>
      <div className="badge-hint">Drag the badge</div>
    </div>
  );
}

function BadgeFallback() {
  return (
    <Html center>
      <div className="badge-loading">Loading badge</div>
    </Html>
  );
}

function BadgeScene({ theme, reduced }) {
  const groupRef = useRef(null);
  const lineRef = useRef(null);
  const target = useRef(new THREE.Vector3(0, -0.26, 0));
  const current = useRef(new THREE.Vector3(0, -0.26, 0));
  const dragging = useRef(false);
  const { viewport } = useThree();
  const dark = theme === 'dark';
  const badgeTexture = useMemo(() => createBadgeTexture({ dark }), [dark]);
  const frontGeometry = useMemo(() => new THREE.PlaneGeometry(2.35, 3.25), []);
  const backGeometry = useMemo(() => createRoundedRectGeometry(2.45, 3.35, 0.16), []);

  useEffect(() => () => badgeTexture.dispose(), [badgeTexture]);

  useFrame((state) => {
    if (!dragging.current && !reduced) {
      target.current.x = Math.sin(state.clock.elapsedTime * 0.8) * 0.06;
      target.current.y = -0.26 + Math.cos(state.clock.elapsedTime * 0.64) * 0.05;
    }

    current.current.lerp(target.current, reduced ? 0.08 : 0.13);
    const group = groupRef.current;
    if (!group) return;
    group.position.copy(current.current);
    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, reduced ? 0 : -current.current.y * 0.12, 0.1);
    group.rotation.y = THREE.MathUtils.lerp(group.rotation.y, current.current.x * 0.25, 0.1);
    group.rotation.z = THREE.MathUtils.lerp(group.rotation.z, -current.current.x * 0.08, 0.1);

    if (lineRef.current) {
      const anchor = new THREE.Vector3(0, 2.08, -0.04);
      const top = new THREE.Vector3(current.current.x, current.current.y + 1.68, 0.02);
      const curve = new THREE.CatmullRomCurve3([
        anchor,
        new THREE.Vector3(anchor.x * 0.45 + top.x * 0.55, 1.48, 0.04),
        new THREE.Vector3(top.x * 0.82, top.y + 0.35, 0.08),
        top,
      ]);
      lineRef.current.geometry.setFromPoints(curve.getPoints(42));
    }
  });

  const handlePointerMove = (event) => {
    if (!dragging.current || reduced) return;
    event.stopPropagation();
    target.current.x = THREE.MathUtils.clamp(event.pointer.x * viewport.width * 0.32, -0.82, 0.82);
    target.current.y = THREE.MathUtils.clamp(event.pointer.y * viewport.height * 0.28, -0.7, 0.62);
  };

  const endDrag = (event) => {
    event.stopPropagation();
    dragging.current = false;
    target.current.set(0, -0.26, 0);
  };

  return (
    <group onPointerMove={handlePointerMove} onPointerUp={endDrag} onPointerLeave={endDrag}>
      <group position={[0, 2.08, -0.04]}>
        <mesh position={[-0.22, 0, 0]}>
          <torusGeometry args={[0.1, 0.018, 18, 36]} />
          <meshStandardMaterial color={dark ? '#6dc8cf' : '#01696f'} metalness={0.6} roughness={0.28} />
        </mesh>
        <mesh position={[0.22, 0, 0]}>
          <torusGeometry args={[0.1, 0.018, 18, 36]} />
          <meshStandardMaterial color={dark ? '#6dc8cf' : '#01696f'} metalness={0.6} roughness={0.28} />
        </mesh>
      </group>
      <line ref={lineRef}>
        <bufferGeometry />
        <lineBasicMaterial color={dark ? '#78c8cf' : '#01696f'} transparent opacity={0.62} />
      </line>
      <Float speed={reduced ? 0 : 1.2} rotationIntensity={reduced ? 0 : 0.16} floatIntensity={reduced ? 0 : 0.18}>
        <group
          ref={groupRef}
          scale={1.1}
          onPointerDown={(event) => {
            if (reduced) return;
            event.stopPropagation();
            event.target.setPointerCapture(event.pointerId);
            dragging.current = true;
          }}
          onPointerUp={endDrag}
        >
          <mesh position={[0, 0, -0.09]} geometry={backGeometry}>
            <meshStandardMaterial color={dark ? '#0f1617' : '#dfe8e5'} roughness={0.64} metalness={0.08} />
          </mesh>
          <mesh geometry={frontGeometry}>
            <meshPhysicalMaterial
              map={badgeTexture}
              color="#ffffff"
              side={THREE.DoubleSide}
              metalness={0.14}
              roughness={0.32}
              clearcoat={0.68}
              clearcoatRoughness={0.18}
              reflectivity={0.45}
            />
          </mesh>
          <mesh position={[0, 0, 0.025]} geometry={frontGeometry}>
            <meshPhysicalMaterial
              color={dark ? '#9bf3f8' : '#ffffff'}
              transparent
              opacity={0.12}
              roughness={0.05}
              metalness={0}
              transmission={0.2}
            />
          </mesh>
          <mesh position={[-0.31, 1.74, 0.04]}>
            <torusGeometry args={[0.075, 0.015, 18, 36]} />
            <meshStandardMaterial color={dark ? '#78c8cf' : '#01696f'} metalness={0.7} roughness={0.22} />
          </mesh>
          <mesh position={[0.31, 1.74, 0.04]}>
            <torusGeometry args={[0.075, 0.015, 18, 36]} />
            <meshStandardMaterial color={dark ? '#78c8cf' : '#01696f'} metalness={0.7} roughness={0.22} />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

function createRoundedRectGeometry(width, height, radius) {
  const x = -width / 2;
  const y = -height / 2;
  const shape = new THREE.Shape();
  shape.moveTo(x + radius, y);
  shape.lineTo(x + width - radius, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + radius);
  shape.lineTo(x + width, y + height - radius);
  shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  shape.lineTo(x + radius, y + height);
  shape.quadraticCurveTo(x, y + height, x, y + height - radius);
  shape.lineTo(x, y + radius);
  shape.quadraticCurveTo(x, y, x + radius, y);
  return new THREE.ShapeGeometry(shape, 24);
}
