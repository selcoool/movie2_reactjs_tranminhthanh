
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { http } from "../services/config_service"

import { ToastContainer, toast } from 'react-toastify';

export const getAllMovies = createAsyncThunk(
  'movies/getAllMovies',
  async (movie, thunkAPI) => {
    try {
      let movies;
      if (typeof movie?.nameMovie === 'undefined' || movie?.nameMovie.trim() === '') {
        movies = await http.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${movie?.group}`);
      } else {
        movies = await http.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${movie?.group}&tenPhim=${movie?.nameMovie}`);
      }
      return movies?.data.content;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);


export const addAMovie = createAsyncThunk(
  'movies/addAMovie',
  async (movie, thunkAPI) => {
    try {
     
      const movies = await http.post(`/QuanLyPhim/ThemPhimUploadHinh`,movie.formData)

      // console.log('0000000000000000',movies)
      return movies.data.content;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);



export const deleteAMovie = createAsyncThunk(
  'movies/deleteAMovie',
  async (movie, thunkAPI) => {
    try {
     
      const movies = await http.delete(`/QuanLyPhim/XoaPhim?MaPhim=${movie.codeMovie}`)
      return movie.codeMovie;


    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);


export const editAMovie = createAsyncThunk(
  'movies/editAMovie',
  async (movie, thunkAPI) => {
    try {
      const movies = await http.post(`/QuanLyPhim/CapNhatPhimUpload`,movie.formData)
      return movies.data.content;

      // console.log('pppppppppppppppppppppppppppppppppvvvvvvvvvvvvvvvvv',movies)


    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);




const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    status: ''
  },
  reducers: {
    deleteMovie: (state, action) => {
      state.movies = state.movies.filter(movie => movie.maPhim !== action.payload);
    },
    // addMovie: (state, action) => {
    //   state.movies.push(action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllMovies.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(getAllMovies.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.movies = action.payload;
    });
    builder.addCase(getAllMovies.rejected, (state, action) => {
      state.status = 'rejected';
    });


    builder.addCase(addAMovie.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(addAMovie.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.movies.push(action.payload);
      toast.success('Bạn đã thêm phim thành công !')

    });
    builder.addCase(addAMovie.rejected, (state, action) => {
      state.status = 'rejected';
      toast.error('Bạn đã thêm phim không thành công !')
    });

    
    builder.addCase(deleteAMovie.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(deleteAMovie.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.movies = state.movies.filter(movie => movie.maPhim !== action.payload);
      toast.success('Bạn đã xóa phim thành công !')

    });
    builder.addCase(deleteAMovie.rejected, (state, action) => {
      state.status = 'rejected';
      toast.error('Bạn đã xóa phim không thành công !')
    });


    builder.addCase(editAMovie.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(editAMovie.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      // state.movies = state.movies.filter(movie => movie.maPhim !== action.payload);
      state.movies = state.movies.map(movie =>
          movie.maPhim === action.payload.maPhim ? action.payload : movie
        );
        toast.success('Bạn đã chỉnh sửa phim thành công !')

      console.log("oiiiiiiiiii",action.payload)
    });
    builder.addCase(editAMovie.rejected, (state, action) => {
      state.status = 'rejected';
      toast.error('Bạn đã chỉnh sửa phim không thành công !')
    });


  },
});

export const {  } = movieSlice.actions;

export default movieSlice.reducer;
