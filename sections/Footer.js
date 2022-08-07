import React from 'react'

const Footer = () => {
  return (
    <footer className='py-6 text-center text-gray-500'>
      Copyright &copy; {new Date().getFullYear()} <span className='dark:text-gray-100 text-gray-900 font-bold'>ilosrim</span>
    </footer>
  )
}

export default Footer