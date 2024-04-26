import React, { useEffect } from 'react';
import { api_movies } from '../services/apiMovies';

function ModalDetail({ isOpen, setIsOpen,trailerData}) {
    console.log('isOpensssssssssssssssssssss', isOpen);
    console.log('trailerData', trailerData);
    
    const handleCloseModal =(e)=>{
        if(e.target.id==="wrapper")
       {
        setIsOpen(false)
       } 
    }


    // useEffect(() => {
    //     api_movies.getAllMovies()
    //       .then((data) => {
    //         // setSlides(data.data.content);
    //         // console.log('data.data m', data.data.content.items);
    //        const currentFilm =data.data.content.items.filter((movies)=>{
    //          return movies.maPhim==maPhim;
    //        })

    //        console.log('currentFilm',currentFilm);
    //       })
    //       .catch((err) => {
    //         console.log('error', err);
    //       });
    //   }, []);
   

    return (
        <>
            {isOpen ? (
                <div id='wrapper' onClick={handleCloseModal} className='absolute top-20 z-10 flex justify-center items-center w-full h-full'>
                 
                   
                      <div className='w-fit h-fit mr-4 bg-slate-100'>
                  
                            <iframe
                        className="lg:w-[750px] lg:h-[400px] w-full h-full"
                        src={`https://www.youtube.com/embed/${trailerData}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                            ></iframe>
                      </div>
                </div>
            ) : null}
        </>
    );
}

// Modal
//                     <button onClick={() => setIsOpen(false)}>Close Modal</button>
export default ModalDetail;