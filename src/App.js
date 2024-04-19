import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.js';
import Calculator from './pages/Calculator.js';
import About from './pages/About.js';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />}/>
        <Route path='/calculator' element={<Calculator />}/>
        <Route path='/about' element={<About />}/>
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
