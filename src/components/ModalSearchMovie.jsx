import React from 'react';
import moment from 'moment';
import 'moment/locale/vi';
import { Link } from 'react-router-dom';
function ModalSearchMovie({ isOpenSearchMovie, setIsOpenSearchMovie, dataSearch }) {
  return (
    <div>
      {isOpenSearchMovie && dataSearch?.length >= 1 ? (
        <div className='w-full h-full bg-orange-500 flex items-center justify-center'>
          <div className='border-2 absolute h-fit  w-[350px] lg:w-[550px] top-[250px] lg:top-28  z-20  '>
            <div className='flex flex-col gap-1 bg-red-400  relative '>
              <div className='absolute right-3 top-1 text-lg text-white font-bold cursor-pointer' onClick={() => setIsOpenSearchMovie(!isOpenSearchMovie)}>x</div>
              
              <div className='max-h-[400px] overflow-y-auto no-scrollbar '>
              {dataSearch.map((mv) => (
                 <Link to={`/detail/${mv.tenPhim}`}>
                <div key={mv.maPhim} className='flex gap-2 hover:bg-slate-400 cursor-pointer'>
                  <div className='w-1/3' >
                    <img className='object-cover bg-slate-500 h-32 w-32' src={mv.hinhAnh} alt={mv.tenPhim} />
                  </div>
                  <div className=' w-1/3 flex flex-col items-center justify-center '>
                    <div className='p-2 bg-white'>{mv.maPhim}</div>
                    <h1 className='text-red-600 font-bold'>{mv.tenPhim}</h1>
                    <div> {moment(mv.ngayKhoiChieu).utcOffset(7 * 60).format('DD MM YYYY')}</div> 
                  </div>
                  <div className='w-1/3 flex flex-col px-4 justify-center gap-1'>
                  <div> Lúc:<span className='text-gray-200'>{moment(mv.ngayKhoiChieu).utcOffset(7 * 60).format('hh:mm:ss ')}</span></div> 
                   
                 
                   
                  </div>
                
                </div>
                </Link>
              ))}
               </div>
            </div>
          </div>
        </div>
      ) : isOpenSearchMovie ? (
        <div className='w-full h-full bg-orange-500 flex items-center justify-center'>
          <div className='border-2 absolute h-fit  w-[350px] lg:w-[550px] top-[250px] lg:top-28 z-20'>
            <div className='flex flex-col gap-1 h-20 bg-red-400 relative'>
              <div className='absolute right-3 top-1 text-lg text-white font-bold cursor-pointer' onClick={() => setIsOpenSearchMovie(!isOpenSearchMovie)}>x</div>
              <h1 className='p-4'>Không tìm thấy:</h1>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ModalSearchMovie;