import { createSlice } from "@reduxjs/toolkit";

const doctorsSlice = createSlice({
  name: "doctors",
  initialState: {
    allDoctors: [],
    selectedDoctor: null,
    loading: false,
    error: null,
  },
  reducers: {
    setDoctors: (state, action) => {
      state.allDoctors = action.payload;
    },
    setSelectedDoctor: (state, action) => {
      state.selectedDoctor = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setDoctors, setSelectedDoctor, setLoading, setError } = doctorsSlice.actions;
export const doctorsReducer = doctorsSlice.reducer;
