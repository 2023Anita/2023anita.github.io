// Botanical ornaments live in page margins and never receive pointer input.
(() => {
  const garden=document.createElement('div');
  garden.className='page-clover-garden';
  garden.setAttribute('aria-hidden','true');
  const leaf='M0 0C-13-4-17-14-12-20C-8-25-1-22 0-17C3-24 10-24 14-19C19-12 10-3 0 0Z';
  const places=[['0%', '19%',32,13],['calc(100% - 29px)','34%',29,16],['0%','63%',26,15],['calc(100% - 34px)','82%',34,18]];
  garden.innerHTML=places.map(([x,y,size,time],i)=>`<svg class="page-clover" viewBox="-30 -30 60 72" style="--leaf-x:${x};--leaf-y:${y};--leaf-size:${size}px;--leaf-time:${time}s;--leaf-delay:-${i*3}s" focusable="false"><defs><linearGradient id="leaf-jade-${i}" x2="1" y2="1"><stop stop-color="#a6c896"/><stop offset=".5" stop-color="#65a483"/><stop offset="1" stop-color="#2f7967"/></linearGradient></defs><path d="M0 0Q-5 24 9 36" fill="none" stroke="#4c8d6b" stroke-width="2.7" stroke-linecap="round"/>${[0,90,180,270].map(a=>`<g transform="rotate(${a})"><path d="${leaf}" fill="url(#leaf-jade-${i})" stroke="#3d8469" stroke-width=".7"/><path d="M0 0L0-16M0-7L-6-12M0-10L6-15" fill="none" stroke="#d4e6b8" stroke-width=".9" opacity=".7"/></g>`).join('')}</svg>`).join('');
  document.body.append(garden);
  const visibility=()=>garden.classList.toggle('paused',document.hidden);
  document.addEventListener('visibilitychange',visibility);
  visibility();
})();
// Reveal each section once, while leaving content visible without JavaScript.
(() => {
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    entry.target.classList.add('folio-enter');observer.unobserve(entry.target);
  }),{threshold:.08});
  document.querySelectorAll('#portfolio .section-header').forEach(el=>observer.observe(el));
})();
