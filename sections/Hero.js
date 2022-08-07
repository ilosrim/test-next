import React from 'react'
import Button from '../components/Button'

const Hero = () => {
  return (
    <section className='mt-16'>
      <h1 className='text-7xl font-bold'>Hi, I&apos;m <span className='dark:text-purple-600'>ilosrim</span></h1>
      <h3 className='text-4xl my-3'>I&apos;m a frontend developer</h3>
      <p className='dark:text-gray-500 text-gray-800 mb-8'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there  anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
      <Button className='bg-purple-600 text-white px-6' >Click Me!</Button>
    </section>
  )
}

export default Hero