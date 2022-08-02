import Header from './pages/header/Header';
import Home from './pages/home/Home';
import { Box } from '@mui/material'
import DataProvider from './context/DataProvider';
import { Routes, Route } from 'react-router-dom';
import DetailView from './pages/details/DetailView';
import Cart from './pages/cart/Cart';


function App() {
  return (
    <DataProvider>
      <Header></Header>
      <Box style={{ marginTop: '54px' }}>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/product/:id' element={<DetailView></DetailView>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
        </Routes>
      </Box>
    </DataProvider>
  );
}

export default App;
