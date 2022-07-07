import React,{useState} from 'react'
import './App.css';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

function App() {

  const [categories, setCategories] = useState( [ ] );

  const handleAddCategory = (value) => {
    setCategories( [value, ...categories] )
  }
  return (
    <>
        {/* Titulo---------- */}
        <div>
          
          <h1>GifApp</h1>
        
        {/* <ul>
            <li>INICIO</li>
            <li>INICIO</li>
            <li>INICIO</li>
            <li>INICIO</li>
            <li>INICIO</li>
        </ul> */}
        
        </div>
      

      {/* Input---------- */}

      <AddCategory addCategory={handleAddCategory} />

      {/* Listado---------- */}

      
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      
    </>
  );
}

export default App;
