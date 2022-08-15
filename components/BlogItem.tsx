import React from 'react'
import Link from 'next/link'
const BlogItem = ({item}) => {
  return (
    <Link href="/Blogs">
      <div className='mt-4 pt-8 cursor-pointer bg-darkGrey flex justify-between flex-col'>
          <div className='px-6 pb-10'>
              <h3 className=' text-grey text-xs mb-4'>{item.date}</h3>
              <h1 className=' text-3xl font-bold mb-4'>{item.title}</h1>
              <h4 className=' text-grey text-base'>{item.content.substring(0,20)}</h4>
          </div>
          <img src={item.link} className=" w-full h-2/3" alt='blog img'></img>
      </div>
    </Link>
  )
}

export default BlogItem