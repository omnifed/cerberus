---
'@cerberus-design/signals': patch
---

Fix the published type declarations under `moduleResolution` `node16` and `nodenext`: relative specifiers in `dist/**/*.d.ts` now end in `.js` (and in `.cjs` for `.d.cts`), so `@cerberus-design/signals` and its `./core` and `./react` subpaths export their types again.
