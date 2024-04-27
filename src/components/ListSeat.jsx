import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api_movies } from '../services/apiMovies';
import { ToastContainer, toast } from 'react-toastify';
import ModalSignUp from './ModalSignUp';
import ModalSignIn from './ModalSignIn';

function ListSeat() {
    let { maLichChieu } = useParams();
    const [danhSachGhe, setDanhSachGhe] = useState([]);
    const [thongTinPhim, setThongTinPhim] = useState({});
    const [bookSeats, setBookSeats] = useState([])
    const [selectedSeats, setSelectedSeats]=useState([]);

    const [bookStatus, setBookStatus]=useState(false);



    const [openMenuSignUp,setOpenMenuSignUp]=useState(false)
    const [openMenuSignIn,setOpenMenuSignIn]=useState(false)
    // console.log('selectedSeats',selectedSeats)

    // console.log('danhSachGhe',danhSachGhe)
    // console.log('thongTinPhim',thongTinPhim)
    // console.log('bookTickets',bookSeats)


           const filterGhe=(ghe)=>{
            if(selectedSeats.includes(ghe)){

            setBookSeats(bookSeats.filter((bookSeat,indexBookSeat)=>{
                return  bookSeat.tenGhe !== ghe.tenGhe

            }))


            setSelectedSeats(selectedSeats.filter((selectedSeat,indexSelectedSeat)=>{
                return  selectedSeat.tenGhe !== ghe.tenGhe

            }))


            



            // console.log('gggggggggggggggg',ghe)
        }else{
            setSelectedSeats([...selectedSeats,ghe])
            setBookSeats([...bookSeats, ghe])

        }
    }


    const handleBookTiket=()=>{

        let bookedsSeats= bookSeats.map((seat,indexSeat)=>{
            return {
                maGhe:seat.maGhe,
                giaVe:seat.giaVe
            }
        })

        if(bookedsSeats.length>0){

            
           let thongTinDatVe={
            maLichChieu:maLichChieu,
            danhSachVe:bookedsSeats
           }


           api_movies.datVe(thongTinDatVe)
            .then((data) => {
                console.log('yyyyyyyyyyyyyyyyyyyyyyyyyyy',data)

                setBookSeats([])
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
            setBookSeats([])
    }, [maLichChieu,bookStatus]);


  


   
    return (
        <div className='max-w-[1496px] w-screen  mx-0 flex justify-center items-center px-8 pb-8'>
         
            {danhSachGhe.length > 0 ? (
                
               
             <div className='flex flex-wrap h-fit w-full flex-col lg:flex-row  justify-center items-start px-4'>

                        <div className='w-full h-fit lg:w-3/5'>

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



<div className='w-full h-fit grid grid-cols-10 gap-1 '>
    {danhSachGhe?.map((ghe, indexGhet) => {
        const isGheDaDat = ghe.daDat; // Giả sử 'daDat' là trường thể hiện ghế đã được đặt hay chưa
        const isGheVip = ghe.loaiGhe === 'Vip'; // Giả sử 'loaiGhe' là trường thể hiện loại ghế
        return (


              <div
                key={ghe.maGhe}
                onClick={() =>[!isGheDaDat && filterGhe(ghe)] }
                className={`border shadow-zinc-500 shadow-md rounded-full 
                ${  selectedSeats.includes(ghe)? "bg-purple-500" : isGheDaDat ? 'bg-slate-600' : isGheVip ? 'bg-red-600' : 'bg-orange-500'}
                 border-gray-300 flex justify-center items-center py-2 px-3 text-center
                 hover:scale-105 
                 hover:${isGheDaDat ? 'bg-gray-400/90' : isGheVip ? 'bg-red-400/90' : 'bg-orange-400/90'} ${isGheDaDat ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            >
                {ghe.tenGhe}
            </div>

            // <div
            //     key={ghe.maGhe}
            //     onClick={() =>[!isGheDaDat && !selectedSeat.includes(ghe) && setBookTickets([...bookTickets, ghe]),!isGheDaDat && !selectedSeat.includes(ghe) 
            //         && setSelectedSeat([...selectedSeat,ghe])] }
            //     className={`border shadow-zinc-500 shadow-md rounded-full 
            //     ${  selectedSeat.includes(ghe)? "bg-purple-500" : isGheDaDat ? 'bg-slate-600' : isGheVip ? 'bg-red-600' : 'bg-orange-500'}
            //      border-gray-300 flex justify-center items-center py-2 px-3 text-center
            //      hover:scale-105 
            //      hover:${isGheDaDat ? 'bg-gray-400/90' : isGheVip ? 'bg-red-400/90' : 'bg-orange-400/90'} ${isGheDaDat ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            // >
            //     {ghe.tenGhe}
            // </div>

            
        );
    })}
</div>


                                    </div>




                            
                        </div>



                        <div className='w-full  lg:w-2/5'>


                          <div className='flex flex-col  mt-20  bg-slate-300'>
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
                                                       {bookSeats.length > 0 ? (


                                                                bookSeats?.map((bookTicket,indexBookTickets)=>{
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
                                            {/* <div onClick={handleBookTiket} className='bg-red-600 shadow-md shadow-slate-600 p-2 mt-2 rounded-md hover:text-white hover:bg-red-500 cursor-pointer' > ĐẶT VÉ NGAY</div> */}
                                            {JSON.parse(localStorage.getItem('USER'))?.maLoaiNguoiDung==="QuanTri" || JSON.parse(localStorage.getItem('USER'))?.maLoaiNguoiDung==="KhachHang" 
                                            ? 
                                            (
                                                <div onClick={handleBookTiket} className='bg-red-600 shadow-md shadow-slate-600 p-2 mt-2 rounded-md hover:text-white hover:bg-red-500 cursor-pointer' > ĐẶT VÉ NGAY</div>
                                            ) 
                                            : (
                                                <div onClick={()=>[setOpenMenuSignIn(!openMenuSignIn),setOpenMenuSignUp(false)]} className='bg-red-600 shadow-md shadow-slate-600 p-2 mt-2 rounded-md hover:text-white hover:bg-red-500 cursor-pointer' > ĐẶT VÉ NGAY</div>
                                            )
                                            }
                                               
                                            </div>

                                            




                       
                            
                       </div>


             </div>







            ) : null}

<ToastContainer/>


<ModalSignUp  isOpen={openMenuSignUp} setIsOpen={setOpenMenuSignUp} setOpenMenuSignIn={setOpenMenuSignIn} />
<ModalSignIn  isOpen={openMenuSignIn} setIsOpen={setOpenMenuSignIn} setOpenMenuSignUp={setOpenMenuSignUp} />

        </div>
    );
}

export default ListSeat;
