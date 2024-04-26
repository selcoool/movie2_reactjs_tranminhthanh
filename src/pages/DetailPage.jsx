import React from 'react'

import DetailMovie from '../components/DetailMovie';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Theatre from '../components/Theatre';
import SliderMovie from '../components/SliderMovie';

function DetailPage() {
   

  return (
    <div className='dark:bg-slate-500 flex flex-col justify-center items-center'>
         <Header></Header>
        
        <DetailMovie> </DetailMovie>
        <Theatre></Theatre>
        <Footer></Footer>
    </div>
  )
}

export default DetailPage
