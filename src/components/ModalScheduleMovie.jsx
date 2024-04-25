
import React, { useEffect, useRef, useState } from 'react';
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
import { api_movies } from '../services/apiMovies';
const { TextArea } = Input;

function ModalScheduleMovie({ visible, setVisible,data }) {
// console.log('pxxxxxxxxxxxxx',data?.maPhim)

  const [state,setState]=useState({
    heThongRapChieu:[],
    cumRapChieu:[]
  })

//   console.log('ModalScheduleMovie',state)


  useEffect(() => {
    api_movies.layDanhSachHeThongRap()
      .then((dataRap) => {
    
        // console.log('layDanhSachHeThongRap',dataRap)
        setState({...state,
            heThongRapChieu:dataRap.data.content
        });
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);

  
//   useEffect(async()=>{
//          try {
//             let result =await api_movies.layDanhSachHeThongRap()
//             // setState({
//             //     ...state,
//             //     heThongRapChieu:result.data.content
//             // })

//             // console.log('ModalScheduleMoviexxxx',result)
            
//          } catch (error) {
            
//          }
//   })


    // console.log('modalCreateMovie',visible)
    const fileInputRef = useRef(null);
    const dispatch = useDispatch();
    const [imageData, setImageData] = useState()
    const [selectedDate, setSelectedDate] = useState()

    const { handleChange, handleSubmit, handleBlur, resetForm, values, errors, touched, setFieldValue } = useFormik({
        enableReinitialize:true,
        initialValues: {
            
         

            maPhim: data?.maPhim,
            ngayChieuGioChieu: "",
            heThongRap:'',
            maRap: "",
            giaVe: "",

        },
        validationSchema: yup.object().shape({
            // maPhim: yup.string().required("Vui lòng chọn maPh"),
            ngayChieuGioChieu: yup.string().required("Vui lòng nhập ngày giờ chiếu"),

            heThongRap: yup.string().required("Vui lòng nhập hệ thông rạp"),
            maRap: yup.string().required("Vui lòng nhập mô mã rạp"),
            giaVe: yup.string().required("Vui lòng nhập giá vé"),



        }),
        onSubmit: async (values) => {
             try {

                     console.log('onSubmitvaluesxxxxxxxxxx',values)
                      let formData = new FormData();
                      for (let key in values){
                        // console.log('values[key]',values[key])

                        formData.append(key,values[key]);
                            

                      }

                      await  api_movies.taoLichChieu(values)
                      resetForm();
                      setVisible(false)
                    //  await dispatch(addAMovie({formData}))

                    //  setImageData();
                    //  resetForm();
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

        // const formattedDate = moment(dateString, 'DD/MM/YYYY').format('DD/MM/YYYY HH:mm:ss');
    setFieldValue('ngayChieuGioChieu', dateString);

        // // console.log('handleChangeDatePicker', moment('2024-04-30T00:00:00', 'DD/MM/YYYY'));
        // // console.log('handleChangeDatePicker', moment(date.d).format('DD/MM/YYYY'));
        // setFieldValue('ngayChieuGioChieu', dateString); // Update form value
    };



    // const handleChangeDatePicker = (value) => {
    //   // console.log('dateString', dateString);

    //   console.log("value_date", moment(value.selectedDate).format('DD/MM/YYYY'));
    // };

    const handleOnChangeCustom = (name) => {
        return (value) => {
            setFieldValue(name, value)
        }
    }

    const handleOnChangeHeThongRap=(value)=>{

       
          setFieldValue('heThongRap',value)
          
       
        api_movies.layThongTinCumRap(value)
        .then((cumRapChieuData) => {
      
          console.log('cumRapChieuData',cumRapChieuData)
          setState({...state,
            cumRapChieu:cumRapChieuData.data.content
          });

        
        })
        .catch((err) => {
          console.log('error', err);
        });
    }

    return (
        <div className='w-full h-full'>
            <Modal
                cancelButtonProps={{ style: { display: 'none' } }}
                okButtonProps={{ style: { display: 'none' } }}
                visible={visible}
                style={{ paddingTop: 0 }}
                okText="Thêm"
                cancelText="Hủy"
                onCancel={() => {
                    setVisible(false)
                }}
                onOk={() => {
                    setVisible(false)
                }}
            >
                <h1 className='text-2xl font-bold text-center pb-3'>Tạo Lịch Chiếu Phim</h1>
                <Form
                    onSubmitCapture={handleSubmit}

                    layout="horizontal"
            >





                    <Form.Item label="Hệ Thống Rạp">
                        <Select
                            name="heThongRap"
                            onBlur={handleBlur}
                            value={values.maNhom}
                            onChange={handleOnChangeHeThongRap} id='heThongRap'
                            placeholder="Chọn hệ thống rạp"
                        >
                            {
                                state.heThongRapChieu?.map((htr,index)=>{
                                    return (
                                        <Select.Option value={htr.maHeThongRap}>{htr.tenHeThongRap}</Select.Option>
                                    )
                                })
                            }
                    
                        </Select>
                        {errors.heThongRap && touched.heThongRap ? (<div className='text-red-500 '>{errors.heThongRap}</div>) : ''}
                    </Form.Item>

                    <Form.Item label="Mã Rạp">
                        <Select
                            name="Mã Rạp"
                            onBlur={handleBlur}
                            value={values.maNhom}
                            onChange={handleOnChangeCustom('maRap')} id='maRap'
                        >
                            {
                                state.cumRapChieu?.map((cumRap,index)=>{
                                    return (
                                        <Select.Option value={cumRap.maCumRap}>{cumRap.tenCumRap}</Select.Option>
                                    )
                                })
                            }
                        </Select>
                        {errors.maRap && touched.maRap ? (<div className='text-red-500 '>{errors.maRap}</div>) : ''}
                    </Form.Item>
                    <Form.Item  label="Ngày khởi chiếu">
                    <DatePicker showTime format={'DD/MM/YYYY HH:mm:ss'} onChange={handleChangeDatePicker}   id="ngayChieuGioChieu"   placeholder='Chọn ngày'/>
          {errors.ngayChieuGioChieu && touched.ngayChieuGioChieu ? (<div className='text-red-500 '>{errors.ngayChieuGioChieu}</div>) : ''}
        </Form.Item>



                    <Form.Item label="Giá Vé">
                        <InputNumber onChange={handleOnChangeCustom('giaVe')} onBlur={handleBlur} id='giaVe' value={values.giaVe} min={25000} max={300000} />
                        {errors.giaVe && touched.giaVe ? (<div className='text-red-500 '>{errors.giaVe}</div>) : ''}
                    </Form.Item>



                    <Form.Item >
                        <Button onClick={() => setVisible(false)} className='bg-yellow-500 text-white' >Hủy</Button> <button type='submit' className='px-2 py-1 rounded bg-green-500 text-white' >Tạo Lịch Chiếu</button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default ModalScheduleMovie
