import React, { useEffect, useState } from 'react'
import { api_movies } from '../services/apiMovies';
import { DiAndroid } from "react-icons/di";
import { FaAppStoreIos } from "react-icons/fa";
import { MdComputer } from "react-icons/md";

function Footer() {

  const [brands,setBrands]=useState()
  // console.log('brands', brands);
  useEffect(() => {
    api_movies.layDanhSachHeThongRap()
      .then((data) => {
        setBrands(data.data.content)
        // console.log('data', data.data.content);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);

  return (
    
    <div id="ung_dung" className='dark:bg-slate-700  max-w-[1496px] w-full  flex justify-center items-center bg-slate-500 pb-4'> 

       <div className='flex max-w-[1496px]  flex-col sm:flex-row w-full min-h-[250px] pb-6 '>
  <div className='w-full  sm:w-2/4 md:w-1/3 '>
    <div className='flex  w-full  flex-col'>
       <div className='w-full pl-8'>
       <img className='w-20 h-20' src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"/>
       </div>

       <div className='w-full  pl-20 mb-3'>
       <span className='font-bold text-xl'>Công ty:</span> Tran Minh Thanh <br/>
       <span className='font-bold text-xl'>Địa chỉ:</span>  23/7 HCM VN<br/>
       <span className='font-bold text-xl'>Số điện thoại:</span>  034731745
       </div>
     
    </div>
    
  </div>
  <div className='w-full sm:w-1/4 md:w-1/3'>
    <div className='flex flex-col items-center'>
      <h1 className='text-lg lg:text-2xl text-white font-bold py-3'>Đối Tác</h1>
      <div className='grid grid-cols-3 gap-2'>
        {brands?.map((brand, index)=>{
          return (
            <div key={index}><img className='w-24 h-24 hover:scale-125 cursor-pointer' src={brand.logo}/></div>
          )
        })}
  
      </div>
    </div>
  </div>
  <div className='w-full sm:w-1/4 md:w-1/3 '>
    <div className='flex flex-col items-center gap-3'>
      <h1 className='text-lg lg:text-2xl text-white font-bold py-3'>Ứng Dụng</h1>
      <div className='flex'><DiAndroid className='text-7xl text-lime-400 hover:scale-125 cursor-pointer'/><FaAppStoreIos className='text-7xl text-sky-600 hover:scale-125 cursor-pointer'/></div>
    </div>
  </div>
</div>




{/* <div className='flex flex-col bg-gray-600 w-screen'>

     <div className='flex justify-center items-center w-full py-7 text-white '>
      
              <div className='w-[80%] h-1 bg-slate-500 mx-7'></div>

     </div>

     <div className=' w-full h-8 text-black pb-10'>
      
      <h1 className='font-bold pl-7 '>@Copyright</h1>

    </div>
</div>
      */}
     

    </div>
  )
}

export default Footer
