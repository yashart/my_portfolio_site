import React from 'react';
import './styles/App.css';
import {lightTheme} from './themes/light.jsx';
import { ThemeProvider } from '@mui/material/styles';
import MainPage from './pages/MainPage/MainPage.jsx'

import "@fontsource/roboto";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
