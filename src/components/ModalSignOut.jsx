import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from "yup"
import { signInUser, signOutUser } from '../redux/userReducer';
import { useDispatch } from 'react-redux';
// import { api_movies } from '../services/api_movies';
import { ToastContainer, toast } from 'react-toastify';

function ModalSignOut({ isOpen, setIsOpen}) {
    console.log('isOpen', isOpen);
    // console.log('maPhim', maPhim);
    const dispatch=useDispatch();

    const handleCloseModal = (e) => {
        if (e.target.id === "wrapper") {
            setIsOpen(false)
        }
    }

  const handleSubmit=()=>{
    dispatch(signOutUser())
    setIsOpen(false)

   

    

  }

 


       

    


    return (
        <>
             {isOpen ? (

            <div id='wrapper' onClick={handleCloseModal} className='fixed top-10 z-50 flex justify-center items-center w-full h-full'>
                <div className='w-fit h-fit '>
            
                    
                <div className='w-fit h-fit min-w-96 px-4 bg-slate-400 rounded-lg bg-background_logout bg-cover'>
                            <div className='flex  items-center justify-center gap-3 relative'>
                               <div className='absolute font-bold text-white right-0 top-1 hover:text-black cursor-pointer' onClick={()=>setIsOpen(!isOpen)}>X</div>
                            </div>
                            
                            <div className='text-center mt-6  text-white font-bold'>Bạn muốn đăng xuất phải không ?</div>
                            
                            <div className='flex flex-col gap-3 pb-3 pt-5'>
                        
                           

                            <div className='flex items-center justify-end gap-3'>
                                <div onClick={handleSubmit} className=' min-w-[60px] w-20 h-[34px] bg-yellow-300 flex justify-center rounded-md items-center hover:shadow-md hover:shadow-gray-300 cursor-pointer hover:text-white hover:scale-105 '>Đăng ký</div>
                            </div>


                        </div>


                    </div>





                </div>
            </div>

) : null}



          
        </>
    );
}

export default ModalSignOut;