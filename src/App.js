import React,{useState} from 'react'
import './App.css';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import {BrowserRouter as Router, swich, Route} from 'react-router-dom'
import NavBar from './components/navBar';

function App() {

  const [categories, setCategories] = useState( [ ] );

  const handleAddCategory = (value) => {
    setCategories( [value, ...categories] )
  }

  const handleOnRemove = index => {
    const value = [...categories];
    value.splice(index, 1);
    setCategories(value);
  };
  
  const handleRemoveAll = () => {
    setCategories(categories.filter((category) => category !== category));
  };
  

  return (
    <>
        {/* Titulo---------- */} 
        

      <Router>
        <NavBar/>
      </Router>
      
        
        <div className='titulo container'>

          
              <h1>GIFAPP</h1>
        
        </div>      

      {/* Input---------- */}

      <AddCategory addCategory={handleAddCategory} /><br/>
      

      {/* Listado---------- */}
      <button className="reset" onClick={handleRemoveAll}>Reset</button> 
      
      {categories.map((category) => (
        <><button className="delete" onClick={handleOnRemove}>ELIMINAR</button><GifGrid className="categories" key={category} category={category}/></>
        // <GifGrid key={category} category={category} />
      ))}

    </>
  );
}

export default App;
