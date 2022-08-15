import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import Article from '../../components/Article'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { request, GraphQLClient, gql } from 'graphql-request';
const Blogs = () => {
    const [blogs, setBlogs] = useState([{
        "id": "1",
        "title": "The best guacamole recipe with only 4 ingredients",
        "content": "It is a long established fact that a reader will be distracted by the readable content of a page.",
        "date": "22/05/2001",
        "writer": "Morad Larbi",
        "link": "/assets/blog1.svg",
    },])
    const [featuredBlogs, setFeaturedBlogs] = useState([0])
    const [actifBlog,setActifBlog] = useState(featuredBlogs[0]);
    useEffect(()=> {
        async function fetchData() {
          const endpoint = "/api/graphql"
          const graphqlClient = new GraphQLClient(endpoint, {});
          const query = gql`
          query {
            getBlogs {
              id
              title
              date
              content
              link
            }
          }
          `
          const data = await graphqlClient.request(query);
          return data
        }
        fetchData()
        .then(data => {
          setBlogs(data.getBlogs)
          setFeaturedBlogs([0,1,2])
        })
        .catch(console.error);
      
      },[])
    
  return (
    <div className='px-0 md:px-[120px] w-full'>
        <Header />
        <div className=' w-full flex flex-col items-center mt-10'>
            <h1 className=' text-6xl mb-14'>Featured Blogs</h1>
            <div className='w-full grid md:grid-cols-2 grid-cols-1 grid-rows-3 gap-8'>
                <div className=' row-span-3 relative my-2 before:content-[""] before:w-full before:z-10 before:h-full before:absolute before:top-0 before:left-0 before:bg-darkGrey/60 '>
                    <img src={blogs[actifBlog].link} alt="blog image" className='absolute top-0 left-0 z-0 w-full h-full'></img>
                    <div className='relative z-20 flex flex-col pb-10 h-full'>
                        <button className=' uppercase bg-brown/50 px-8 py-5 w-fit '>Trending</button>
                        <h1 className=' text-6xl px-16 flex-auto flex items-end mb-14'>{blogs[actifBlog].title}</h1>
                        <div className='flex px-16 justify-between'>
                            <div className='flex items-center'>
                                <img src='/assets/writer-blog.png' alt='' className=' mr-4'></img>
                                <div className=' flex flex-col gap-2'>
                                    <h2>{blogs[actifBlog].writer}</h2>
                                    <h2 className=' text-grey'>{blogs[actifBlog].date}</h2>
                                </div>
                            </div>
                            <div className=' flex items-center'>
                                <Link href={{
                                    pathname: "/Blogs/"+ blogs[actifBlog].id,
                                    query: {
                                        data: JSON.stringify(blogs[actifBlog]),
                                    },
                                }}>
                                    <a className=' flex cursor-pointer'>Read More <img src='/assets/whiteArrow.svg' alt='' className=' ml-2'></img></a>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
                {
                    featuredBlogs.map((i,index) => {
                        return <div className=' row-span-1 flex gap-8' key={index}>
                            <img src={blogs[i].link} alt='' className=' aspect-square cursor-pointer' onClick={(e) => {
                            setActifBlog(i)
                        }}></img>
                            <div className=' flex flex-col gap-y-3'>
                                <h1 className=' text-3xl mt-2'>{blogs[i].title}</h1>
                                <h3 className=' text-grey'>{blogs[i].content.substring(0,20)}</h3>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
        <div className=' w-full flex flex-col items-center mt-20'>
            <h1 className=' text-6xl mb-14'>All Articles</h1>
            <div className=' grid md:grid-cols-2 grid-cols-1 gap-x-24 gap-y-10'>
            {
                blogs.map((blog,index) => {
                    return <Article blog={blog} key={index} />
                })
            }
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Blogs