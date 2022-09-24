// import axios from 'axios'
// import AllNews from '../components/AllNews';

const News = ({ news }) => {
  // posts.data = id, attribute objects
  return (
    <div className="container">
      {/* <AllNews news={news} /> */}
      <h1>News Section</h1>
    </div>
  )
}

export default News

// export async function getStaticProps(){

//   const res = await axios.get("https://strapi-chem.herokuapp.com/api/blogs")

//   return {
//     props: {
//       news: res.data
//     }
//   }
// }