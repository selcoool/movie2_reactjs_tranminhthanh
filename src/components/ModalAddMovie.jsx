
import React, { useRef, useState } from 'react';
import {
  Modal,
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
import { useFormik } from 'formik';
import * as yup from "yup"
import moment from 'moment';
import { addAMovie } from '../redux/movieReducer';
import { useDispatch } from 'react-redux';
const { TextArea } = Input;

function ModalAddMovie({visible,setVisible}) {
    // console.log('modalCreateMovie',visible)
    const fileInputRef = useRef(null);
    const dispatch=useDispatch();
    const [imageData,setImageData]=useState()
    const [selectedDate,setSelectedDate]=useState()

    const { handleChange, handleSubmit, handleBlur, resetForm, values, errors, touched,setFieldValue } = useFormik({
      
      initialValues: {
        tenPhim: "",
        trailer:"",
        moTa:"",
        ngayKhoiChieu:"",
        sapChieu:false,
        dangChieu:false,
        hot:false,
        danhGia:1,
        maNhom:"",
        File:"",

      },
      validationSchema: yup.object().shape({
       tenPhim: yup.string().required("Vui lòng nhập tên phim"),
       trailer: yup.string().required("Vui lòng nhập trailer"),
  
       moTa: yup.string().required("Vui lòng nhập mô tả"),
       ngayKhoiChieu:yup.string().required("Vui lòng nhập ngày khởi chiếu"),

       danhGia:yup.number().required("Vui lòng nhập số"),
       maNhom:yup.string().required("Vui lòng chọn mã nhóm"),

       File:yup.string().required("Vui lòng chọn file")
      
  
  
      }),
      onSubmit: async(values) => {
         try {

                //  console.log('onSubmitvaluesxxxxxxxxxx',values)
                  let formData = new FormData();
                  for (let key in values){
                    // console.log('values[key]',values[key])
                        formData.append(key,values[key]);
                    
                  }


                 await dispatch(addAMovie({formData}))
                
                 setImageData();
                 resetForm();
                  fileInputRef.current.value = null;
                

          
         } catch (error) {
              console.log('error',error)
         }
                  
      }
    });
  
    // console.log('values', values)
    // console.log('errors', errors)
    // console.log('touched', touched);



    const handleChangeDatePicker = (date, dateString) => {

      // console.log('handleChangeDatePicker', moment('2024-04-30T00:00:00', 'DD/MM/YYYY'));
      // console.log('handleChangeDatePicker', moment(date.d).format('DD/MM/YYYY'));
      setFieldValue('ngayKhoiChieu', dateString); // Update form value
    };

    

    // const handleChangeDatePicker = (value) => {
    //   // console.log('dateString', dateString);

    //   console.log("value_date", moment(value.selectedDate).format('DD/MM/YYYY'));
    // };

 const handleOnChangeCustom=(name)=>{
   return (value)=>{
    setFieldValue(name,value)
   }
 }


  return (
    <div className='w-full h-full'>
    <Modal
     cancelButtonProps={{ style: { display: 'none' } }}
     okButtonProps={{ style: { display: 'none' } }}
      visible={visible}
      style={{paddingTop:0}}
      okText="Thêm"
      cancelText="Hủy"
      onCancel={()=>{
        setVisible(false)
      }}
      onOk={() => { 
        setVisible(false)
      }}
    >
        <h1 className='text-2xl font-bold text-center pb-3'>Thêm Phim Mới</h1>
        <Form
        onSubmitCapture={handleSubmit}
        
        layout="horizontal"
        
       
      >
      
        <Form.Item  label="Tên phim">
        
          <Input  onChange={handleChange} onBlur={handleBlur} id='tenPhim' value={values.tenPhim} />
          
         
          {errors.tenPhim && touched.tenPhim ? (<div className='text-red-500 '>{errors.tenPhim}</div>) : ''}
          
        </Form.Item>
        <Form.Item label="Trailer">
          <Input onChange={handleChange} onBlur={handleBlur} id='trailer' value={values.trailer} />
          {errors.trailer && touched.trailer ? (<div className='text-red-500 '>{errors.trailer}</div>) : ''}
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input onChange={handleChange} onBlur={handleBlur} id='moTa' value={values.moTa} />
          {errors.moTa && touched.moTa ? (<div className='text-red-500 '>{errors.moTa}</div>) : ''}
        </Form.Item>

        <Form.Item label="Mã Nhóm">
  <Select
    name="maNhom"
    onBlur={handleBlur}
    value={values.maNhom}
    onChange={handleOnChangeCustom('maNhom')} id='maNhom'
  >
    <Select.Option  value="GP01" >GP01</Select.Option>
    <Select.Option value="GP02"  >GP02</Select.Option>
    <Select.Option value="GP03"  >GP03</Select.Option>
    <Select.Option value="GP04" >GP04</Select.Option>
  </Select>
  {errors.maNhom && touched.maNhom ? (<div className='text-red-500 '>{errors.maNhom}</div>) : ''}
</Form.Item>
<Form.Item label="Ngày khởi chiếu">

{/* <DatePicker format={'DD/MM/YYYY'} onChange={handleChangeDatePicker}     placeholder='Chọn ngày'/> */}
<DatePicker format={'DD/MM/YYYY'} onChange={handleChangeDatePicker}  value={values.ngayKhoiChieu ? moment(values.ngayKhoiChieu, 'DD/MM/YYYY') : null}   placeholder='Chọn ngày'/>

  {/* <DatePicker
    format={'DD/MM/YYYY'}
    onChange={(value) => handleChangeDatePicker(value)}
    value={values.ngayKhoiChieu ? moment(values.ngayKhoiChieu, 'DD/MM/YYYY') : null} // Convert value to moment object
    placeholder='Chọn ngày'
  /> */}
  {errors.ngayKhoiChieu && touched.ngayKhoiChieu ? (<div className='text-red-500 '>{errors.ngayKhoiChieu}</div>) : ''}
</Form.Item>




        <div className='flex gap-2'>
        <Form.Item label="Đang chiếu" >
          <Switch  onChange={handleOnChangeCustom('dangChieu')} onBlur={handleBlur} id='dangChieu' value={values.dangChieu} />
        </Form.Item>

        <Form.Item label="Sắp chiếu" >
          <Switch  onChange={handleOnChangeCustom('sapChieu')} onBlur={handleBlur} id='sapChieu' value={values.sapChieu} />
        </Form.Item>

        <Form.Item label="Hot" >
          <Switch onChange={handleOnChangeCustom('hot')} onBlur={handleBlur} id='dangChieu' value={values.hot} />
        </Form.Item>

        </div>

        <Form.Item label="Hình ảnh">
          <input type='file' ref={fileInputRef}  id='File' onBlur={handleBlur}
               onChange={(e) => {
                      //  const file = e.target.files[0];
                        setImageData(URL.createObjectURL(e.target.files[0]))
                        values.File = e.target.files[0];

                    }}/>
                 {errors.File && touched.File ? (<div className='text-red-500 '>{errors.File}</div>) : ''}
               <br />
               
              <img src={imageData} alt='....' className='w-28 h-28 object-cover'/>
        </Form.Item>
       

        <Form.Item label="Số sao">
          <InputNumber onChange={handleOnChangeCustom('danhGia')} onBlur={handleBlur} id='danhGia' value={values.danhGia} min={1} max={10}/>
          {errors.danhGia && touched.danhGia ? (<div className='text-red-500 '>{errors.danhGia}</div>) : ''}
        </Form.Item>

     

        <Form.Item >
            <Button onClick={()=>  setVisible(false)} className='bg-yellow-500 text-white' >Hủy</Button> <button  type='submit' className='px-2 py-1 rounded bg-green-500 text-white' >Thêm Phim</button>
        </Form.Item>
      </Form>
    </Modal>
    </div>
  )
}

export default ModalAddMovie


 