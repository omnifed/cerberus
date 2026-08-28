// import { blog } from '#site/content'

// export function getBlogPosts() {
//   return blog
// }

export function getDocslugs() {
  return []
  // return blog.map((post) => ({ slug: post.slug }))
}

export function getDocPost(path: string) {
  console.log('Get doc post for path: ', path)
  return null
  // return blog.find((post) => post.slug === slug)
}
