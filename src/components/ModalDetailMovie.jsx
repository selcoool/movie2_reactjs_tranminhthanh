import React from 'react'
import moment from 'moment';
import 'moment/locale/vi';
import { Modal, Form, Input, Button, Rate } from 'antd';

function ModalDetailMovie({visible,setVisible,data}) {
  // console.log("pppppppppppdata",data)

  return (
   
    <div className='w-full h-full'>
    <Modal
     cancelButtonProps={{ style: { display: 'none' } }}
 
      visible={visible}
      style={{top: 20 }}
      okText='Đóng'
      cancelText="Hủy"
      onCancel={()=>{
        setVisible(false)
      }}
      onOk={() => {
        setVisible(false)
      }}
    >
        <h1 className='text-2xl font-bold text-center pb-3'>{data?.tenPhim}-[{data?.maPhim}]</h1>
        <div className='flex flex-col'>
          <div className='w-full'>
            <img  className='w-full h-80 object-cover' src={data?.hinhAnh} alt={data?.tenPhim}></img>

          </div>
          <div>
            <div >
           <span className='font-bold'>Ngày khởi chiếu :</span> {moment(data?.ngayKhoiChieu).format('DD/MM/YYYY')}
         
            </div>
            <div >
           <span className='font-bold'>Mô tả [{data?.maNhom}]:</span>  {data?.moTa}
            
            </div>
            <div>
           <span className='font-bold' > Bí danh:</span>  {data?.biDanh}
            </div>
            <div>
           <span className='font-bold' > Hot:</span> {data?.biDanh ? 'Đang hot':'Bình thường'}  
            </div>

            <div>
           <span className='font-bold' > Đang chiếu:</span> {data?.dangChieu ? 'Đang chiếu':'Chưa Chiếu'}  
            </div>
            <div>
           <span className='font-bold' > Sắp chiếu:</span> {data?.sapChieu ? 'Sắp chiếu':'Chưa lên lịch chiếu'}  
            </div>
            <div className='flex items-center'>
           <span className='font-bold' > Đánh giá:</span> <Rate allowHalf disabled value={(data?.danhGia)/2} />
            
            </div>

  

          </div>

        </div>

    

     
    </Modal>
    </div>
  )
}

export default ModalDetailMovie
