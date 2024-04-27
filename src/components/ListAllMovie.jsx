import React, { useEffect, useState } from 'react'
import { getAllMovies } from "../redux/movieReducer"
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';


function ListAllMovie({moviesData}) {

    // const dispatch=useDispatch();

    // const {movies} = useSelector((state) => state?.manageMovie);

    // const [group, setGroup] = useState('GP01');
    // const [moviesData, setMoviesData] = useState([]);

    // console.log('moviesDataxxxxxxxxxxxxxxxx',moviesData)

    // useEffect(() => {
    //   dispatch(getAllMovies({group}))
    //  }, [group]);

    

    

    //  useEffect(() => {
        
    //     setMoviesData(movies)
        
    //    }, []);

  return (
    <div>
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 px-20'>
        {moviesData?.map((movie) => (
          
          <div key={movie.maPhim} className='relative overflow-hidden cursor-pointer group'>
           
            <div className='w-full shadow-lg shadow-slate-400 relative flex justify-center items-center '>
              <img className='w-full h-80 object-cover group-hover:scale-105 duration-300' src={movie.hinhAnh} alt={movie.tenPhim} />

              {/* <Link to={`/`}> */}
              <div className='absolute w-full hidden group-hover:block  text-white text-center'><Link to={`/detail/${movie.tenPhim}`} className='border-2 p-3 text-white border-white hover:font-bold'>Xem chi tiết</Link> </div>
              {/* </Link> */}
            </div>
          
            {/* group-hover:hidden */}

            <div className='flex  flex-col py-3  transition-all duration-100 '>  
              <div className='pb-3 flex items-center gap-3'>
                <span className='text-white bg-red-500 p-1 rounded'>{movie.maPhim}</span>
                <h1 className='font-bold text-sky-500'>{movie.tenPhim}</h1>
              </div>
              <div className='pb-3 flex items-center gap-3'>
             
              <div><span className='text-black font-bold'>Bắt đầu: </span><span className='text-orange-500'>{moment(movie.ngayKhoiChieu).utcOffset(7 * 60).format('hh:mm:ss - DD/MM/YYYY ')}</span></div>
              </div>
              <p className='line-clamp-2'>{movie.moTa}</p>
            </div>

         
            {/* <div className='absolute  w-full h-full transition-all duration-100 top-0 flex-col py-3 hidden group-hover:flex gap-1'> */}
       
              {/* <div className='absolute top-28 w-full flex justify-center items-center' > */}
                {/* <FaRegCirclePlay className='text-white' size={60} /> */}
              {/* </div> */}
            
              {/* <Link to={`/detail/${movie.tenPhim}`}>
              <div className='absolute w-full bottom-20 p-3 bg-sky-500 text-white text-center'>CHI TIẾT</div>
              </Link>
              <Link to={`/theater`}>
              <div className='absolute w-full bottom-4 p-3 bg-red-500 text-white text-center'>ĐẶT VÉ</div>
              </Link>
              
            </div> */}

          

          

           
          </div>
          
           
        ))}
{/* 
     <ModalMovie isOpen={isOpen} setIsOpen={setIsOpen}  tenPhim={tenPhim} /> */}
      </div>
    </div>
  )
}

export default ListAllMovie
