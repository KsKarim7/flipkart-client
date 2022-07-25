import Header from './pages/header/Header';
import Home from './pages/home/Home';
import { Box } from '@mui/material'
import DataProvider from './context/DataProvider';


function App() {
  return (
    <DataProvider>
      <Header></Header>
      <Box style={{ marginTop: '54px' }}>
        <Home></Home>
      </Box>
    </DataProvider>
  );
}

export default App;
