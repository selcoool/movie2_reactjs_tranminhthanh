import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Segmented, Tabs } from 'antd';

import { getAllMovies } from "../redux/movieReducer"
import ListMovie from './ListMovie';


function Movie() {

  const dispatch=useDispatch();

    const {movies} = useSelector((state) => state?.manageMovie);

    const [group, setGroup] = useState('GP01');
    const [moviesData, setMoviesData] = useState(movies);
    const [sapChieuMoviesData, setSapChieuMoviesData] = useState([]);
    const [dangChieuMoviesData, setDangChieuMoviesData] = useState([]);


// console.log('sapChieuMoviesData',sapChieuMoviesData)
// console.log('dangChieuMoviesData',dangChieuMoviesData)

    const [toggleStateMenu, setToggleStateMenu] = useState(0);




    useEffect(()=>{
      setMoviesData(movies)
    }) 
  

    useEffect(() => {
      dispatch(getAllMovies({group}))
   
      
      
     }, [group]);





     const onChange = (key) => {

      

      if(key==='dangChieu'){
        let foundMovies=movies.filter((mV,indexMv)=>{
          return mV[key]
        })
        setDangChieuMoviesData(foundMovies)
      } else if(key==='sapChieu'){
        let foundMovies=movies.filter((mV,indexMv)=>{
          return mV[key]
        })
        setSapChieuMoviesData(foundMovies)
      }
     
      
      
    };

    

    const items = [
      {
        key: 'tatCa',
        label: 'Tất Cả',
        children: <ListMovie moviesData={moviesData}/>,
      },
      {
        key: 'dangChieu',
        label: 'Đang Chiếu',
        children: <ListMovie moviesData={dangChieuMoviesData}/>,
      },
      {
        key: 'sapChieu',
        label: 'Sắp Chiếu',
        children: <ListMovie moviesData={sapChieuMoviesData}/>,
      },
    ];



     
    // <Tabs  onClick={(record)=>{console.log(record)}} defaultActiveKey="1" items={items}  onChange={onChange} />
  return (
    <div className='dark:bg-slate-500  max-w-[1496px] flex justify-center items-center pb-6 pt-4 '>
      {/* <div className='w-full'> */}
      <Tabs  defaultActiveKey="1" items={items}  onChange={onChange} />
      {/* </div> */}
    </div>
  )
}

export default Movie
