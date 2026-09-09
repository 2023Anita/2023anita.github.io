# Earth & Life

An independently implemented educational globe replacing the former Anita OS page. The visual reference is [EARTH by Ethan Plus](https://earth.ethanplus.ai/); this project does not copy or redistribute that site's application code or proprietary assets.

Scope: the planet-history journey and life-evolution timeline. It is not a replica of the reference site's separate civilization, moon, orbital, earthquake or ocean-data applications.

## Assets and sources

- Three.js: MIT license, vendored locally with `vendor/THREE-LICENSE.txt`.
- Globe textures: Three.js public example assets, `https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg`, `earth_lights_2048.png`, `earth_clouds_1024.png`, `earth_normal_2048.jpg`. The present-day visual is a texture composite, not live satellite data. Ancient surfaces are procedurally generated diagrams, not paleogeographic reconstructions.
- Earth formation: https://science.nasa.gov/earth/facts/
- Early water: https://science.nasa.gov/earth/earth-observatory/ancient-crystals-suggest-earlier-ocean/
- Early life: https://naturalhistory.si.edu/education/teaching-resources/life-science/early-life-earth-animal-origins
- Evolution and extinctions: https://ocean.si.edu/through-time/ocean-through-time
- Homo sapiens: https://humanorigins.si.edu/evidence/human-fossils/species/homo-sapiens

All dates are approximate. Timeline spacing is intentionally non-linear. Stage descriptions are educational summaries; ancient geography and organism icons are schematic.

Run using any static HTTP server. No third-party network request is required for the globe at runtime. The parent page passes language and visibility messages only after same-origin and source validation.
