
// import { http } from "../services/config_service"
// import { deleteUser } from "./userReducer"


// export const getAllUsers =(group,searchUser)=>{
//     return async(dispatch,getState)=>{
//         try {

//             if (typeof searchUser === 'undefined' || searchUser.trim() === '') {
//                 const users=  await http.get(`/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${group}`)
//                 dispatch(getUser(users.data.content))

                
//             }else{
//                 const users=  await http.get(`/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${group}&tuKhoa=${searchUser}`)
//                 dispatch(getUser(users.data.content))

//             }

        
//         } catch (error) {
            
//         }
//     }
// }



// export const deleteAUser =(taiKhoan)=>{
//     return async(dispatch,getState)=>{
//         try {

//         //   http.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
//           dispatch(deleteUser(taiKhoan))
            
//         } catch (error) {
//             console.log('error_deleteAMovie',error)
//         }
//     }
// }