
// import { http } from "../services/config_service"
// // import { getMovie,deleteMovie,addMovie } from "./movieReducer"
// import {deleteMovie } from "./movieReducer"


// export const getAllMovies =(group,nameMovie)=>{
//     return async(dispatch,getState)=>{
//         try {
//             if (typeof nameMovie === 'undefined' || nameMovie.trim() === '') {
     
//                 const movies=  await http.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${group}`)
//                 //  console.log('getAllMovies',movie)
//                 await dispatch(getMovie(movies.data.content))
              
    
//              }else{
//                 const movies=  await http.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${group}&tenPhim=${nameMovie}`)
//                 //  console.log('getAllMovies',movie)
//                 dispatch(getMovie(movies.data.content))

//              }
//         } catch (error) {
//             console.log('error_getAllMovies',error)
//         }
//     }
// }



// export const deleteAMovie =(codeMovie)=>{
//     return async(dispatch,getState)=>{
//         try {

//           http.delete(`/QuanLyPhim/XoaPhim?MaPhim=${codeMovie}`)
//           dispatch(deleteMovie(codeMovie))
            
//         } catch (error) {
//             console.log('error_deleteAMovie',error)
//         }
//     }
// }



// export const addAMovie =(movie)=>{
//     return async(dispatch,getState)=>{
//         try {

//             const newMovie = await http.post(`/QuanLyPhim/ThemPhimUploadHinh`,movie)
//             dispatch(addMovie(newMovie.data.content))
//         console.log('fffffffffffffff',newMovie)
            
//         } catch (error) {
//             console.log('error_addAMovie',error)
//         }
//     }
// }
