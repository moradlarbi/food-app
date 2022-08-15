import Link from 'next/link'
import React from 'react'

const Article = ({blog}) => {
  return (
    <div className='flex gap-x-10'>
        <img src={blog.link} alt="" className=''></img>
        <div className=' flex flex-col justify-center gap-7'>
            <div className='flex items-center'>
                <img src='/assets/writer-blog.png' alt="" className=' mr-4'></img>
                <div className=' flex flex-col gap-2'>
                    <h2>{blog.writer}</h2>
                    <h2 className=' text-grey'>{blog.date}</h2>
                </div>
            </div>
            <h2>{blog.title}</h2>
            <div className=' flex items-center'>
                <Link href={{
                    pathname: "/Blogs/" + blog.id,
                    query: {
                        data: JSON.stringify(blog),
                    },
                }}>
                    <a className=' flex cursor-pointer'>Read More <img src='/assets/whiteArrow.svg' alt='' className=' ml-7'></img></a>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default Article