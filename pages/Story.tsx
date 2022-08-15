import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Story = () => {
  return (
    <div className='px-[16px] md:px-[120px] w-full'>
        <Header />
        <div className=' flex md:flex-row flex-col py-8 mb-20 relative'>
            <div className=' md:w-1/2 w-full py-8'>
                <h1 className='font-bold text-5xl'>Our Story</h1>
                <h3 className=' text-grey text-base tracking-tight pt-10 md:w-3/4'>Edit this text to make it your own. To edit, simply click directly on the text to start adding your own words. You can move the text by dragging and dropping the text anywhere on the page. </h3>
                <div className=' flex relative z-10 pt-10 md:pt-0'>
                    <img src='/assets/story1.png' alt='coffe image' className=' md:w-60 w-1/3 md:h-story mr-16 md:mt-24'></img>
                    <img src='/assets/story2.png' alt='coffe image' className=' md:w-60 w-1/3 md:h-story md:mt-8'></img>
                </div>
            </div>
            <div className=' flex flex-col py-8 md:w-1/2 w-full px-16'>
                <h1 className=' text-4xl mb-8'>One of the best Cafes in <span className=' text-primary'>New York</span></h1>
                <h3 className=' text-grey mb-4'>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for error messages.</h3>
                <h3 className=' text-grey mb-4'>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for error messages.</h3>
                
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Story