import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api_movies } from '../services/apiMovies';
import { ToastContainer, toast } from 'react-toastify';

function ListSeat() {
    let { maLichChieu } = useParams();
    const [danhSachGhe, setDanhSachGhe] = useState([]);
    const [thongTinPhim, setThongTinPhim] = useState({});
    const [bookTickets, setBookTickets] = useState([])
    const [bookStatus, setBookStatus]=useState(false);


    console.log('danhSachGhe',danhSachGhe)
    console.log('thongTinPhim',thongTinPhim)
    console.log('bookTickets',bookTickets)


    const handleBookTiket=()=>{

        let bookedTicket= bookTickets.map((ticket,indexTicket)=>{
            return {
                maGhe:ticket.maGhe,
                giaVe:ticket.giaVe
            }
        })

        if(bookedTicket.length>0){

            
           let thongTinDatVe={
            maLichChieu:maLichChieu,
            danhSachVe:bookedTicket
           }


           api_movies.datVe(thongTinDatVe)
            .then((data) => {
                console.log('yyyyyyyyyyyyyyyyyyyyyyyyyyy',data)

                setBookTickets([])
                setBookStatus(!bookStatus)
                toast.success('Bạn đã đặt vé thành công !')
            })
            .catch((err) => {
                console.log('error', err);
                toast.error('Bạn đã đặt vé không thành công thành công !')
            });

          




        }

        // console.log('bookedTicket',bookedTicket)
    }










    useEffect(() => {
        api_movies.layDanhSachPhongVe(maLichChieu)
            .then((data) => {
                setDanhSachGhe(data.data.content.danhSachGhe);
                setThongTinPhim(data.data.content.thongTinPhim);
            })
            .catch((err) => {
                console.log('error', err);
            });
            setBookTickets([])
    }, [maLichChieu,bookStatus]);


  


   
    return (
        <div className='max-w-[1496px] w-screen  mx-0 flex justify-center items-center'>
           
            {danhSachGhe.length > 0 ? (
                
               
             <div className='flex flex-wrap h-fit w-full flex-col lg:flex-row  justify-center items-start px-4'>

                        {/* <div className='w-full lg:w-1/5'>

                                <div className='flex flex-col  mt-20  bg-sky-300'>
                                  <div className='w-full'>
                                    <img className='w-full' src={thongTinPhim?.hinhAnh} alt="" />
                                  </div>

                                  <div className='p-3'>
                                    <div><span className='font-bold'>Tên Phim:</span><span className='text-sky-700 text-xl font-bold'>{thongTinPhim?.tenPhim}</span></div>
                                    <div><span className='font-bold'>Thời gian:</span><span className='text-red-600 font-bold'>{thongTinPhim?.gioChieu}-{thongTinPhim?.ngayChieu}</span></div>
                                    <div><span className='font-bold'>Địa Điểm:</span><span className='text-indigo-700 font-bold'>{thongTinPhim?.tenRap}-{thongTinPhim?.diaChi}</span></div>
                                  </div>

                                   
                                </div>


                            
                        </div> */}


                        <div className='w-full  lg:w-3/5'>

                                    <div className='w-full flex flex-col justify-center items-center lg:px-4 '>

                                    <h1 className='text-center pt-10  text-3xl text-red-600 font-bold'>MÀN HÌNH</h1>
                                    <div className='flex justify-center' style={{
    borderBottom: '50px solid #1E90FF',
    borderLeft: '50px solid transparent',
    borderRight: '50px solid transparent',
    height: '80',
    minWidth: '400px',
    maxWidth: '600px',
    marginBottom:'30px'
}}></div>



<div className='w-full h-full grid grid-cols-10 gap-2 mb-96'>
    {danhSachGhe?.map((ghe, indexGhet) => {
        const isGheDaDat = ghe.daDat; // Giả sử 'daDat' là trường thể hiện ghế đã được đặt hay chưa
        const isGheVip = ghe.loaiGhe === 'Vip'; // Giả sử 'loaiGhe' là trường thể hiện loại ghế
        return (
            <div
                key={ghe.maGhe}
                onClick={() => !isGheDaDat && setBookTickets([...bookTickets, ghe])}
                className={`border shadow-zinc-500 shadow-md rounded-full ${isGheDaDat ? 'bg-gray' : isGheVip ? 'bg-red' : 'bg-orange'}-500 border-gray-300 flex justify-center items-center py-2 px-3 text-center hover:scale-105 hover:${isGheDaDat ? 'bg-gray' : isGheVip ? 'bg-red' : 'bg-orange'}-400/90 cursor-${isGheDaDat ? 'not-allowed' : 'pointer'}`}
            >
                {isGheDaDat ? "Đặt" : `${ghe.tenGhe}`}
            </div>
        );
    })}
</div>


                                    </div>




                            
                        </div>



                        <div className='w-full  lg:w-2/5'>


                          <div className='flex flex-col  mt-20  bg-sky-300'>
                                  <div className='w-full'>
                                    <img className='w-full max-h-[350px] object-cover' src={thongTinPhim?.hinhAnh} alt="" />
                                  </div>

                                  <div className='p-3'>
                                    <div><span className='font-bold'>Tên Phim:</span><span className='text-sky-700 text-xl font-bold'>{thongTinPhim?.tenPhim}</span></div>
                                    <div><span className='font-bold'>Thời gian:</span><span className='text-red-600 font-bold'>{thongTinPhim?.gioChieu}-{thongTinPhim?.ngayChieu}</span></div>
                                    <div><span className='font-bold'>Địa Điểm:</span><span className='text-indigo-700 font-bold'>{thongTinPhim?.tenRap}-{thongTinPhim?.diaChi}</span></div>
                                  </div>

                                   
                                </div>

                                 
                                    <div className='w-full flex flex-col items-center justify-center pb-4  bg-orange-300'>
                                                <table className="border border-collapse  border-orange-700 w-full">
                                                    <thead>
                                                        <tr>
                                                        <th className="border border-orange-700 p-2">Ghế</th>
                                                        <th className="border border-orange-700 p-2">Loại</th>
                                                            <th className="border border-orange-700 p-2">Rạp</th>
                                                            <th className="border border-orange-700 p-2">Giá</th>
                                                        </tr>
                                                    </thead>

                                                
                                                    <tbody>
                                                       {bookTickets.length > 0 ? (


                                                                bookTickets?.map((bookTicket,indexBookTickets)=>{
                                                                    return (
                                                                            <tr>
                                                                                 <td className="border border-orange-700 p-2 text-center text-violet-700">{bookTicket?.tenGhe}</td>
                                                                        <td className="border border-orange-700 p-2 text-center">{bookTicket?.loaiGhe}</td>
                                                                        <td className="border border-orange-700 p-2 text-center">{bookTicket?.maRap}</td>
                                                                        <td className="border border-orange-700 p-2 text-center text-red-600 "> {bookTicket?.giaVe.toLocaleString('vi-VN')}</td>
                                                                    
                                                                    </tr>
                                                                    )
                                                                })

                                                       ): ( <tr >
                                                        
                                               <td colSpan={4} className="border border-orange-700 p-2 text-center"> Chưa chọn ghế</td>
                                           
                                           </tr>) }
                                                
                                                    </tbody>
                                            </table>

                                                <div onClick={handleBookTiket} className='bg-red-600 shadow-md shadow-slate-600 p-2 mt-2 rounded-md hover:text-white hover:bg-red-500 cursor-pointer' > ĐẶT VÉ NGAY</div>
                                            </div>




                       
                            
                       </div>


             </div>







            ) : null}

<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
        </div>
    );
}

export default ListSeat;
