import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from "yup"
import { signInUser } from '../redux/userReducer';
import { useDispatch } from 'react-redux';
// import { api_movies } from '../services/api_movies';

function ModalSignIn({ isOpen, setIsOpen}) {
    console.log('isOpen', isOpen);
    // console.log('maPhim', maPhim);
    const dispatch=useDispatch();

    const handleCloseModal = (e) => {
        if (e.target.id === "wrapper") {
            setIsOpen(false)
        }
    }



    const { handleChange, handleSubmit, handleBlur, resetForm, values, errors, touched,setFieldValue } = useFormik({
      
        initialValues: {
          taiKhoan: "",
          matKhau: ""

         
  
        },
        validationSchema: yup.object().shape({
          taiKhoan: yup.string().required("Vui lòng nhập tên tài khoản "),
        //   hoTen: yup.string().required("Vui lòng nhập họ và tên"),
    
        //   email: yup.string().required("Vui lòng nhập email"),
        //   soDt:yup.number().required("Vui lòng nhập số điện thoại"),
  
          matKhau:yup.string().required("Vui lòng nhập mật khẩu"),
        //  maNhom:yup.string().required("Vui lòng chọn mã nhóm"),
        //  maLoaiNguoiDung:yup.string().required("Vui lòng chọn mã loại người dùng"),
  
        //  File:yup.string().required("Vui lòng chọn file")
        
    
    
        }),
        onSubmit: async(values) => {
           try {
  
                  //  console.log('onSubmitvaluesxxxxxxxxxx',values)
                    let formData = new FormData();
                    for (let key in values){
                      // console.log('values[key]',values[key])
                          formData.append(key,values[key]);
                      
                    }
  
  
                   await dispatch(signInUser({formData:values}))
                  
                  //  setImageData();
                   resetForm();
                   setIsOpen(false)
                  //   fileInputRef.current.value = null;
                  
  
            
           } catch (error) {
                console.log('error',error)
           }
                    
        }
      });


          console.log('values', values)
    console.log('errors', errors)
    console.log('touched', touched);


    


    return (
        <>
             {isOpen ? (

            <div id='wrapper' onClick={handleCloseModal} className='fixed top-10 z-50 flex justify-center items-center w-full h-full'>
                <div className='w-fit h-fit '>
            
                    
                <div className='w-fit h-fit px-4 bg-slate-400 rounded-lg bg-background_login bg-cover shadow-lg shadow-white'>
                            <div className='flex  items-center justify-center gap-3 relative'>
                               <div className='absolute font-bold text-white right-0 top-1 hover:text-black cursor-pointer' onClick={()=>setIsOpen(!isOpen)}>X</div>
                            </div>
                            
                            <h1 className='text-center mt-6 text-2xl text-white font-bold'>Đăng Nhập</h1>
                            
                            <div className='flex flex-col gap-3 pb-3 pt-5'>
                            <div className='flex items-center justify-center gap-1'>
                                <label className=' text-white min-w-[90px]'>Tên Tài Khoản:</label>
                                <input type='text' onChange={handleChange} onBlur={handleBlur} id='taiKhoan' value={values.taiKhoan} className=' flex-1 focus:outline-none px-2 p-1 rounded-lg cursor-pointer' placeholder='Nhập tên tài khoản' />
                              
                            </div>
                            {errors.taiKhoan && touched.taiKhoan ? (<div className='text-red-500 flex justify-end'>{errors.taiKhoan}</div>) : ''}
                         

                            <div className='flex items-center justify-center gap-1'>
                                <label className='text-white min-w-[90px]'>Mật Khẩu:</label>
                                <input type='password' onChange={handleChange} onBlur={handleBlur} id='matKhau' value={values.matKhau} className=' flex-1 focus:outline-none p-1  rounded-lg cursor-pointer'    placeholder='Nhập mật khẩu'/>
                               
                            </div>
                              {errors.matKhau && touched.matKhau ? (<div className='text-red-500 flex justify-end '>{errors.matKhau}</div>) : ''}

                            <div className='flex items-center justify-end gap-3'>
                                <div onClick={handleSubmit} className=' min-w-[60px] w-20 h-[34px] bg-green-500 flex justify-center rounded-md items-center hover:shadow-md hover:shadow-gray-300 cursor-pointer hover:text-white hover:scale-105 '>Đăng ký</div>
                            </div>


                        </div>


                    </div>





                </div>
            </div>

) : null}



          
        </>
    );
}

export default ModalSignIn;