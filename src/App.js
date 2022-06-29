// import logo from './logo.svg';
// import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Create from './Components/Create/Create';
import React from 'react';
// import { Provider } from "react-redux";
// import { createStore } from 'redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { configureStore, PayloadAction, createSlice, } from '@reduxjs/toolkit';
import { BrowserRouter, Routes, Route } from "react-router-dom";


// const initialState = {
//   value: 0,
// }

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     },
//   },
// })

// const store = configureStore({
//   reducer: counterSlice.reducer,
// });

const theme = createTheme({
  palette: {
    primary: {
      main: "#A02337",
    }
  },
});

function App() {
  return (
    // <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/create" element={<Create />} />
            <Route path="/" element={<Home/>} />
            {/* <Route path="/projectPage" element={<Project/>} /> */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    // </Provider>
  );
}

export default App;
