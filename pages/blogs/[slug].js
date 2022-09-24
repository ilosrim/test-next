import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import Image from 'next/image'

export default function PostPage({
   frontmatter: { title, date, cover_image, excerpt }, 
   slug, 
   content 
  }) {
  return (
    <div className='container'>
      <Link href='/blogs'>
        <a className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go back</a>
      </Link>
      <div className='my-3'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='text-gray-500 py-3'>Posted on {date}</p>
        <Image src={cover_image} alt={excerpt} width={900} height={500} />
        <div>
          <div dangerouslySetInnerHTML={{__html: marked(content)}}></div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: {slug} }) {

  const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')
  const { data: frontmatter, content } = matter(markdownWithMeta)
  return {
    props: {
      frontmatter,
      slug,
      content
    },
  }
}

