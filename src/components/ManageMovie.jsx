import { Button, Modal, Select, Table } from 'antd'
import Search from 'antd/es/input/Search'
import Title from 'antd/es/typography/Title'
import React, { useEffect, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";


import { useDispatch, useSelector } from 'react-redux';
// import { deleteAMovie } from '../redux/apiMovie';

import { getAllMovies,deleteAMovie} from '../redux/movieReducer';

import ModalAddMovie from './ModalAddMovie'
import ModalDetailMovie from './ModalDetailMovie';
import ModalEditMovie from './ModalEditMovie';
import ModalScheduleMovie from './ModalScheduleMovie';


function ManageMovie() {
  
  const dispatch=useDispatch();

    const {movies} = useSelector((state) => state?.manageMovie);

    const [group, setGroup] = useState('GP01');
    // const [moviesData, setMoviesData] = useState(movies);
    const [detailMoviesData, setDetailMoviesData] = useState();
    const [editMoviesData, setEditMoviesData] = useState();
    const [scheduleData, setScheduleData] = useState();


    // console.log('yyyyyyyyyyyyy',detailMoviesData)
    const [modalAddMovie, setModalAddMovie] = useState(false);
    const [modalEditMovie, setModalEditMovie] = useState(false);
    const [modalDetailMovie, setModalDetailMovie] = useState(false);
    const [modalScheduleMovie, setModalScheduleMovie] = useState(false);



    //  console.log('yyyyyyyyyyyyygroup',group)
    //  console.log('yyyyyyyyyyyyymoviesData',moviesData)


    

    const onSearchMovie = (value) => {

    
      dispatch(getAllMovies({group,nameMovie:value}))

    }
  
  
    // useEffect(()=>{
    //   setMoviesData(movies)
    // }) 
  
    // console.log('ppppppppppppppMovies------111111111',moviesData)
  
   
  
    useEffect(() => {
     dispatch(getAllMovies({group}))
  
     
     
    }, [group]);


    const handleChangeSelect = (value) => {
      // console.log(`selected ${value}`);
      setGroup(value)
    };


    const handleDeleteMovie=(value)=>{
      // dispatch(deleteAMovie(value))

      Modal.confirm({
        title:"Bạn thật sự muốn xóa phim này ?",
        okText:"Đồng ý",
        okType:"danger",
        cancelText:"Hủy",
        onOk:()=>{
          dispatch(deleteAMovie({codeMovie:value}))
        }
      })
    }


    // const handleAddMovie=()=>{
    //   setModalCreateMovie(!modalCreateMovie);
    // }
  
   
  return (
    <div className='w-full h-full'>
       <div className='flex flex-col'>

      




  <div className='flex justify-center items-center md:justify-start md:w-96  p-3'>
       <Search
      placeholder="Nhập tên phim"
      allowClear
      enterButton="Tìm kiếm"
      size="large"
      onSearch={onSearchMovie}
    />
   

</div>

<div className='flex justify-center items-center pt-3 '>
      <Title className='flex text-center text-sm md:text-2xl'>QUẢN LÝ PHIM</Title>

</div>

<div className='px-3 pb-3 flex gap-1 '>


<Select 
      defaultValue="GP01"
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
        {
          value: 'GP05',
          label: 'GP05',
        },
        {
          value: 'GP06',
          label: 'GP06',
        },
        {
          value: 'GP07',
          label: 'GP07',
        },
        {
          value: 'GP08',
          label: 'GP08',
        },

        {
          value: 'GP09',
          label: 'GP09',
        },

        {
          value: 'GP10',
          label: 'GP10',
        },
        {
          value: 'GP11',
          label: 'GP11',
        },
      ]}
    />

    <Button onClick={()=>setModalAddMovie(!modalAddMovie)} className='bg-green-500'>Thêm Phim</Button>
    <ModalAddMovie visible={modalAddMovie} setVisible={setModalAddMovie}/>
</div>
       
{/* moviesData */}
     <div className='px-3 '>
     <Table
   scroll={{ x: 700, y: 450 }}
   dataSource={Array.isArray(movies) ? movies:[]}
   columns={[
     {
      title: 'Mã Phim',
      dataIndex: 'maPhim',
      ellipsis: true,
      sorter: (a, b) => b.maPhim - a.maPhim, // Sắp xếp giảm dần
      // sortDirections:['descend', 'ascend'],
      defaultSortOrder:'ascend',
       render: (text) => <span>{text}</span>,
       width:110,
     },
     {
       title: 'Hình Ảnh',
       dataIndex: 'hinhAnh',
       ellipsis: true, // Hiển thị ba chấm (...) nếu nội dung quá dài
      //  sorter: (a, b) => a.maPhim - b.maPhim,
      //  sortDirections: ['ascend', 'descend'],
       render: (text, film) => (
         <img src={film.hinhAnh} alt={film.tenPhim} className='w-[80px] h-[80px] object-cover' onError={(e)=>{e.target.onError=null;e.target.src='https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-nen-gai-xinh-hd.jpg'}} />
       ),
       width:180,
     },
     {
      title: 'Tên Phim',
      dataIndex: 'tenPhim',
      ellipsis: true, // Hiển thị ba chấm (...) nếu nội dung quá dài
      render: (text, film) => (

        <span>{text}</span>
        // <img src={film.tenPhim} alt={film.tenPhim} className='w-[50px] h-[50px]' onError={(e)=>{e.target.onError=null;e.target.src='https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-nen-gai-xinh-hd.jpg'}} />
      ),
      width:250,
    },
    {
      title: 'Trailer',
      dataIndex: 'trailer',
      ellipsis: true, // Hiển thị ba chấm (...) nếu nội dung quá dài
      render: (text, film) => (

        <span>{text}</span>
        // <img src={film.tenPhim} alt={film.tenPhim} className='w-[50px] h-[50px]' onError={(e)=>{e.target.onError=null;e.target.src='https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-nen-gai-xinh-hd.jpg'}} />
      ),
      width:350,
   
    },
    {
      title: 'Chi Tiết',
      dataIndex: 'trailer',
      ellipsis: true, // Hiển thị ba chấm (...) nếu nội dung quá dài
      render: (text, film) => (

        <Button onClick={()=>[setModalDetailMovie(!modalDetailMovie),setDetailMoviesData(film) ]} className='bg-blue-400'>Chi tiết</Button>
        // <img src={film.tenPhim} alt={film.tenPhim} className='w-[50px] h-[50px]' onError={(e)=>{e.target.onError=null;e.target.src='https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-nen-gai-xinh-hd.jpg'}} />
      ),
    
      width:130,
    },
    {
      title: 'Điều Chỉnh',
      ellipsis: true, // Hiển thị ba chấm (...) nếu nội dung quá dài
      dataIndex: 'maPhim',
      render: (text,film) => (
        <div className='flex gap-2'>
         {/* {console.log('ooooooooo',film)} */}
         <MdDelete onClick={()=>handleDeleteMovie(text)} className='text-2xl text-red-600 cursor-pointer'/>
       <FaEdit   onClick={()=>[setModalEditMovie(!modalEditMovie),setEditMoviesData(film) ]}    className='text-2xl text-yellow-500 cursor-pointer'/>
        <AiOutlineSchedule onClick={()=>[setModalScheduleMovie(!modalScheduleMovie),setScheduleData(film) ]} className='text-2xl text-pink-500 cursor-pointer' />
          
          </div>
      ),
      width:210,
   
    },
   ]}
   pagination={false}
/>

<ModalEditMovie visible={modalEditMovie} data={editMoviesData}  setVisible={setModalEditMovie}/>
<ModalDetailMovie visible={modalDetailMovie} data={detailMoviesData} setVisible={setModalDetailMovie}/>
<ModalScheduleMovie visible={modalScheduleMovie} data={scheduleData} setVisible={setModalScheduleMovie}/>
     </div>

     </div>
    
    </div>
  )
}

export default ManageMovie
