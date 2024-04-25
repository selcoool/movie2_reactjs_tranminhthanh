import React, { useEffect, useRef, useState } from 'react';
import { Button, Carousel } from 'antd';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { FaRegCirclePlay } from "react-icons/fa6";
import { api_movies } from '../services/apiMovies';




function Banner() {
  const [slides, setSlides] = useState();

 
  useEffect(() => {
    api_movies.layThongTinBanner()
      .then((data) => {
        setSlides(data.data.content);
        // console.log('yyyyyyyyyyyyyyyyyy',data.data)
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);


    const ref = useRef();
  return (
    <div className='max-w-[1496px] flex justify-center items-center'>
      <div className='w-screen h-80 flex justify-center items-center relative'>
        <div className='w-full h-full'>
          <Carousel style={{marginLeft:0,marginRight:0}} className=' h-80 max-w-[1496px] flex justify-center items-center relative'  ref={ref} dots={true}>

            {slides?.map((slide,index)=>{
              return (
                <div key={index} className='max-w-[1496px] w-screen h-80 '>
                <img className="object-cover max-w-[1496px] w-screen  h-full" src={slide.hinhAnh} alt='slide-1' />
              </div>
              )
            })}
           
            
          </Carousel>
        </div>
        <div className='absolute left-4 cursor-pointer ' onClick={() => { ref.current.prev() }}>
          <FaAngleLeft className='text-[35px] text-white' />
        </div>
        <div className='absolute right-4 cursor-pointer' onClick={() => { ref.current.next() }}>
          <FaAngleRight className='text-[35px] text-white' />
        </div>
        <div className='absolute  cursor-pointer'><FaRegCirclePlay className='text-[50px] text-white'/></div>
      </div>
    </div>
  )
}

export default Banner
