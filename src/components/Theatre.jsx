import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom';
import { api_movies } from '../services/apiMovies';

function Theatre() {

  const [brands, setBrands] = useState([]);
  const [brandMovies, setBrandMovies] = useState([]);
  const [relatedBrandMovies, setRelatedBrandMovies] = useState([]);

  {console.log('relatedBrandMovies',relatedBrandMovies)}

  const [toggleStateBrand, setToggleStateBrand] = useState(0);
  const [toggleStateCumRap, setToggleStateCumRap] = useState();

  const toggleTab = (index) => {
    setToggleStateBrand(index);
    setToggleStateCumRap(null)
 
  };

  const toggleAddress = (index) => {
    setToggleStateCumRap(index);

  };

  console.log('brandMovies', brandMovies);

  const findMoviesInTheatre = (maHeThongRap) => {
    // api_movies
    //   .layThongTinCumRap(maHeThongRap)
    //   .then((dataCumRap) => {
    //     setBrandMovies(dataCumRap.data.content);
    //     console.log('dataCumRap',dataCumRap.data.content)
    //     // console.log('dataCumRapxxxx',dataCumRap.data)
    //   })
    //   .catch((err) => {
    //     console.log('error', err);
    //   });


      api_movies
      .layThongTinLichChieuHeThongRap(maHeThongRap)
      .then((dataLichChieuHeThongRap) => {
        // setRelatedBrandMovies(dataLichChieuHeThongRap.data.content);
        console.log('dataLichChieuHeThongRap',dataLichChieuHeThongRap.data.content[0].lstCumRap)
        console.log('dataLichChieuHeThongRapxxxxxxx',dataLichChieuHeThongRap.data)
        setBrandMovies(dataLichChieuHeThongRap.data.content[0].lstCumRap)
       
        // console.log('dataLichChieuHeThongRap',dataCumRap.data)
      })
      .catch((err) => {
        console.log('error', err);
      });
  };

  useEffect(() => {
    api_movies
      .layDanhSachHeThongRap()
      .then((dataHeThongRap) => {
        setBrands(dataHeThongRap.data.content);
        console.log('dataHeThongRap',dataHeThongRap.data.content)
      })
      .catch((err) => {
        console.log('error', err);
      });

    findMoviesInTheatre('BHDStar');
  }, []);


  function handleMoveToTopAfterChoose() {
    // window.location.href = `/theater/book_ticket/${lichChieuTheoPhim.maLichChieu}`;
    window.scrollTo(0, 0); // Scroll về đầu trang
  }



  return (
    <div  className='max-w-[1496px] flex justify-center items-center'>

<div  className='dark:bg-slate-500 flex justify-center items-center p-8 '>
    <div className='w-fit h-fit'>
      {/* <div className='w-full h-full  flex flex-wrap flex-col justify-center items-center bg-slate-500'> */}
      <h1 className='text-center text-2xl font-bold text-cyan-500 py-3'>RẠP PHIM VÀ PHIM</h1>
        <div className='flex flex-col lg:flex-row  lg:max-h-[500px] h-fit gap-1 shadow-lg shadow-slate-400'>
          
          <div className='tabs flex flex-row lg:flex-col justify-center items-center gap-1'>
            {brands?.map((brand, indexBrand) => (
              <div
                key={indexBrand}
                className={`tab h-fit w-fit bg-red-300 cursor-pointer relative  ${
                  toggleStateBrand === indexBrand ? 'bg-orange-400' : ''
                }`}
                onClick={() => {
                  toggleTab(indexBrand);
                  findMoviesInTheatre(brand.maHeThongRap);
                  setRelatedBrandMovies();
                }}
              >
             
                <div className='h-12 w-12 lg:h-20 lg:w-20'>
                  <img className='w-full h-full p-2' src={brand.logo} alt={brand.maHeThongRap} />
                </div>
                {toggleStateBrand === indexBrand && (
                  <div className='absolute h-1 bottom-0 lg:h-full w-full lg:w-1 bg-red-500   lg:right-0 lg:bottom-0'></div>
                )}
              </div>
            ))}
          </div>
          <div className='panels-wrapper w-full relative flex flex-col max-w-[500px] max-h-[300px]  lg:max-h-[600px] border-r-2'>
            
            <div className='panels flex flex-col gap-1 sm:min-h-[200px] lg:min-h-[500px]  overflow-y-auto no-scrollbar bg-slate-400'>
         
          
              {brandMovies?.map((brandMovie, indexBrandMovie) => (
                <div key={indexBrandMovie} className='flex flex-col '>

                  {/* {console.log('brandMovie',brandMovie)}
                  {console.log('brandMovie_danhSachPhim',brandMovie.danhSachPhim)}
                  */}
                 <div className={`bg-orange-100 p-4 cursor-pointer relative  ${toggleStateCumRap === indexBrandMovie ? 'bg-slate-200': ''}   `} onClick={()=> [setRelatedBrandMovies(brandMovie.danhSachPhim), setToggleStateCumRap(indexBrandMovie)]} >
                   <div> <span className='font-bold'>Rạp:</span><span className='text-blue-600 font-extrabold'>{brandMovie.tenCumRap}</span></div>
                   <div><span className='font-bold'>Đ/c:</span><span className='text-orange-600'>{brandMovie.diaChi}</span></div>
                  
                   {toggleStateCumRap === indexBrandMovie && (
                        <div className='absolute h-full w-1 bg-cyan-500 right-0 bottom-0'></div>
                      )}
                
                 </div>

                </div>
              ))}
            </div>
          </div>
          <div className='bg-orange-100 panels w-full flex flex-col   max-w-[500px] max-h-[300px] lg:max-h-[500px] overflow-y-auto no-scrollbar'>
          <h1 className='text-center font-bold text-red-500  text-xl'>Danh sách phim và thời gian chiếu:</h1>
            {relatedBrandMovies?.length >= 1 ? (
              
              relatedBrandMovies.map((relatedBrandMovie, indexRelatedBrandMovie) => (

                
                <div key={indexRelatedBrandMovie} className=' flex flex-col justify-center items-center gap-2 p-4'>
                  
                  <div className='flex gap-2'>
                  
                  <div className='flex flex-col justify-start items-center gap-2 '>     
                  <div><img className='h-40 w-40 object-cover' src={relatedBrandMovie.hinhAnh} alt='' /></div>
                  <div className='font-bold'>{relatedBrandMovie.tenPhim}</div>
                  </div>
                 
                  <div className='flex flex-col gap-2'>
                    {relatedBrandMovie.lstLichChieuTheoPhim.map((lichChieuTheoPhim, indexLichChieuTheoPhim) => (
                      <div key={indexLichChieuTheoPhim} className='flex justify-center gap-1'>
                       
                       
                        <div className='flex flex-col gap-2'>
                        <div className=' border-2  border-orange-800 p-1 px-2 rounded-lg'><span className='text-orange-800 font-bold'>{moment(lichChieuTheoPhim.ngayChieuGioChieu).format('HH:MM:SS')}</span>-<span className='text-sky-900 font-bold'>{moment(lichChieuTheoPhim.ngayChieuGioChieu).format('DD/MM/YYYY')}</span></div>
                       
                            <div className='flex justify-center items-center gap-1'>
                            <div className='text-white bg-red-500 p-1 px-2 rounded-lg'>{lichChieuTheoPhim.giaVe.toLocaleString('vi-VN')} VND</div>
                             <Link to={`/theatre/book_ticket/${lichChieuTheoPhim.maLichChieu}`} onClick={()=>handleMoveToTopAfterChoose()}>
                            <div className='text-white bg-green-500 p-1  px-2 rounded-lg hover:bg-green-700 cursor-pointer'>Đặt Vé</div>
                             </Link>
                            </div>
                        </div>
                       
                 
                      </div>
                    ))}
                  </div>

                  </div>
                 

                </div>
              ))
            ) : (
              <div className='flex justify-center items-center h-full py-4 px-8 font-bold text-orange-400'>Vui lòng chọn chọn rạp</div>
            )}
          </div>
        </div>
      {/* </div> */}
    </div>
    </div>


  {/* <div className='flex flex-col  h-[500px] min-h-[600px]'>
    {brandMovies?.map((brandMovie, indexMovie) => (
                <div key={indexMovie} className='flex flex-col '>
                 
                 
                   <div>{brandMovie.diaChi}</div>
                 
                
                </div>
              ))}

</div> */}
   
  </div>
  )
}

export default Theatre
