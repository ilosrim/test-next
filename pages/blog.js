import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post'
import { sortByDate } from '../utils'

export default function Blog({ posts }){
  return(
    <section className='container flex justify-between gap-4'>
      {posts.map((post, idx) => (
        <div key={idx}>
          <Post post={post} />
        </div>
      ))}
    </section>
  )
}

export async function getStaticProps() {
  // Get files from post dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map(filename => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    }
  }
}