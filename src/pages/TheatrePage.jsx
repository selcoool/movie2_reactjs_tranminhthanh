import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Theatre from '../components/Theatre'
import SliderMovie from '../components/SliderMovie'

function TheatrePage() {
  return (
    <div className=' dark:bg-slate-500 flex flex-col justify-center items-center'>
     <Header></Header>

   <SliderMovie></SliderMovie>

     <Theatre></Theatre>

     <Footer></Footer>
    </div>
  )
}

export default TheatrePage
