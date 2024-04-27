import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { http } from "../services/config_service"

import { ToastContainer, toast } from 'react-toastify';


export const getAllUsers = createAsyncThunk(
  'users/getAllUsers',
  async (user, thunkAPI) => {
    try {
      let users;
      if (typeof user.searchUser === 'undefined' || user.searchUser.trim() === '') {
        users = await http.get(`/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${user?.group}`);
      } else {
        users = await http.get(`/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${user?.group}&tuKhoa=${user.searchUser}`);
      }
      return users.data.content;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);



export const addAUser = createAsyncThunk(
  'users/addAUser',
  async (user, thunkAPI) => {
    try {
      console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',user)
      // Gửi request POST đến endpoint `/QuanLyNguoiDung/ThemNguoiDung` với formData của user
      const users = await http.post(`/QuanLyNguoiDung/ThemNguoiDung`, user.formData);
      // Trả về dữ liệu từ response
      console.log('RRRRRxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',users)
      return users.data.content;
    } catch (error) {
      // Trả về một giá trị bị reject nếu có lỗi xảy ra
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);




export const deleteAUser = createAsyncThunk(
  'users/deleteAUser',
  async (user, thunkAPI) => {
    try {
     

      // console.log('pppppppppppppppppcccc',user)
      const users = await http.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user.taiKhoan}`)
      return user.taiKhoan;

      console.log('dddaaaaaaaaaaaaaaaaaaaaaaaaa',users)


    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);



export const editAUser = createAsyncThunk(
  'users/editAUser',
  async (user, thunkAPI) => {
    try {
      const users = await http.post(`/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,user.formData)


      return users.data.content;



    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);


export const signUpUser = createAsyncThunk(
  'users/signUpUser',
  async (user, thunkAPI) => {
    try {
      // console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',user)
      // Gửi request POST đến endpoint `/QuanLyNguoiDung/ThemNguoiDung` với formData của user
      const users = await http.post(`/QuanLyNguoiDung/DangKy`, user.formData);
      // Trả về dữ liệu từ response
      // console.log('RRRRRxxxxxxxxxxx signUpUser',users)
      return users.data.content;
    } catch (error) {
      // Trả về một giá trị bị reject nếu có lỗi xảy ra
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);



export const signInUser = createAsyncThunk(
  'users/signInUser',
  async (user, thunkAPI) => {
    
    try {

      // console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',user)
      const users = await http.post(`/QuanLyNguoiDung/DangNhap`,user.formData)

      // console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxTTTT',users.data.content)
      return users.data.content;



    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);


let user ='';
if(localStorage.getItem('USER')){
  user =JSON.parse(localStorage.getItem('USER'))
}
// console.log('lllllllllllllllllllllllll',JSON.parse(localStorage.getItem('USER')).accessToken)




const initialState = {
  users:'',
  status:'',
  signUp:'',
  signIn:user,
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    signOutUser: (state, action) => {
      state.signIn='';
      localStorage.removeItem('USER');
      toast.success('Bạn đã đăng xuất thành công !')

    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.users = action.payload;
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.status = 'rejected';
    });


    builder.addCase(addAUser.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(addAUser.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.users.push(action.payload);
      toast.success('Bạn đã thêm người dùng thành công !')

    });
    builder.addCase(addAUser.rejected, (state, action) => {
      state.status = 'rejected';
      toast.error('Bạn thêm người dùng không thành công !')
    });


    builder.addCase(deleteAUser.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(deleteAUser.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.users = state.users.filter(user => user.taiKhoan !== action.payload);
      toast.success('Bạn đã xóa thành công !')
      // console.log('action.payloadccccccccccc',action.payload)
    });
    builder.addCase(deleteAUser.rejected, (state, action) => {
      state.status = 'rejected';
      toast.error('Bạn xóa không thành công, có thể người dùng đã đặt vé nên không thể xóa !')
    });


    builder.addCase(editAUser.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(editAUser.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      // state.movies = state.movies.filter(movie => movie.maPhim !== action.payload);
      state.users = state.users.map(user =>
        user.taiKhoan === action.payload.taiKhoan ? action.payload : user
        );
        toast.success('Bạn đã chỉnh sửa thành công !')
      // console.log("oiiiiiiiiii",action.payload)
    });
    builder.addCase(editAUser.rejected, (state, action) => {
      state.status = 'rejected';
      toast.error('Bạn chỉnh không thành công, không thể chỉnh sửa tài khoản, và email !')
    });




    builder.addCase(signUpUser.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.signUp=action.payload
      toast.success('Bạn đã đăng ký thành công !')
    });
    builder.addCase(signUpUser.rejected, (state, action) => {
      state.status = 'rejected';
      toast.error('Bạn đăng ký không thành công !')
    });


    builder.addCase(signInUser.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(signInUser.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.signIn=action.payload;
      localStorage.setItem('USER',JSON.stringify(action.payload))
      toast.success('Bạn đã đăng nhập thành công !')
      // console.log('fulfilled tttttttttttttttttttttt',JSON.stringify(action.payload))
    });
    builder.addCase(signInUser.rejected, (state, action) => {
      state.status = 'rejected';
      toast.error('Bạn đã đăng nhập không thành công !')
    });



  


  },
})

// Action creators are generated for each case reducer function
export const { signOutUser } = userSlice.actions

export default userSlice.reducer