
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
import { useDispatch } from 'react-redux';
import { addAUser } from '../redux/userReducer';
const { TextArea } = Input;
function ModalAddUser({visible,setVisible}) {


    // console.log('modalCreateMovie',visible)
    const fileInputRef = useRef(null);
    const dispatch=useDispatch();
  

    const { handleChange, handleSubmit, handleBlur, resetForm, values, errors, touched,setFieldValue } = useFormik({
      
      initialValues: {
        taiKhoan: "",
        hoTen: "",
        email: "",
        soDt: "",
        matKhau: "",
        maNhom: "",
        maLoaiNguoiDung: "",
       

      },
      validationSchema: yup.object().shape({
        taiKhoan: yup.string().required("Vui lòng nhập tên tài khoản "),
        hoTen: yup.string().required("Vui lòng nhập họ và tên"),
  
        email: yup.string().required("Vui lòng nhập email"),
        soDt:yup.number().required("Vui lòng nhập số điện thoại"),

        matKhau:yup.string().required("Vui lòng nhập mật khẩu"),
       maNhom:yup.string().required("Vui lòng chọn mã nhóm"),
       maLoaiNguoiDung:yup.string().required("Vui lòng chọn mã loại người dùng"),

      //  File:yup.string().required("Vui lòng chọn file")
      
  
  
      }),
      onSubmit: async(values) => {
         try {

                //  console.log('onSubmitvaluesxxxxxxxxxx',values)
                  let formData = new FormData();
                  for (let key in values){
                    // console.log('values[key]',values[key])
                        formData.append(key,values[key]);
                    
                  }


                 await dispatch(addAUser({formData:values}))
                
                //  setImageData();
                 resetForm();
                 setVisible(false)
                //   fileInputRef.current.value = null;
                

          
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
        <h1 className='text-2xl font-bold text-center pb-3'>Thêm Người Dùng Mới</h1>
        <Form
        onSubmitCapture={handleSubmit}
        
        layout="horizontal"
        
       
      >
      
        <Form.Item  label="Tài Khoản">
        
          <Input  onChange={handleChange} onBlur={handleBlur} id='taiKhoan' value={values.taiKhoan} />
          
         
          {errors.taiKhoan && touched.taiKhoan ? (<div className='text-red-500 '>{errors.taiKhoan}</div>) : ''}
          
        </Form.Item>
        <Form.Item label="Họ và Tên">
          <Input onChange={handleChange} onBlur={handleBlur} id='hoTen' value={values.hoTen} />
          {errors.hoTen && touched.hoTen ? (<div className='text-red-500 '>{errors.hoTen}</div>) : ''}
        </Form.Item>
        <Form.Item label="Email">
          <Input onChange={handleChange} onBlur={handleBlur} id='email' value={values.email} />
          {errors.email && touched.email ? (<div className='text-red-500 '>{errors.email}</div>) : ''}
        </Form.Item>

        <Form.Item label="Số Điện Thoại">
          <Input onChange={handleChange} onBlur={handleBlur} id='soDt' value={values.soDt} />
          {errors.soDt && touched.soDt ? (<div className='text-red-500 '>{errors.soDt}</div>) : ''}
        </Form.Item>


        <Form.Item label="Mật Khẩu">
          <Input onChange={handleChange} onBlur={handleBlur} id='matKhau' value={values.matKhau} />
          {errors.matKhau && touched.matKhau ? (<div className='text-red-500 '>{errors.matKhau}</div>) : ''}
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


<Form.Item label="Mã Loại Người Dùng">
  <Select
    name="maLoaiNguoiDung"
    onBlur={handleBlur}
    value={values.maLoaiNguoiDung}
    onChange={handleOnChangeCustom('maLoaiNguoiDung')} id='maLoaiNguoiDung'
  >
    <Select.Option  value="QuanTri" >Quản Trị</Select.Option>
    <Select.Option value="KhachHang"  >Khách Hàng</Select.Option>
   
  </Select>
  {errors.maLoaiNguoiDung && touched.maLoaiNguoiDung ? (<div className='text-red-500 '>{errors.maLoaiNguoiDung}</div>) : ''}
</Form.Item>


        <Form.Item >
            <Button onClick={()=>  setVisible(false)} className='bg-yellow-500 text-white' >Hủy</Button> <button  type='submit' className='px-2 py-1 rounded bg-green-500 text-white' >Thêm Người Dùng</button>
        </Form.Item>
      </Form>
    </Modal>
    </div>
  )
}

export default ModalAddUser
