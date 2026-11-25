import { blog } from '#site/content'
import semver from 'semver'

/** `'1.10'` → `'1.10.0'`, so release versions compare as semver, not decimals. */
function toSemver(version: string): string {
  return semver.coerce(version)?.version ?? '0.0.0'
}

/**
 * Returns every blog post, newest release version first.
 * Posts with the same version fall back to the newest date first.
 */
export function getBlogPosts() {
  return [...blog].sort(
    (a, b) =>
      semver.rcompare(toSemver(a.version), toSemver(b.version)) ||
      new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
}

export function getBlogSlugs() {
  return blog.map((post) => ({ slug: post.slug }))
}

export function getBlogPost(slug: string) {
  return blog.find((post) => post.slug === slug)
}
