import { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from "../styles/About.module.css"
import Image from 'next/image'
const About = () => {
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
      const [history, setHistory] = useState([
        {
          "year": "1998",
          "title": "MileStone One",
          "desc": "Through True Rich Attended does no end it his mother since favourable."
        },
        {
          "year": "2005",
          "title": "MileStone Two",
          "desc": "Through True Rich Attended does no end it his mother since favourable."
        },
        {
          "year": "2012",
          "title": "MileStone Three",
          "desc": "Through True Rich Attended does no end it his mother since favourable."
        },
        {
          "year": "2021",
          "title": "MileStone Four",
          "desc": "Through True Rich Attended does no end it his mother since favourable."
        }
      ])
  return (
    <div className='px-[0px] md:px-[120px] w-full'>
        <Header />
        <div className=' flex md:flex-row flex-col py-8 mb-20 relative px-4 md:px-[0px]'>
            <div className=" h-full md:w-80 w-1/4 absolute bg-bg right-0 md:right-[-120px] z-0"></div>
            <div className=' flex flex-col py-8 md:w-1/2 w-full justify-center md:pr-16 px-4'>
              <h1 className=' flex items-center uppercase text-primary text-base relative after:ml-4 after:w-12 after:h-tiny after:content-[""]  after:bg-primary '>Know more about us</h1>
              <h1 className='mt-8 font-bold text-5xl'>We source sustainable & line caught Foods</h1>
              <h3 className=' text-grey text-base tracking-tight py-10'>Edit this text to make it your own. To edit, simply click directly on the text to start adding your own words. You can move the text by dragging and dropping the text anywhere on the page. </h3>
              <div className=' flex flex-col md:flex-row'>
                  {
                  stats.map((state,index) => {
                      return <div key={index} className='pb-8 pr-8 block'>
                      <h2 className=' text-xl font-bold flex md:flex-row flex-col gap-2'>
                        <Image src='/assets/icon.svg' width={30} height={30} alt='icon' className='md:pr-2'></Image>
                         {state.state}</h2>
                      <h2 className=' text-grey text-sm py-4'>{state.title}</h2>
                      <h2 className='text-grey text-sm tracking-normal'>{state.desc}</h2>
                      </div>
                  })
                  }
              </div>
            </div>
            <div className=' flex relative z-10 justify-around'>
              <img src='/assets/about1.png' alt='coffe image' className=' md:w-60 w-1/3 md:h-img md:mt-24 md:mr-16'></img>
              <img src='/assets/about2.png' alt='coffe image' className=' md:w-60 w-1/3 md:h-img md:mt-8'></img>
            </div>
      </div>
      <div className={styles.container}>
        <div className=' md:w-1/2 w-full relative z-10'>
          <h1 className=' md:text-6xl text-4xl md:mb-8 mn-4'>One of the best Cafes in <span className=' text-primary'>New York</span></h1>
          <h3 className=' text-grey'>Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.. Through True Rich Attended does no end it his mother</h3>
        </div>
      </div>
      <div className=' bg-bg md:px-20 md:py-24 px-4 py-8'>
        <h1 className=' text-4xl mb-20'>Our History</h1>
        <div className='flex md:flex-row flex-col'>
          {
            history.map((item,index) =>{
              return <div key={index} className='pb-8 md:pr-8 pl-14 relative md:py-5 md:border-t-2 border-dashed border-white/20 before:absolute before:top-8 md:before:-top-1 before:left-0 before:w-16 before:h-1 before:content-[""] before:bg-primary before:rotate-90 md:before:rotate-0'>
              <h2 className=' text-2xl font-bold flex md:mt-8 mb-2'> {item.year}</h2>
              <h1 className=' text-xl py-4'>{item.title}</h1>
              <h2 className='text-grey text-sm tracking-normal'>{item.desc}</h2>
              </div>
            })
          }
        </div>
        
        </div>
      <Footer />
    </div>
  )
}

export default About