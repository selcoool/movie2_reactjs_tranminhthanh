import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovies } from '../redux/movieReducer';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function SliderMovie() {

    const {movies} = useSelector((state) => state?.manageMovie);
    // console.log('DETA',tenPhim)
    console.log('DETA_movies',movies)
    const dispatch=useDispatch();
    const [group, setGroup] = useState('GP01');

    // const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      
            dispatch(getAllMovies({group}))

       }, [group]);



    const slideLeft=()=>{
        var slider = document.getElementById('slider')
        slider.scrollLeft=slider.scrollLeft-400
        console.log('slider.scrollLeft',slider.scrollLeft)
      }
      const sliderRight=()=>{
       var slider =document.getElementById('slider')
       slider.scrollLeft=slider.scrollLeft+400
       console.log('slider.scrollRight',slider.scrollLeft)
      }


  return (
    <div className='max-w-[1496px] flex justify-center items-center'>
      
          
      <div className='relative flex items-center mt-8'>
    {movies.length>=1 && ( <BsArrowLeftCircle className=' z-[1] left-4 absolute text-white cursor-pointer' onClick={slideLeft} size={30}/>)}
<div id='slider' className='w-full h-full overflow-x-scroll scroll scroll-smooth whitespace-nowrap no-scrollbar  '>
 


{movies.length!==0 ? (

<>
{movies?.map((movie,indexMovie
          
          )=>{
       
    return (


        
            <div key={indexMovie} className='select-none h-full w-[45%] md:w-[20%] lg:w-[15%] inline-grid cursor-pointer relative mr-2 last:mr-0  hover:scale-105 duration-300'>
         <Link to={`/detail/${movie?.tenPhim}`} >
        <img className='w-full h-[200px] object-cover  '
        src={movie.hinhAnh}
      />
        <div className='absolute bottom-[-1px] flex flex-col  bg-black/40 w-full pb-1'>
        <div className='flex flex-col items-center justify-center px-2 ml-2'>
        {/* <div className='text-red-600 md:text-red-600 text-sm md:text-lg font-bold'>{movie.priceProduct} $</div> */}
      
        </div>

        </div>
        </Link>
      </div>
     
    )

          })}




</>
):null}








  

</div> 
{movies.length>=1 && (<BsArrowRightCircle className=' z-[1] right-4 absolute text-white cursor-pointer' onClick={sliderRight} size={30}/>)}
</div>



    </div>
  )
}

export default SliderMovie
