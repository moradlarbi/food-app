import Link from 'next/link'
import { useRef, useState } from 'react'
const Header = () => {
    const [navRespo, setNavRespo] = useState(false)
  return (
    <header className=' w-full flex md:flex-row md:items-center flex-col'>
        <nav className=' flex py-6 px-4 md:px-0'>
            <div className='md:mr-12 cursor-pointer '>
                <Link href="/"><img src='/assets/logo.svg' alt='logo'></img></Link>
            </div>
            <div className="flex-auto flex justify-end">
                <div className=" md:hidden relative cursor-pointer flex gap-1 flex-col justify-center" onClick={() => {
                    setNavRespo(!navRespo)
                }}>
                    <div className=' w-7 h-1 bg-white rounded'></div>
                    <div className=' w-7 h-1 bg-white rounded'></div>
                    <div className=' w-7 h-1 bg-white rounded'></div>
                </div>
            </div>
        </nav>
        <div className={navRespo === true ? "absolute top-20 z-50 w-full overflow-hidden md:relative":"absolute top-20 w-full overflow-hidden md:relative md:top-0"}>
            <ul className={navRespo === true ? "flex flex-col justify-center bg-responav w-full gap-8 p-5 transition-transform md:bg-background md:flex-row md:flex translate-y-0 ":"flex flex-col justify-center md:bg-background bg-responav w-full gap-8 p-5 transition-transform md:flex-row md:flex -translate-y-full md:translate-y-0 "}>
                <li className=' mr-10'>
                    <Link href="/"><a className=' text-base hover:text-primary  duration-300 '>Home </a></Link>
                </li>
                <li className=' mr-10'>
                    <Link href="/Menu"><a className=' text-base hover:text-primary  duration-300 '>Menu </a></Link>
                </li>
                <li className=' mr-10'>
                    <Link href="/About"><a className=' text-base hover:text-primary  duration-300 '>About Us </a></Link>
                </li>
                <li className=' mr-10'>
                    <Link href="/Story"><a className=' text-base hover:text-primary  duration-300 '>Our Story </a></Link>
                </li>
                <li className=' mr-10'>
                    <Link href="/Blogs"><a className=' text-base hover:text-primary  duration-300 '>Blog </a></Link>
                </li>
                <li className=' mr-10'>
                    <Link href="/Contact"><a className=' text-base hover:text-primary  duration-300 '>Contact </a></Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header