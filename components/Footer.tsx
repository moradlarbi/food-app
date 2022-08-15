import Link from 'next/link'
import React from 'react'
import Facebook from "../public/assets/facebook.svg"
import Twitter from "../public/assets/twitter.svg"
import Instagram from "../public/assets/instagram.svg"
import Linkedin from "../public/assets/linkedin.svg"
import Arrow from "../public/assets/arrow.svg"
const Footer = () => {
  return (
    <div className=' mt-30 md:px-0 px-4'>
        <div className=' flex mb-16 w-full flex-col md:flex-row'>
            <div className=' bg-darkGrey flex md:justify-center items-center'>
                <ul className=' flex flex-col md:pl-16 md:pr-44 px-4 py-4'>
                    <li className=' mb-5'>
                        <h1 className=' font-bold text-xl mb-2'>Working Hour</h1>
                        <h3 className=' text-grey text-base'>Sunday to Saturday <br></br> 09:00 AM to 11:00 PM</h3>
                    </li>
                    <li className='mb-5'>
                        <h1 className=' font-bold text-xl mb-2'>Location</h1>
                        <h3 className=' text-grey text-base'>Street - 127, New York, <br></br> United States <br></br> 546544</h3>
                    </li>
                    <li className='mb-5'>
                        <h1 className=' font-bold text-xl mb-2'>Contact Us</h1>
                        <h3 className=' text-grey text-base'>+123456789 <br></br> hey@yourdomain.com</h3>
                    </li>
                </ul>
            </div>
            <div className=' w-full z-0 relative after:h-full after:w-full after:bg-darkGrey/30 after:z-10 after:content-[""] after:absolute after:top-0'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51844.11375767811!2d-0.6393881499999998!3d35.6952901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e89caaf7f4d2b%3A0xe20485325a2e364a!2sLes%20Castors%20Oran!5e0!3m2!1sfr!2sdz!4v1648507780111!5m2!1sfr!2sdz" width="600" height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className=' w-full'></iframe>
            </div>
        </div>
        <nav className=' flex flex-col items-center py-6 justify-center'>
            <div className=' mb-6 w-full flex justify-center'>
                <img src='/assets/logo.svg' alt='logo'></img>
            </div>
            <ul className=' flex md:flex-row justify-center flex-col items-center w-full gap-4'>
                <li className=' md:mr-10'>
                    <Link href="/"><a className=' text-grey text-base hover:text-primary  duration-300 '>Home </a></Link>
                </li>
                <li className=' md:mr-10'>
                    <Link href="/About"><a className='text-grey text-base hover:text-primary  duration-300 '>About Us </a></Link>
                </li>
                <li className=' md:mr-10'>
                    <Link href="/Story"><a className='text-grey text-base hover:text-primary  duration-300 '>Our Story </a></Link>
                </li>
                <li className=' md:mr-10'>
                    <Link href="/Blogs"><a className='text-grey text-base hover:text-primary  duration-300 '>Blog </a></Link>
                </li>
                <li className=' md:mr-10'>
                    <Link href="/Contact"><a className='text-grey text-base hover:text-primary  duration-300 '>Contact </a></Link>
                </li>
            </ul>
        </nav>
        <div className=' flex md:flex-row flex-col items-center gap-8 md:justify-between w-full py-6 border-t border-white'>
            <h3 className=' text-grey'>© 2021 Finsweet | All rights reserved.</h3>
            <ul className=' flex items-center w-full justify-between px-8'>
                <li className=' md:mr-10'>
                    <a href='#' className=' text-base hover:text-primary  duration-300 '>
                        <Facebook className=" w-8 md:w-4" />
                    </a>
                </li>
                <li className=' md:mr-10'> 
                    <a href='#' className=' text-base hover:text-primary  duration-300 '>
                        <Twitter className=" w-8 md:w-4" />
                    </a>
                </li>
                <li className=' md:mr-10'>
                    <a href='#' className=' text-base hover:text-primary  duration-300 '>
                        <Instagram className=" w-8 md:w-4"/>
                    </a>
                </li>
                <li className=' md:mr-30'>
                    <a href='#' className=' text-base hover:text-primary  duration-300 '>
                        <Linkedin className=" w-8 md:w-4"/>
                    </a>
                </li>
                    
                    
                
            </ul>
            <div>
                <h3 className=' flex items-center cursor-pointer'>Contact Us <Arrow className='arrow ml-2 hover:text-primary cursor-pointer' /> </h3>
            </div>
        </div>
    </div>
  )
}

export default Footer