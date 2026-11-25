---
'@cerberus/panda-preset': patch
---

Fix the `display` and `sans` font tokens so they fall back to the v2
`--font-body` variable before the v1 `--font-poppins` name. Apps that followed
the v2 migration and set `--font-body` now get their font instead of the system
`sans-serif`.
