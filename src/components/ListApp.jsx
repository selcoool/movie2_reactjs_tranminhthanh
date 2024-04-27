import React from 'react';
import { DiAndroid } from "react-icons/di";
import { FaAppStoreIos } from "react-icons/fa";
import { MdComputer } from "react-icons/md";


function ListApp() {
    
   
    return (
        <div className='max-w-[1496px] w-screen  mx-0 flex justify-center items-center p-8'>
         
          <div className='w-full flex flex-col md:flex-row justify-center items-center gap-1'>
             <h1 className='text-3xl font-bold text-orange-500'>Các Ứng Dụng Hỗ Trợ:</h1>
                    <div className='flex flex-col'>
                    <div className='flex justify-center items-center'>
                        <span className='text-lg font-bold'>Android:</span> <DiAndroid className='text-7xl text-lime-400 hover:scale-125 cursor-pointer'/>
                    </div>
                    <div className='flex  justify-center items-center'>
                        <span className='text-lg font-bold'>Ios:</span><FaAppStoreIos className='text-7xl text-sky-600 hover:scale-125 cursor-pointer'/>
                    </div>
                    <div className='flex  justify-center items-center'>
                        <span className='text-lg font-bold'>Web:</span><MdComputer className='text-7xl text-lime-500 hover:scale-125 cursor-pointer'/>
                    </div>
                    </div>


                   
    
      

          </div>

        </div>
    );
}

export default ListApp;
