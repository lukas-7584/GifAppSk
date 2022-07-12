import './App.css';
import { Route, BrowserRouter, Routes} from 'react-router-dom'
import NavBar from './components/navBar';
import Repo from './components/Repo';
import Contacto from './components/Contacto';
import Inicio from './components/Inicio';


function App() {
  

  return (
    <>
  
  <BrowserRouter>
      
      <div>
        <NavBar />
      </div>
        <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='Repo' element={<Repo/>}/>
                <Route path='Contacto' element={<Contacto/>}/>

        </Routes>
  
  </BrowserRouter>

    </>
  );
}

export default App;
