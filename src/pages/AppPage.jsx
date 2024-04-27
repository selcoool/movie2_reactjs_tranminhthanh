import React from 'react'
import Header from '../components/Header'
import SliderMovie from '../components/SliderMovie'
import Theatre from '../components/Theatre'
import Footer from '../components/Footer'
import ListApp from '../components/ListApp'

function AppPage() {
  return (
    <div className=' dark:bg-slate-500 flex flex-col justify-center items-center'>
    <Header></Header>

    <SliderMovie></SliderMovie>

 
   <ListApp></ListApp>
  

    <Theatre></Theatre>

    <Footer></Footer>
   </div>
  )
}

export default AppPage
