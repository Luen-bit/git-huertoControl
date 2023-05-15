import logo from './logo.svg';
import './App.css';


//imprtar componentes

import CompShowInsumos from './insumos/showInsumos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
 
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <CompShowInsumos/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
