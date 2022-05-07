import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Container from '@mui/material/Container'

import Home from '../wallet-pages/main/index';
import Confirm from '../wallet-pages/confirm/index';
import Success from '../wallet-pages/success/index';


const Main = () => {
  return (
    <Container maxWidth="sm">
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="confirm/*" element={<Confirm />} />
            <Route path="success/*" element={<Success />} />
      </Routes>
    </Container>
  );
  
}

export default Main;