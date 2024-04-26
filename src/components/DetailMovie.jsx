import React, { useEffect, useState } from 'react'
import { getAllMovies } from '../redux/movieReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { Rate } from 'antd';
import ModalDetail from './ModalDetail';
import { FaRegCirclePlay } from 'react-icons/fa6';

function DetailMovie() {
    const {movies} = useSelector((state) => state?.manageMovie);
    let {tenPhim}=useParams();
    console.log('DETA',tenPhim)
    console.log('DETA_movies',movies)
    const dispatch=useDispatch();
    const [group, setGroup] = useState('GP01');

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      
            dispatch(getAllMovies({group,nameMovie:tenPhim}))

       }, [group]);
  return (
    <div className='dark:bg-slate-700  max-w-[1496px] w-full  flex justify-center items-center bg-slate-500'>
      

  <div className='flex max-w-[1496px]  flex-col sm:flex-row w-full lg:min-h-[250px] lg:max-h-[400px]  mt-8 bg-background_detail bg-cover '>
        <div className='w-full  sm:w-2/4 md:w-1/3 bg-red-400 relative flex justify-center items-center'>
          <img className='w-full h-full object-cover' src={movies[0]?.hinhAnh}  alt="" />
          <div className='absolute  text-white text-8xl' onClick={()=>setIsOpen(!isOpen)}><FaRegCirclePlay className='hover:scale-105 cursor-pointer'/></div>
          
        </div>
        <div className='w-full sm:w-2/4 md:w-2/3 '>
          <div className='w-full flex flex-col p-4 gap-2'>
            <h1 className='text-4xl text-white font-bold'>{movies[0]?.tenPhim}</h1>
            <p className='text-white'>{movies[0]?.moTa}</p>
            <div><span className='text-white text-lg'>Ngày Khởi Chiếu:</span><span className='text-orange-400'>  {moment(movies[0]?.ngayKhoiChieu).utcOffset(7 * 60).format('hh:mm:ss - DD/MM/YYYY ')}</span></div>
            <div><span className='text-white  text-lg'>Đánh Giá:</span><span className='text-orange-400'>{console.log('fffffffffffffff',typeof movies[0]?.danhGia)} <Rate defaultValue={(movies[0]?.danhGia)/2 || 1} allowHalf disabled/></span></div>
            <div className='flex gap-2'>
              <div className='p-4 bg-sky-600 w-fit hover:text-white cursor-pointer'onClick={()=>setIsOpen(!isOpen)}>XEM TRAILER</div><div className='p-4 bg-red-600 w-fit hover:text-white cursor-pointer'>ĐẶT VÉ</div>
            </div>

          </div>
        
        </div>

        <ModalDetail isOpen={isOpen} setIsOpen={setIsOpen} trailerData={movies[0]?.trailer.split('?v=')[1]} />
  </div>



    </div>
  )
}

export default DetailMovie
