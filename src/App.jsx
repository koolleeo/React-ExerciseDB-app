import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, Footer } from './components';
import { Home, ExerciseDetail } from './pages';
import './App.css';

function App() {

  return (
  <BrowserRouter>
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  </BrowserRouter>  
  )
}

export default App
