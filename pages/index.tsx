import { useState, useEffect, useCallback } from 'react'
import Header from '../components/Header'
import Category from '../components/Category'
import MenuItem from '../components/MenuItem'
import BlogItem from '../components/BlogItem'
import Footer from '../components/Footer'
import styles from "../styles/Home.module.css"
import Link from 'next/link'
import { request, GraphQLClient, gql } from 'graphql-request';
export default function Home() {
  const [infos, setInfos] = useState([
    {
      "title": "Opening Times",
      "info": "Sunday to Saturday | 09:00 AM to 11:00 PM"
    },
    {
      "title": "Location",
      "info": "Master canteen, BBSR , Odisha 752054"
    },
    {
      "title": "Call Us",
      "info": "+9776462441"
    }
  ])
  const [stats, setStats] = useState([
    {
      "state": "10+ People",
      "title": "We are Small Team",
      "desc": "Through True Rich Attended does no end it his mother since favourable."
    },
    {
      "state": "2014",
      "title": "We are from",
      "desc": "Through True Rich Attended does no end it his mother since favourable."
    },
    {
      "state": "200k",
      "title": "We served",
      "desc": "Through True Rich Attended does no end it his mother since favourable."
    },
    
  ])
  const [categories, setCategories] = useState([])
  const [menus,setMenus] = useState([])
  const [blogs, setBlogs]= useState([])
  const [mt1, setMt1] = useState(50)
  const [mt2,setMt2] = useState(40)
  const [scrollDir, setScrollDir] = useState(false);

useEffect(() => {
  const threshold = 0;
  let lastScrollY = window.pageYOffset;
  let ticking = false;

  const updateScrollDir = () => {
    const scrollY = window.pageYOffset;

    if (Math.abs(scrollY - lastScrollY) < threshold) {
      ticking = false;
      return;
    }
    setScrollDir(scrollY > lastScrollY ? false : true);
    lastScrollY = scrollY > 0 ? scrollY : 0;
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollDir);
      ticking = true;
    }
    // if (scrollDir) {
    //   setMt1(mt1++)
    //   setMt2(mt2++)
    // }
    // else {
    //   setMt1(mt1--)
    //   setMt2(mt2--)
    // }
    

    

  };

  window.addEventListener("scroll", onScroll);

  return () => window.removeEventListener("scroll", onScroll);
}, [scrollDir]);
useEffect(()=> {
  async function fetchData() {
    const endpoint = "/api/graphql"
    const graphqlClient = new GraphQLClient(endpoint, {});
    const query = gql`
    query {
      getMenuItems {
        name
        price
        link
      }
      getCategorys {
        category
        description
      }
      getBlogs {
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
    setMenus(data.getMenuItems)
    setCategories(data.getCategorys)
    setBlogs(data.getBlogs)
  })
  .catch(console.error);

},[])
  return (
    <div className="px-[0px] md:px-[120px] w-full">
      <Header />
      <div className=' flex mt-12 mb-20 flex-col md:flex-row px-4 md:px-[0px]'>
        <div className=' flex flex-col pr-16 py-8'>
          <h1 className=' font-bold text-title mb-9'>We serve high quality foods of all kinds.</h1>
          <h4 className=' text-grey text-base mb-6 tracking-tight'>Edit this text to make it your own. To edit, simply click directly on the text to start adding your own words. You can move the text.</h4>
          <Link href="/Menu">
            <button className={styles.btn+' outline-none flex bg-primary w-fit text-secondary px-6 py-3 rounded-sm items-center font-semibold text-base mb-10 duration-200 hover:text-white hover:bg-bgBtn'}>
              View Menu <img src='/assets/arrow.svg' alt='arrow' className='pl-2 w-8 h-8'></img> 
            </button>
          </Link>
          <div>
            {
              infos.map( (info,index) => {
                return <div key={index} className=' pb-5'>
                  <h1 className=' md:text-xl text-2xl font-bold'>{info.title}</h1>
                  <h4 className=' opacity-60 font-light text-sm tracking-wider'>{info.info}</h4>
                </div>
              })
            }
          </div>
        </div>
        <img src='/assets/header.png' alt='coffe image' className=' md:w-6/12 w-full aspect-11/8 md:aspect-square'></img>
      </div>
      <div className=' px-4 md:px-[0px] flex py-8 mb-20 relative md:flex-row flex-col'>
        <div className=" h-full w-1/4 md:w-80 absolute bg-bg right-0 md:right-[-120px] z-0"></div>
        <div className=' flex flex-col py-8 md:w-1/2 w-full justify-center pr-3 md:pr-16'>
          <h1 className=' flex items-center uppercase text-primary text-base relative after:ml-4 after:w-12 after:h-tiny after:content-[""]  after:bg-primary '>Know more about us</h1>
          <h1 className='mt-8 font-bold text-5xl'>We source sustainable & line caught Foods</h1>
         <h3 className=' text-grey text-base tracking-tight py-10'>Edit this text to make it your own. To edit, simply click directly on the text to start adding your own words. You can move the text by dragging and dropping the text anywhere on the page. </h3>
          <div className=' flex md:flex-row flex-col'>
            {
              stats.map((state,index) => {
                return <div key={index} className='pb-8 md:pr-8'>
                  <h2 className=' text-xl font-bold flex'> <img src='/assets/icon.svg' alt='icon' className=' pr-2 w-5'></img> {state.state}</h2>
                  <h2 className=' text-grey md:text-sm text-base py-4'>{state.title}</h2>
                  <h2 className='text-grey md:text-sm text-base tracking-normal'>{state.desc}</h2>
                </div>
              })
            }
          </div>
          <Link href="/Menu">
            <button className={styles.btn+' outline-none flex bg-primary w-fit text-secondary px-6 py-3 rounded-sm items-center font-semibold text-base mb-10 duration-200 hover:text-white hover:bg-bgBtn'}>View Menu <img src='/assets/arrow.svg' alt='arrow' className=' pl-2 w-8 h-8'></img> </button>
          </Link>
        </div>
        <div className=' flex relative z-10 justify-between md:justify-start'>
          <img src='/assets/know-more1.png' alt='coffe image' className={`md:w-60 w-44 md:h-img md:mr-16 md:translate-y-[90px] translate-y-[10px]`}></img>
          <img src='/assets/know-more2.png' alt='coffe image' className={`md:w-60 w-44 md:h-img md:translate-y-[70px] translate-y-[30px]`}></img>
        </div>
      </div>
        <div className=' mb-20 md:px-0 px-4'>
          <h1 className=' flex items-center uppercase text-primary text-base relative after:ml-4 after:w-12 after:h-tiny after:content-[""]  after:bg-primary '>WHAT WE ARE SERVING</h1>
          <div className=' flex md:flex-row flex-col justify-between py-10'>
            <h1 className='font-bold text-5xl '>We all have to eat, so why not do it beautifully?</h1>
            <h3 className=' text-grey text-base tracking-tight pt-2 md:pt-0 md:pl-40'>Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.. Through True Rich Attended does no end it his mother</h3>
          </div>
          <div className=' grid gap-x-1 grid-cols-minMax mt-7'>
          {
            categories.map((categorie,index) => {
              return <Category key={index} categorie={categorie} />
            })
          }
          </div>
         </div>
         <div className='mb-16 md:px-0 px-4'>
         <h1 className=' flex items-center uppercase text-primary text-base relative after:ml-4 after:w-12 after:h-tiny after:content-[""]  after:bg-primary '>our menu</h1>
          <div className=' flex md:justify-between py-10 md:flex-row flex-col'>
            <h1 className='font-bold text-5xl md:pr-80 md:pb-0 pb-4'>Discover our menu chart</h1>
            <h3 className=' text-grey text-base tracking-tight'>Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.. Through True Rich Attended does no end it his mother</h3>
          </div>
          <h1 className=' capitalize text-xl'>Most popular picks</h1>
          <div className=' grid gap-8 grid-cols-minMax mt-7 mb-7'>
            {
              menus.slice(0,6).map((item,index) => {
                return <MenuItem key={index} item={item} />
              })
            }
            </div>
            <Link href="/Menu">
            <button className={styles.btn+' mx-auto outline-none flex bg-primary w-fit text-secondary px-6 py-3 rounded-sm items-center font-semibold text-base mb-10 duration-200 hover:text-white hover:bg-bgBtn'}>View Menu <img src='/assets/arrow.svg' alt='arrow' className=' pl-2 w-8 h-8'></img> </button>
          </Link>
         </div>
         <div className=' mb-10 md:-mx-30 flex md:m-16 md:px-0 px-4 flex-col md:flex-row'>
            <div className=' bg-darkGrey md:w-2/5 w-full flex flex-col px-[40px] py-[30px]'>
              <div className=' text-quote'>&quot</div>
              <h1 className=' text-3xl mb-16'>Edit this text to make it your own. To edit, simply click directly on the text to start adding your own words. You can move the text by dragging and dropping the text</h1>
              <div className=' flex justify-between pb-3 relative after:h-tiny after:w-full after:bg-grey after:content-[""] after:absolute after:bottom-0 '>
                <div>
                  <h3>Morad Larbi</h3>
                  <h3 className=' text-grey'>Bhubaneswar, Odisha</h3>
                </div>
                <div className=' w-fit relative after:h-1 after:w-full after:bg-white after:content-[""] after:absolute after:-bottom-3 after:rounded'>
                  <img src='/assets/writer.png' alt='img writer'></img>
                </div>  
                
              </div>
            </div>
            <div className=' relative md:w-3/5 w-full overflow-hidden cursor-pointer'>
              <img src='/assets/quote.png' alt='quote img' className=' hover:scale-110 h-full max-h-100 w-full transition-transform'></img>
              <div className=' absolute top-0 left-0 w-full h-full flex justify-center items-center cursor-pointer pointer-events-none'>
                <img src='/assets/play.svg' alt='play img'></img>
              </div>
            </div>
         </div>
         <div className='mb-16 px-4 md:px-0'>
          <h1 className='font-bold text-5xl md:pr-80'>Read Our <br></br> Lastest Blogs</h1>
          <div className=' grid gap-x-10 grid-cols-blog mt-7 mb-7'>
            {
              blogs.slice(0,3).map((item,index) => {
                return <BlogItem key={index} item={item} />
              })
            }
            </div>
         </div>
         <Footer />
    </div>
  )
};