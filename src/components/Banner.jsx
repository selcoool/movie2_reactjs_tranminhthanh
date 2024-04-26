import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { api_movies } from '../services/apiMovies';
import Modal from './Modal';
import { FaRegCirclePlay } from "react-icons/fa6";

function Banner() {
  const [slides, setSlides] = useState();
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  console.log('slides', slides);

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



  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="h-[300px] lg:h-[500px] w-full flex justify-center relative group shadow-sm shadow-slate-500">
      {slides && (
        <div className={`w-full h-[300px] lg:h-[500px] flex items-center justify-center bg-center bg-cover duration-500`}>
          <img src={slides[currentIndex]?.hinhAnh} className='w-full h-[300px] lg:h-[500px] object-cover' alt="" />
         <div className='absolute   text-white text-8xl' onClick={()=>setIsOpen(!isOpen)}><FaRegCirclePlay className='hover:scale-105 cursor-pointer'/></div>
         
         <Modal isOpen={isOpen} setIsOpen={setIsOpen} maPhim={slides[currentIndex]?.maPhim} />
        
         

        </div>
      )}
     

      <div className=" absolute top-[50%]  translate-y-[50%] left-5 cursor-pointer">
        <FaChevronLeft size={30} color="white" onClick={prevSlide} />
      </div>

      <div className=" absolute top-[50%] translate-y-[50%] right-5 cursor-pointer">
        <FaChevronRight size={30} color="white" onClick={nextSlide} />
      </div>

      <div className="absolute flex justify-center items-center bottom-5 gap-4">
        {slides &&
          slides.map((slide, slideIndex) => (
            <div key={slideIndex}>
              <div
                onClick={() => goToSlide(slideIndex)}
                className={`w-[15px] h-[15px] rounded-full transition-all duration-500 ${
                  currentIndex === slideIndex ? 'p-3 bg-white' : 'bg-slate-600'
                } cursor-pointer`}
              ></div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Banner;

















// import React, { useEffect, useRef, useState } from 'react';
// import { Button, Carousel } from 'antd';
// import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
// import { FaRegCirclePlay } from "react-icons/fa6";
// import { api_movies } from '../services/apiMovies';
// import Modal from './Modal';




// function Banner() {
//   const [slides, setSlides] = useState();
//   const [isOpen, setIsOpen] = useState(false);

 
//   useEffect(() => {
//     api_movies.layThongTinBanner()
//       .then((data) => {
//         setSlides(data.data.content);
//         // console.log('yyyyyyyyyyyyyyyyyy',data.data)
//       })
//       .catch((err) => {
//         console.log('error', err);
//       });
//   }, []);


//     const ref = useRef();
//   return (
//     <div className='max-w-[1496px] flex justify-center items-center'>
//       <div className='w-screen h-80 flex justify-center items-center relative'>
//         <div className='w-full h-full'>
//           <Carousel style={{marginLeft:0,marginRight:0}} className=' h-80 max-w-[1496px] flex justify-center items-center relative'  ref={ref} dots={true}>

//             {slides?.map((slide,index)=>{
//               return (
//                 <div key={index} className='max-w-[1496px] w-screen h-80 '>
//                 <img className="object-cover max-w-[1496px] w-screen  h-full" src={slide.hinhAnh} alt='slide-1' />
                
//               </div>
//               )
//             })}
           
            
//           </Carousel>
//           <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
         
//         </div>
//         <div className='absolute left-4 cursor-pointer ' onClick={() => { ref.current.prev() }}>
//           <FaAngleLeft className='text-[35px] text-white' />
//         </div>
//         <div className='absolute right-4 cursor-pointer' onClick={() => { ref.current.next() }}>
//           <FaAngleRight className='text-[35px] text-white' />
//         </div>
//         <div className='absolute  cursor-pointer'><FaRegCirclePlay onClick={()=>setIsOpen(!isOpen)} className='text-[50px] text-white'/></div>
       
//       </div>
//     </div>
//   )
// }

// export default Banner
