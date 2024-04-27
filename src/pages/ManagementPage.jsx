import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Image, Menu } from 'antd';
import { FaUserTie } from "react-icons/fa";
import { GiFilmSpool } from "react-icons/gi";
import { IoIosHome } from "react-icons/io";

import ManageMovie from '../components/ManageMovie';
import ManageUser from '../components/ManageUser';
import { ToastContainer, toast } from 'react-toastify';
import ModalSignOut from '../components/ModalSignOut';


// import { useHistory } from 'react-router-dom';

function ManagementPage() {
  // const history = useHistory();
  const nav=useNavigate();
  const [activeTab, setActiveTab] = useState('/management/user');
  console.log('pppppp',activeTab)


  const [openMenuSignOut,setOpenMenuSignOut]=useState(false)

  useEffect(()=>{
    if(localStorage.getItem('USER')){
          if(JSON.parse(localStorage.getItem('USER'))?.maLoaiNguoiDung === "QuanTri"){
            console.log('Dang nhap qtr')
          }else{
            nav('/')
          }
    }else{
      nav('/')
    }
   
   }) 


  return (
    <div className='w-full h-full'>
      <div className='w-screen h-screen flex flex-col md:flex-row '>

      <div className='w-full md:w-2/6 lg:w-1/6 bg-slate-500'>
      <div className='flex flex-col justify-center items-center p-2'>
      <div>
       <Avatar className=' w-28 h-28  ' src="https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg" />
      
       </div>
       <div className='text-white font-bold'>

        {JSON.parse(localStorage.getItem('USER'))?.maLoaiNguoiDung==="QuanTri" ? (JSON.parse(localStorage.getItem('USER'))?.hoTen) : ('ssdsd')}
       </div>
       <div className='flex gap-2 text-[12px] text-zinc-50'>
        <div onClick={()=>setOpenMenuSignOut(!openMenuSignOut)} className='cursor-pointer'>Đăng xuất</div>
        
        {/* <div className='cursor-pointer'>Đăng nhập</div> */}
       </div>
     
       </div>
       <div >
       <Menu 
      onClick={(record)=>{

      setActiveTab(record.key);
      nav(`${record.key}`);
        
     }}
       items={[
        {
          label:"Trở Về Trang Chủ",
          key:"/",
          icon:<IoIosHome />
        },
        {
        label:"Quản Lý Người Dùng",
        key:"/management/user",
        icon:<FaUserTie/>
      },
      {
        label:"Quản Lý Phim",
        key:"/management/movie",
        icon:<GiFilmSpool/>
      }
     
      

       ]}
    
       
       >

       </Menu>
       </div>
      </div>
      <div  className='w-full md:w-4/6 lg:w-5/6'>
        <div className='flex  h-screen flex-col bg-slate-300 '>

  
        <div className=''>
        {activeTab === '/management/movie' && (<ManageMovie/>)}
        {activeTab === '/management/user' && (<ManageUser/>)}
        </div>

        </div>
 
      </div>
      </div>

      <ToastContainer/>
      <ModalSignOut  isOpen={openMenuSignOut} setIsOpen={setOpenMenuSignOut} />
    </div>
  );
}


export default ManagementPage;

