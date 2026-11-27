import {
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three'

export type Rgb = [number, number, number]

/**
 * Where the world is in a moment of the story. The director blends these as
 * the page scrolls.
 */
export interface WorldState {
  /** 0: the fissure is broken into shards that don't line up. 1: one sealed seam. */
  unity: number
  /** How far the light and the embers reach from the seam. */
  spread: number
  /** Height of the seam, -0.5 (bottom) to 0.5 (top). */
  horizon: number
  /** Tilt of the seam in radians. */
  tilt: number
  /** How hot the seam burns, and how many embers rise. */
  heat: number
  /** 0: a seam. 1: the seam opens at its center like a gate. */
  gate: number
}

export interface WorldFrame {
  state: WorldState
  /** The three minds: designer, developer, agent. */
  colors: [Rgb, Rgb, Rgb]
  background: Rgb
  dark: boolean
}

export interface World {
  setFrame(frame: WorldFrame): void
  setPointer(x: number | null, y: number): void
  pulse(x: number, y: number): void
  setActive(active: boolean): void
  dispose(): void
}

const vertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`

const fragment = /* glsl */ `
  precision highp float;

  uniform vec2 uRes;
  uniform float uTime;
  uniform vec2 uPointer;
  uniform float uPointerAmt;
  uniform vec3 uPulse;
  uniform float uUnity;
  uniform float uSpread;
  uniform float uHorizon;
  uniform float uTilt;
  uniform float uHeat;
  uniform float uGate;
  uniform vec3 uC0;
  uniform vec3 uC1;
  uniform vec3 uC2;
  uniform vec3 uBg;
  uniform float uDark;

  varying vec2 vUv;

  float hash1(float n) { return fract(sin(n * 127.1) * 43758.5453); }
  // Hash without sine: stable at pixel-sized inputs, so no banding or grid.
  float hash2(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }

  // Smooth value noise, for smoke.
  float vnoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    float a = hash2(i);
    float b = hash2(i + vec2(1.0, 0.0));
    float c = hash2(i + vec2(0.0, 1.0));
    float d = hash2(i + vec2(1.0, 1.0));
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  float fbm3(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 3; i++) {
      v += a * vnoise(p);
      p = p * 2.03 + vec2(17.1, 3.7);
      a *= 0.5;
    }
    return v;
  }

  float fbm4(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
      v += a * vnoise(p);
      p = p * 2.01 + vec2(5.3, 11.9);
      a *= 0.5;
    }
    return v;
  }

  // Piecewise-linear noise: straight runs and sharp turns, like a crack in rock.
  float jag(float x) {
    float i = floor(x);
    float f = fract(x);
    return mix(hash1(i), hash1(i + 1.0), f);
  }

  float slipOf(float shard, float t) {
    return (hash1(shard * 7.3 + 1.0) - 0.5) * 0.34 + sin(t * 0.25 + shard * 2.1) * 0.02;
  }

  // Where the seam runs at horizontal position x. Broken apart, each shard
  // slips out of line with its neighbors: hard for the crack itself, eased
  // for the smoke, embers and water around it, so nothing else shows a cut.
  float seam(float x, float t, float hard) {
    float y = (jag(x * 2.2 + 3.0) - 0.5) * 0.07
      + (jag(x * 6.5 + 11.0 + t * 0.03) - 0.5) * 0.026
      + (jag(x * 19.0 + 27.0) - 0.5) * 0.008;
    float sx = x * 2.6 + 0.4;
    float shard = floor(sx);
    float a = slipOf(shard, t);
    float b = slipOf(shard + 1.0, t);
    float ease = smoothstep(0.0, 1.0, fract(sx));
    float slip = mix(mix(a, b, ease), a, hard);
    return y + slip * (1.0 - uUnity);
  }

  // How much of a shard's length is left at x: the ends of each shard taper.
  float shardEnds(float x) {
    float f = fract(x * 2.6 + 0.4);
    return mix(smoothstep(0.02, 0.14, f) * smoothstep(0.98, 0.86, f), 1.0, uUnity);
  }

  vec3 streamColor(float k) {
    // k wraps through designer, developer and agent.
    k = fract(k) * 3.0;
    vec3 a = k < 1.0 ? uC0 : (k < 2.0 ? uC1 : uC2);
    vec3 b = k < 1.0 ? uC1 : (k < 2.0 ? uC2 : uC0);
    return mix(a, b, smoothstep(0.55, 1.0, fract(k)));
  }

  void main() {
    float aspect = uRes.x / uRes.y;
    float t = uTime;
    float px = 1.0 / uRes.y;
    vec2 q = (vUv - 0.5) * vec2(aspect, 1.0);

    float ca = cos(uTilt);
    float sa = sin(uTilt);
    vec2 r = vec2(ca * q.x + sa * q.y, -sa * q.x + ca * q.y);
    r.y -= uHorizon;

    vec2 pq = (uPointer - 0.5) * vec2(aspect, 1.0);
    vec2 pr = vec2(ca * pq.x + sa * pq.y, -sa * pq.x + ca * pq.y);
    pr.y -= uHorizon;
    vec2 toP = r - pr;
    float near = exp(-dot(toP, toP) * 22.0) * uPointerAmt;

    // --- The seam -------------------------------------------------------
    float y0 = seam(r.x, t, 0.0);
    float above = r.y - y0;
    // Heat shimmer: the air just above the seam wavers.
    float shimmerAmt = exp(-max(above, 0.0) * 9.0) * step(0.0, above) * uHeat;
    vec2 sh = vec2(vnoise(vec2(r.x * 14.0, r.y * 10.0 - t * 1.6)) - 0.5, 0.0);
    vec2 rs = r + sh * 0.006 * shimmerAmt;
    float y = seam(rs.x, t, 1.0);
    float d = abs(rs.y - y);

    // Molten pockets: the seam burns hotter in some stretches than others.
    float pocket = 0.45 + 0.75 * smoothstep(0.25, 0.85, vnoise(vec2(rs.x * 1.7 + 4.0, t * 0.05)));
    // Broken: only some stretches of each shard still glow.
    float alive = mix(
      smoothstep(0.3, 0.55, vnoise(vec2(rs.x * 3.4, t * 0.08))),
      1.0,
      uUnity
    );
    float ends = shardEnds(rs.x);
    // The gate: the seam opens into a lens at its center.
    float lens = uGate * 0.009 * exp(-rs.x * rs.x * 14.0);
    d = max(d - lens, 0.0);
    // Fade out toward the sides of the frame.
    float reach = smoothstep(aspect * 0.62, aspect * 0.05, abs(rs.x));
    reach = mix(reach, exp(-rs.x * rs.x * 1.6), uGate * 0.7);

    // A tap sends a heat wave running along the seam from where you touched.
    float age = t - uPulse.z;
    float wave = 0.0;
    if (age > 0.0 && age < 2.6) {
      float tx = (uPulse.x - 0.5) * aspect;
      float front = abs(rs.x - tx) - age * 0.55;
      wave = exp(-front * front * 60.0) * (1.0 - age / 2.6);
    }
    float warm = exp(-pow(rs.x - pr.x, 2.0) * 10.0) * uPointerAmt * 0.35;

    float flick = 0.86 + 0.14 * vnoise(vec2(rs.x * 8.0, t * 2.2));
    float glowBurn = uHeat * flick * alive * reach * pocket
      * (1.0 + wave * 2.0 + warm + uGate * 0.45 * exp(-rs.x * rs.x * 8.0));
    // The crack itself tapers at shard ends; its wide glow follows the eased
    // line, so a broken seam never cuts the frame into columns.
    float burn = glowBurn * ends;
    float core = exp(-pow(d / (px * 1.4 + 0.0012), 2.0));
    float inner = exp(-d * 85.0);
    float dField = max(abs(rs.y - seam(rs.x, t, 0.0)) - lens, 0.0);
    float glow = exp(-dField * (14.0 / max(uSpread, 0.2)));
    vec3 seamCol = streamColor(rs.x * 0.22 + t * 0.012 + 0.15);

    // Hairline cracks branching off the seam, faint and cold.
    float branchY = y + (jag(rs.x * 9.0 + 51.0) - 0.5) * 0.05 + sign(jag(rs.x * 3.0 + 9.0) - 0.5) * 0.012;
    float branch = exp(-pow(abs(rs.y - branchY) / (px * 1.2 + 0.0006), 2.0))
      * smoothstep(0.62, 0.8, jag(rs.x * 4.0 + 77.0)) * reach * alive;

    // --- The river below: the seam's light, broken on dark water ----------
    float depth = max(-above, 0.0);
    float ripple = (vnoise(vec2(rs.x * 2.0, depth * 40.0 - t * 0.7)) - 0.5) * 0.05;
    float glint = smoothstep(
      0.7,
      0.96,
      vnoise(vec2((rs.x + ripple) * 6.0 + t * 0.04, depth * 120.0 - t * 1.1))
    );
    float reflection = glint * exp(-depth * (12.0 / max(uSpread, 0.3)))
      * step(0.0, -above) * smoothstep(0.0, 0.012, depth);
    vec3 reflCol = streamColor((rs.x + ripple) * 0.22 + t * 0.012 + 0.15);

    // --- Smoke: ink rising off the seam and drifting downstream -----------
    vec2 sp = r * vec2(1.6, 2.6);
    sp += vec2(-t * 0.03, -t * 0.08);
    sp += toP * near * 0.6;
    vec2 w = vec2(
      fbm3(sp + vec2(0.0, t * 0.02)),
      fbm3(sp + vec2(5.2, 1.3) - vec2(t * 0.015, 0.0))
    );
    float n = fbm4(sp * 1.7 + w * 2.4);
    // A soft body, and thin curling filaments where the warp folds over.
    float density = smoothstep(0.45, 0.9, n);
    float wisps = pow(1.0 - abs(2.0 * n - 1.0), 6.0) * (0.35 + 0.65 * smoothstep(0.3, 0.7, n));
    // Smoke is lit only near the seam, and mostly above it.
    float litAbove = exp(-max(above, 0.0) * (6.5 / max(uSpread, 0.3))) * step(0.0, above);
    float litBelow = exp(-depth * 30.0);
    float lit = (litAbove + litBelow * 0.4) * reach;
    vec3 smokeHue = streamColor(r.x * 0.16 + n * 0.5 + t * 0.008);
    vec3 smokeCol = mix(smokeHue, vec3(dot(smokeHue, vec3(0.2126, 0.7152, 0.0722))), 0.35);

    // --- Embers: sparks born at the seam, rising and fading ---------------
    vec3 emberAdd = vec3(0.0);
    float emberInk = 0.0;
    vec3 emberInkCol = vec3(0.0);
    vec2 er0 = r + normalize(toP + 1e-4) * near * 0.06;
    for (int L = 0; L < 3; L++) {
      float fl = float(L);
      float scale = 13.0 + fl * 10.0;
      float speed = (0.06 + fl * 0.03) * (0.6 + 0.4 * uHeat);
      vec2 e = er0 * scale;
      e.y -= t * speed * scale;
      e.x += sin(e.y * 0.35 + t * 0.6 + fl * 2.0) * 0.6;
      vec2 id = floor(e);
      vec2 f = fract(e) - 0.5;
      float h = hash2(id + fl * 31.7);
      float rate = mix(0.8, 0.66, clamp(uHeat - 0.4, 0.0, 1.0));
      if (h < rate) continue;
      vec2 o = (vec2(hash2(id + 3.1), hash2(id + 7.7)) - 0.5) * 0.7;
      vec2 df = (f - o) / scale;
      // Stretched along the way they rise: a spark, not a star.
      df.y *= 0.45;
      float dist = length(df);
      float big = step(0.93, hash2(id + 5.5));
      float size = (0.0009 + 0.0013 * hash2(id + 9.2) + big * 0.0012) * (1.0 - fl * 0.2);
      float spark = smoothstep(size + px, size * 0.15, dist);
      // The halo is windowed inside its cell, so no cell edge ever shows.
      float halo = exp(-dist / (size * 2.5 + px)) * 0.22
        * smoothstep(0.28 / scale, 0.0, dist);
      // Embers live in the air above the seam and cool as they rise.
      float life = smoothstep(-0.01, 0.025, above)
        * exp(-max(above, 0.0) * mix(2.5, 6.0, uUnity) / max(uSpread, 0.25));
      // Broken, they drift loose everywhere.
      life = mix(0.5 * smoothstep(0.75, 0.05, abs(q.y)), life, uUnity);
      float tw = 0.5 + 0.5 * sin(t * (2.0 + h * 6.0) + h * 40.0);
      float a = (spark + halo) * life * tw * reach * (0.45 + 0.55 * uHeat) * (1.0 + wave * 1.5);
      vec3 c = streamColor(h * 7.0 + fl * 0.33);
      float cool = smoothstep(0.0, 0.25, max(above, 0.0));
      emberAdd += mix(vec3(1.0, 0.96, 0.9), c, 0.45 + 0.55 * cool) * a * (1.15 - fl * 0.25);
      emberInk += spark * life * tw * reach;
      emberInkCol += c * spark * life * tw * reach;
    }

    // --- Compose ----------------------------------------------------------
    vec2 vp = vUv - 0.5;
    float vignette = smoothstep(1.0, 0.18, length(vp * vec2(aspect * 0.72, 1.2)));
    vec3 col;
    if (uDark > 0.5) {
      // The abyss sits a step below the page color; light is added on top.
      vec3 abyss = uBg * mix(0.45, 1.0, vignette) * (1.0 + density * 0.25);
      vec3 add = vec3(0.0);
      add += smokeCol * density * lit * 0.2 * uHeat;
      add += mix(smokeCol, vec3(1.0), 0.2) * wisps * lit * 0.45 * uHeat;
      // Far from the seam, smoke only dims the dark a little.
      add += uBg * wisps * 0.12 * (1.0 - lit);
      add += seamCol * glow * 0.3 * glowBurn;
      add += mix(seamCol, vec3(1.0), 0.4) * inner * 0.95 * burn;
      add += vec3(1.0, 0.97, 0.92) * core * 1.3 * burn;
      add += seamCol * branch * 0.35 * uHeat;
      add += reflCol * reflection * 0.45 * uHeat * reach * alive * pocket;
      add += emberAdd * 1.5;
      // Smoke drifts across the seam and veils it.
      add *= 1.0 - density * 0.3 * (1.0 - inner);
      col = abyss + add;
      col = 1.0 - exp(-col * 1.35);
    } else {
      // On paper: ink smoke, a dark seam with a soft colored halo, ink sparks.
      vec3 paper = uBg;
      col = paper;
      col = mix(col, smokeCol * 0.55 + paper * 0.45, clamp((density * 0.06 + wisps * 0.2) * lit * uHeat, 0.0, 1.0));
      col = mix(col, paper * 0.93, density * 0.08 * (1.0 - vignette * 0.5));
      vec3 halo = mix(paper, seamCol, 0.6);
      col = mix(col, halo, clamp(glow * 0.26 * glowBurn, 0.0, 1.0));
      col = mix(col, seamCol * 0.55, clamp(branch * 0.35, 0.0, 1.0));
      col = mix(col, mix(paper, seamCol * 0.6, 0.6), clamp(reflection * 0.4 * reach * alive, 0.0, 1.0));
      col = mix(col, seamCol * 0.38, clamp((inner * 0.6 + core) * burn * 0.85, 0.0, 0.8));
      vec3 sparkInk = emberInk > 0.0 ? (emberInkCol / emberInk) * 0.6 : vec3(0.0);
      col = mix(col, sparkInk, clamp(emberInk * 0.85, 0.0, 0.8));
      col = mix(paper, col, mix(0.75, 1.0, vignette));
    }

    // A whisper of film grain.
    col += (hash2(gl_FragCoord.xy + fract(t * 7.0) * 113.0) - 0.5) * 0.016;
    gl_FragColor = vec4(col, 1.0);
  }
