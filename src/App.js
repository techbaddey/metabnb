import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Index from './components/Index';
import Place from './pages/Place';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/place' element={<Place />} />
      </Routes>
    </div>
  );
}

export default App;
