import logo from './logo.svg';
import './App.css';


//imprtar componentes
import CompCreateInsumo from './insumos/createInsumo';
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
          <Route path='/'       element={ <CompShowInsumos/>} />
          <Route path='/create' element={ <CompCreateInsumo/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
