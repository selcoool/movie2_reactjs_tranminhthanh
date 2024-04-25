import { http } from "./config_service"
import { ToastContainer, toast } from 'react-toastify';



export const api_movies={
    layThongTinBanner:()=>{
        return http.get("/QuanLyPhim/LayDanhSachBanner")
    },
    // searchAllMovies:(tenPhim,tuNgay,denNgay)=>{
    //     if (typeof tenPhim === 'undefined' || tenPhim.trim() === '') {
    //         return http.get(`/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP04&tuNgay=${tuNgay}&denNgay=${denNgay}`);
    //      } else {
    //         return http.get(`/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP04&tenPhim=${tenPhim}&tuNgay=${tuNgay}&denNgay=${denNgay}`);
    //       }
        
    // },
    layDanhSachHeThongRap:()=>{
        return http.get("/QuanLyRap/LayThongTinHeThongRap")
    },
    layThongTinCumRap:(maHeThongRap)=>{
        return http.get(`/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`)
    },

    layThongTinLichChieuHeThongRap:(maHeThongRap)=>{
        return http.get(`/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}`)
    },

    taoLichChieu:(thongTinLichChieu)=>{
          
                toast.success('Bạn đã tạo lịch chiếu thành công !')
               return http.post(`/QuanLyDatVe/TaoLichChieu`,thongTinLichChieu)
          
       
    },

    // getAllMoviesPagination:(curentPage,moviePerPage)=>{
    //     return http.get(`/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP04&soTrang=${curentPage}&soPhanTuTrenTrang=${moviePerPage}`)
    // },
    // getAllTheatures:()=>{
    //     return http.get('/QuanLyRap/LayThongTinHeThongRap')
    // },
    // searchAllMovies:(tenPhim,tuNgay,denNgay)=>{
    //     if (typeof tenPhim === 'undefined' || tenPhim.trim() === '') {
    //         return http.get(`/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP04&tuNgay=${tuNgay}&denNgay=${denNgay}`);
    //      } else {
    //         return http.get(`/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP04&tenPhim=${tenPhim}&tuNgay=${tuNgay}&denNgay=${denNgay}`);
    //       }
        
    // },
    // getAllMoviesInTheatre:(maHeThongRap)=>{
    //     return http.get(`/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP01`)

   
    // },
    // getAMovie:(tenPhim)=>{
    //     return http.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=GP04&tenPhim=${tenPhim}`)
    // }
    // ,
    // getAllSeats:(MaLichChieu)=>{
    //     return http.get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${MaLichChieu}`)
    // }
    // ,
    // getAllMoviesManagement:()=>{
    //     return http.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=GP04`)
    // },
    // createAMovie:(movie)=>{
      
    //     return http.post(`/QuanLyPhim/ThemPhimUploadHinh`,movie)

      
    // },
    // deleteAMovie:(movie)=>{
    //     // console.log('oooooooooo',`/QuanLyPhim/XoaPhim?MaPhim=${Movie}`)
    //     // const maPhim={MaPhim:Movie}
    //     return http.delete(`/QuanLyPhim/XoaPhim?MaPhim=${movie}`)
    // },
    // editAMovie:(movie)=>{
    //     // console.log('oooooooooo',`/QuanLyPhim/XoaPhim?MaPhim=${Movie}`)
    //     // const maPhim={MaPhim:Movie}
    //     return http.delete(`/QuanLyPhim/CapNhatPhimUpload`,movie)
    // }
}