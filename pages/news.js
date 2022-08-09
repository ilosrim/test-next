import axios from 'axios'
import AllNews from '../components/AllNews';

const News = ({ news }) => {
  // posts.data = id, attribute objects
  return (
    <div>
      <AllNews news={news} />
    </div>
  )
}

export default News

export async function getStaticProps(){

  const res = await axios.get("https://strapi-chem.herokuapp.com/api/blogs")

  return {
    props: {
      news: res.data
    }
  }
}