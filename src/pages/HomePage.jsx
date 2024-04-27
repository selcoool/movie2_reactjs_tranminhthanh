import React, { useRef } from 'react';
import { Button, Carousel } from 'antd';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { FaRegCirclePlay } from "react-icons/fa6";
import Banner from '../components/Banner';
import Header from '../components/Header';
import Theatre from '../components/Theatre';
import Movie from '../components/Movie';
import Footer from '../components/Footer';



function HomePage() {


  return (
    <div className=' dark:bg-slate-500 flex flex-col justify-center items-center'>
      <Header></Header>


  
      <Banner></Banner>
   
      
     
  
      <Movie></Movie>

      <Theatre></Theatre>
      

 
      <Footer></Footer>
  

    </div>
  );
}

export default HomePage;