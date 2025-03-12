import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Initial state for the user slice
const initialState = {
  user: null,
  error: null,
  loading: false,
};
//http://localhost:5000/login
// Async thunk to handle login
export const loginUser = createAsyncThunk(
  '/login',
  async ({ name,username, dob, password }, { rejectWithValue }) => {
    try {
      const response = await fetch('https://userlogindata.glitch.me/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, username, dob, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid email or password');
      }

      const data = await response.json();
      console.log("value of data",data)
      return data; // Return user data on successful login
    } catch (error) {
      return rejectWithValue(error.message); // Return error message on failure
    }
  }
);

// Create slice using Redux Toolkit's createSlice method
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      
      state.user = null;  // Simply clear user data
      console.log("user is:",state.user)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Store user data
        console.log("value",state.user)
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store error message
      });
  },
});

export const userActions= userSlice.actions
export default userSlice.reducer;
