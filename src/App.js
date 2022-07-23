import Header from './pages/header/Header';
import Home from './pages/home/Home';
import { Box } from '@mui/material'

function App() {
  return (
    <div>
      <Header></Header>
      <Box style={{ marginTop: '54px' }}>
        <Home></Home>
      </Box>
    </div>
  );
}

export default App;
