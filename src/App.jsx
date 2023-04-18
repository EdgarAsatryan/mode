import { useEffect, useRef, useState } from 'react'
import '../src/index.css'

function App() {
  const [bulean, setBulean] = useState()
  const handleMode = (() => {
    setBulean(!bulean)
    console.log(bulean);
  })
  return (
    <div className={bulean ? "bg-gray-900 h-[150vh]" : "bg-white"} >
      <header className='bg-[url(../photos/header-bg.png)] bg-cover bg-no-repeat bg-center w-full min-h-[95px] flex justify-center items-center mt-2'>
        <div className='w-[85%] h-full flex justify-between items-center'>
        <div className="flex">
          <a href="#" className='bg-[url(../photos/templatemo-eduwell.png)] bg-cover bg-no-repeat bg-center w-[150px] h-[40px]'></a>
        </div>
        <nav>
          <ul className='flex items-center gap-[65px] text-white text-lg'>
            <li className='list-item'><a href="#" className='list-link'>Home</a></li>
            <li className='list-item'><a href="#" className='list-link'>Services</a></li>
            <li className='list-item'><a href="#" className='list-link'>Courses</a></li>
            <li className='list-item'><a href="#" className='list-link'>Pages</a></li>
            <li className='list-item'><a href="#" className='list-link'>Testimonials</a></li>
            <li className='list-item'><a href="#" className='list-link'>Contact Us</a></li>
            <li><button onClick={handleMode}>{bulean ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 fill-[#b3b3b3]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 fill-yellow-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>}</button></li>
          </ul>
        </nav>
        </div>
      </header>
      <section className='learn-design w-full h-screen relative flex justify-center items-center'>
          <div className='w-[85%] h-full flex items-center justify-between'>
            <div className='w-[400px] flex flex-col gap-3 z-40'>
              <span className={bulean ?'text-2xl text-white':'text-2xl text-gray-800'}>Welcome To Our School</span>
              <h1 className={bulean ? "text-[56px] font-extrabold text-white" :'text-[56px] font-extrabold'}>Best Place To Learn Graphic <span className={bulean ? "text-[#e23adf]" :'text-[#dc8cdb]'}>Design!</span></h1>
              <button className={bulean ? 'w-[150px] h-[50px] bg-[#e23adf] font-bold text-white text-lg rounded-lg' :'w-[150px] h-[50px] font-bold bg-[#dc8cdb] text-white text-lg rounded-lg'}>JOIN US NOW!</button>
            </div>
          <div className='bg-[url(../photos/banner-right-image.png)] bg-cover bg-no-repeat bg-center w-[450px] h-[500px] z-20'></div>
          </div>
        <div className='bg-[url(../photos/banner-left-dec.png)] bg-cover bg-no-repeat bg-center left-0 -bottom-48 w-[215px] h-[430px] absolute'></div>
        <div className='bg-[url(../photos/banner-right-dec.png)] bg-cover bg-no-repeat bg-center right-[5%] top-[100px] w-[378px] h-[378px] absolute'></div>
      </section>
    </div>
  )
}

export default App
