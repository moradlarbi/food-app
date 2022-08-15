import Footer from "../../components/Footer"
import Header from "../../components/Header"

export async function getServerSideProps (context) {
    return {
        props: { 
           blog: JSON.parse(context.query.data)
        }
    }
}
const Blog = ({blog}) => {
  return (
     <div className="px-0 md:px-[120px] w-full">
         <Header />
         <div className=" mt-10 w-full md:px-48">
            <div className='flex items-center w-2/3 mx-auto relative justify-center gap-4 after:content-[""] after:absolute after:-bottom-7 after:left-0 after:border-b-2 after:border-white/5 after:h-7 after:w-full'>
                <img src='/assets/writer-blog.png' alt="" className=' mr-4'></img>
                <h2>{blog.writer}</h2>
                <h2 className=' text-grey'>Posted on {blog.date}</h2>
            </div>
            <h1 className=" md:text-6xl text-3xl text-center my-14">
                {blog.title}
            </h1>
         </div>
         <img src={blog.link} alt="" className=" mx-auto"></img>
         <div className="w-full flex flex-col items-center md:px-48 px-4">
            <h1 className=" text-6xl mt-16 mb-10">{blog.title}</h1>
            <div className=" flex flex-col gap-2">
                <p className=" text-grey">{blog.content}</p>
            </div>
         </div>
         <Footer />
     </div>
  )
}

export default Blog