import {  Button, Modal, Select, Table } from 'antd'
import Search from 'antd/es/input/Search'
import Title from 'antd/es/typography/Title'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import {deleteAUser } from '../redux/apiUser';

import { getAllUsers,deleteAUser } from '../redux/userReducer';

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ModalAddUser from './ModalAddUser';
import ModalEditMovie from './ModalEditMovie';
import ModalEditUser from './ModalEditUser';

function ManageUser() {

    // const onSearch = (value, _e, info) => console.log(info?.source, value);
    const {users} = useSelector((state) => state.manageUser);

    const [group, setGroup] = useState('GP00');
    // const [usersData, setUsersData] = useState(users);
    const [editUsersData, setEditUsersData] = useState();

    const [modalAddUser, setModalAddUser] = useState(false);
    const [modalEditUser, setModalEditUser] = useState(false);
  

    // console.log('yyyyyyyyyyyyygroup',group)
    // console.log('yyyyyyyyyyyyyusersData',usersData)
    // console.log('yyyyyyyyyyyyyeditUsersData',editUsersData)
  
    const onSearchUser = (value) => {
    
      dispatch(getAllUsers({group,searchUser:value}))

    }



  
  // useEffect(()=>{
  //   setUsersData(users)
  // }) 
   
  
    // console.log('ppppppppppppppUsers------111111111',usersData)
  
    const dispatch=useDispatch();
  
    useEffect(() => {

     dispatch(getAllUsers({group}))
  // setUsersData(users)
   
     
    }, [group]);


    const handleChangeSelect = (value) => {
      // console.log(`selected ${value}`);
      setGroup(value)
    };


    const handleDeleteUser=(value)=>{
      // dispatch(deleteAMovie(value))

      Modal.confirm({
        title:"Bạn thật sự muốn xóa người dùng này ?",
        okText:"Đồng ý",
        okType:"danger",
        cancelText:"Hủy",
        onOk:()=>{
          dispatch(deleteAUser({taiKhoan:value}))
        }
      })
    }

   
  return (
    <div className='w-full h-full'>
    <div className='flex flex-col'>

   




<div className='flex justify-center items-center md:justify-start md:w-96 p-3'>
    <Search
   placeholder="Nhập thông tin tên tài khoản hoặc họ tên "
   allowClear
   enterButton="Tìm kiếm"
   size="large"
   onSearch={onSearchUser}
 />

</div>

<div className='flex justify-center items-center pt-3 '>
   <Title className='flex text-center text-sm md:text-2xl'>QUẢN LÝ NGƯỜI DÙNG</Title>

</div>

<div className='px-3 pb-3 flex gap-1 '>


<Select
   defaultValue="GP00"
   // style={{
   //   width: 120,
   // }}
   className='w-[150px] text-center'
   onChange={handleChangeSelect}
   options={[
    {
      value: 'GP00',
      label: 'GP00',
    },
     {
       value: 'GP01',
       label: 'GP01',
     },
     {
       value: 'GP02',
       label: 'GP02',
     },
     {
       value: 'GP03',
       label: 'GP03',
     },
     {
       value: 'GP04',
       label: 'GP04',
     },
   ]}
 />
  <Button onClick={()=>setModalAddUser(!modalAddUser)} className='bg-green-500'>Thêm Người Dùng</Button>
  <ModalAddUser visible={modalAddUser} setVisible={setModalAddUser}/>
</div>
    

  <div className='px-3 '>
  <Table
scroll={{ x: 700, y: 450 }}
dataSource={users}
columns={[
  {
    title: 'Tài Khoản',
    dataIndex: 'taiKhoan',
    ellipsis: true, // Hiển thị ba chấm (...) nếu nội dung quá dài
    sorter: (a, b) =>{
        let taiKhoanA=a.taiKhoan.toLowerCase().trim();
        let taiKhoanB=b.taiKhoan.toLowerCase().trim();
        if(taiKhoanA > taiKhoanB ){
          return 1;
        }
        return -1;
    },
   
    render: (text) => <span>{text}</span>,
    width:110,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    ellipsis: true, // Hiển thị ba chấm (...) nếu nội dung quá dài
  //   sorter: (a, b) =>{
  //     let emailA=a.email.toLowerCase().trim();
  //     let emailB=b.email.toLowerCase().trim();
  //     if(emailA > emailB ){
  //       return 1;
  //     }
  //     return -1;
  // },
    render: (text, film) => (
      <span>{text}</span>
    ),
    width:180,
  },
  {
   title: 'SĐT',
   dataIndex: 'soDT',
   ellipsis: true, // Hiển thị ba chấm (...) nếu nội dung quá dài
   render: (text, film) => (
     
     <span>{text}   </span>
     // <img src={film.tenPhim} alt={film.tenPhim} className='w-[50px] h-[50px]' onError={(e)=>{e.target.onError=null;e.target.src='https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-nen-gai-xinh-hd.jpg'}} />
   ),
   width:200,
 },
 {
   title: 'Họ & Tên',
   dataIndex: 'hoTen',
   ellipsis: true, // Hiển thị ba chấm (...) nếu nội dung quá dài
   render: (text, film) => (

     <span>{text}</span>
     // <img src={film.tenPhim} alt={film.tenPhim} className='w-[50px] h-[50px]' onError={(e)=>{e.target.onError=null;e.target.src='https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-nen-gai-xinh-hd.jpg'}} />
   ),
   width:200,

 },

 {
  title: 'Mk',
  dataIndex: 'matKhau',
  ellipsis: true, // Hiển thị ba chấm (...) nếu nội dung quá dài
  render: (text, film) => (

    <span>{text}</span>
    // <img src={film.tenPhim} alt={film.tenPhim} className='w-[50px] h-[50px]' onError={(e)=>{e.target.onError=null;e.target.src='https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-nen-gai-xinh-hd.jpg'}} />
  ),
  width:200,

},
 {
   title: 'Vai Trò',
   dataIndex: 'maLoaiNguoiDung',
   ellipsis: true, // Hiển thị ba chấm (...) nếu nội dung quá dài
   render: (text, film) => (

     <span>{text}</span>
     // <img src={film.tenPhim} alt={film.tenPhim} className='w-[50px] h-[50px]' onError={(e)=>{e.target.onError=null;e.target.src='https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-nen-gai-xinh-hd.jpg'}} />
   ),
 
   width:130,
 },
 {
   title: 'Điều Chỉnh',
   ellipsis: true, // Hiển thị ba chấm (...) nếu nội dung quá dài
   dataIndex: 'taiKhoan',
   render: (text,account) => (
  
     <div className='flex gap-2'>
      {/* {console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',account)} */}
       <MdDelete onClick={()=>handleDeleteUser(text)} className='text-2xl text-red-600 cursor-pointer'/>
       <FaEdit onClick={()=>[setModalEditUser(!modalEditUser),setEditUsersData(account)]} className='text-2xl text-yellow-500 cursor-pointer'/>
    
       </div>
       
     
   ),
   width:210,

 },
]}
pagination={false}
/>
<ModalEditUser visible={modalEditUser} data={editUsersData} group={group} setGroup={setGroup} setVisible={setModalEditUser}/>
  </div>

  </div>

 
 </div>
  )
}

export default ManageUser
