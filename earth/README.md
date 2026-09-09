# Earth & Life

Self-hosted static snapshot of the public [EARTH by Ethan Plus](https://earth.ethanplus.ai/) frontend, captured on 2026-09-09. The original frontend and its scientific source credits are preserved; this is not a claim that Anita authored the original application. Local integration rewrites runtime paths, disables original-host analytics, and adds a return link to the portfolio.

The six independent entry documents are `index.html`, `civilization.html`, `orbit.html`, `moon.html`, `restless.html`, and `oceans.html`. They serve all program, worker, texture, terrain, satellite, earthquake and current-field dependencies locally, without an iframe or a runtime request to the reference host. `source-manifest.json` records original asset hashes and snapshot provenance. All datasets are the reference snapshot, not live feeds.

The original application’s Sources dialogs retain its imagery and science citations. PALEOMAP terrain metadata specifies CC BY 4.0. Do not infer that every application file has that same license or remove original credits.

Chinese, English and Japanese are selected with the header language control or `?lang=zh`, `?lang=en`, `?lang=ja`. Local translation dictionaries cover the six pages, their chapters, UI and source explanations. Satellite catalog identifiers and scientific proper names remain intact. The adapter preserves original English and stores the language locally; no translation service is contacted. The mobile context display uses a separate localized label to avoid competing with the original mobile renderer.

The files `earth.js`, `earth.css`, `vendor/`, and the old `assets/earth-*` textures below are retained from the earlier independently written prototype for recovery; the six entry documents do not load them.

## Assets and sources

- Three.js: MIT license, vendored locally with `vendor/THREE-LICENSE.txt`.
- Globe textures: Three.js public example assets, `https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg`, `earth_lights_2048.png`, `earth_clouds_1024.png`, `earth_normal_2048.jpg`. The present-day visual is a texture composite, not live satellite data. Ancient surfaces are procedurally generated diagrams, not paleogeographic reconstructions.
- Earth formation: https://science.nasa.gov/earth/facts/
- Early water: https://science.nasa.gov/earth/earth-observatory/ancient-crystals-suggest-earlier-ocean/
- Early life: https://naturalhistory.si.edu/education/teaching-resources/life-science/early-life-earth-animal-origins
- Evolution and extinctions: https://ocean.si.edu/through-time/ocean-through-time
- Homo sapiens: https://humanorigins.si.edu/evidence/human-fossils/species/homo-sapiens

All dates are approximate. Timeline spacing is intentionally non-linear. Stage descriptions are educational summaries; ancient geography and organism icons are schematic.

Serve from `/earth/` on the GitHub site, or rebuild path prefixes as `/profile/earth/` on the Academy. No third-party network request is required for the six applications at runtime. Links in Sources intentionally lead to the cited institutions. The portfolio's legacy `#system` URL redirects to the local entry document.
