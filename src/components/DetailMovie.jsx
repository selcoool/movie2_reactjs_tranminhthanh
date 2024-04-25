import React, { useEffect, useState } from 'react'
import { getAllMovies } from '../redux/movieReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function DetailMovie() {
    const {movies} = useSelector((state) => state?.manageMovie);
    let {tenPhim}=useParams();
    console.log('DETA',tenPhim)
    console.log('DETA_movies',movies)
    const dispatch=useDispatch();
    const [group, setGroup] = useState('GP01');

    useEffect(() => {
      
            dispatch(getAllMovies({group,nameMovie:tenPhim}))

       }, [group]);
  return (
    <div className='dark:bg-slate-700  max-w-[1496px] w-full  flex justify-center items-center bg-slate-500 pb-4'>
      DetailMovie========{movies[0]?.tenPhim}
    </div>
  )
}

export default DetailMovie