`

interface Options {
  canvas: HTMLCanvasElement
  onReady: () => void
  onLost: () => void
}

/**
 * The world behind the page: the river Styx at night. Ink smoke drifts
 * downstream, lit from below by a molten seam, and embers in the three minds'
 * colors (designer, developer, agent) rise from it. The director breaks the
 * seam while the problem is told, seals it as Cerberus answers, and opens it
 * like a gate at the close.
 * One canvas, one job. It renders only while it is visible and active.
 */
export function createWorld(options: Options): World {
  const { canvas } = options
  const renderer = new WebGLRenderer({
    canvas,
    antialias: false,
    alpha: false,
    powerPreference: 'low-power',
  })
  const dpr = Math.min(window.devicePixelRatio || 1, 1.25)
  renderer.setPixelRatio(dpr)

  const uniforms = {
    uRes: { value: new Vector2(1, 1) },
    uTime: { value: 0 },
    uPointer: { value: new Vector2(0.5, 0.5) },
    uPointerAmt: { value: 0 },
    uPulse: { value: new Vector3(0, 0, -10) },
    uUnity: { value: 1 },
    uSpread: { value: 1 },
    uHorizon: { value: -0.2 },
    uTilt: { value: 0 },
    uHeat: { value: 1 },
    uGate: { value: 0 },
    uC0: { value: new Vector3(0.6, 0.4, 0.9) },
    uC1: { value: new Vector3(0.3, 0.7, 0.9) },
    uC2: { value: new Vector3(0.9, 0.7, 0.3) },
    uBg: { value: new Vector3(0.05, 0.05, 0.06) },
    uDark: { value: 1 },
  }

  const material = new ShaderMaterial({
    uniforms,
    vertexShader: vertex,
    fragmentShader: fragment,
  })
  const geometry = new PlaneGeometry(2, 2)
  const scene = new Scene()
  scene.add(new Mesh(geometry, material))
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1)

  let frame: WorldFrame | null = null
  const target = { x: 0.5, y: 0.5, amt: 0 }
  const pointer = { x: 0.5, y: 0.5, amt: 0 }
  let raf = 0
  let active = true
  let lost = false
  let start = performance.now()

  const resize = () => {
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    renderer.setSize(w, h, false)
    uniforms.uRes.value.set(w * dpr, h * dpr)
  }
  const observer = new ResizeObserver(resize)
  observer.observe(canvas)
  resize()

  const render = (now: number) => {
    raf = 0
    if (!active || lost || document.hidden) return
    uniforms.uTime.value = (now - start) / 1000
    pointer.x += (target.x - pointer.x) * 0.08
    pointer.y += (target.y - pointer.y) * 0.08
    pointer.amt += (target.amt - pointer.amt) * 0.05
    uniforms.uPointer.value.set(pointer.x, pointer.y)
    uniforms.uPointerAmt.value = pointer.amt
    if (frame) {
      const { state, colors, background, dark } = frame
      uniforms.uUnity.value = state.unity
      uniforms.uSpread.value = state.spread
      uniforms.uHorizon.value = state.horizon
      uniforms.uTilt.value = state.tilt
      uniforms.uHeat.value = state.heat
      uniforms.uGate.value = state.gate
      uniforms.uC0.value.set(...colors[0])
      uniforms.uC1.value.set(...colors[1])
      uniforms.uC2.value.set(...colors[2])
      uniforms.uBg.value.set(...background)
      uniforms.uDark.value = dark ? 1 : 0
    }
    renderer.render(scene, camera)
    raf = requestAnimationFrame(render)
  }

  const wake = () => {
    if (!raf && active && !lost && !document.hidden)
      raf = requestAnimationFrame(render)
  }
  const onVisibility = () => {
    if (document.hidden) {
      cancelAnimationFrame(raf)
      raf = 0
    } else wake()
  }
  document.addEventListener('visibilitychange', onVisibility)

  const onLost = (event: Event) => {
    event.preventDefault()
    lost = true
    cancelAnimationFrame(raf)
    raf = 0
    options.onLost()
  }
  canvas.addEventListener('webglcontextlost', onLost)

  requestAnimationFrame((now) => {
    start = now
    render(now)
    options.onReady()
  })

  return {
    setFrame(next) {
      frame = next
      wake()
    },
    setPointer(x, y) {
      if (x === null) {
        target.amt = 0
        return
      }
      // Screen y grows downward; the shader's grows upward.
      target.x = x / Math.max(1, canvas.clientWidth)
      target.y = 1 - y / Math.max(1, canvas.clientHeight)
      target.amt = 1
    },
    pulse(x, y) {
      uniforms.uPulse.value.set(
        x / Math.max(1, canvas.clientWidth),
        1 - y / Math.max(1, canvas.clientHeight),
        uniforms.uTime.value,
      )
    },
    setActive(next) {
      if (active === next) return
      active = next
      if (active) wake()
      else {
        cancelAnimationFrame(raf)
        raf = 0
      }
    },
    dispose() {
      active = false
      cancelAnimationFrame(raf)
      observer.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      canvas.removeEventListener('webglcontextlost', onLost)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      renderer.forceContextLoss()
    },
  }
}
