import React from 'react'

const AllNews = ({ news }) => {

  return (
    <div className='box-content border-solid border-white'>
        {news.data.map(({ attributes }) => (
          <div key={attributes.updatedAt} className='m-3'>
            <h1>{attributes.title}</h1>
            <p>{attributes.description}</p>
          </div>
        ))}
    </div>
  )
}

export default AllNews