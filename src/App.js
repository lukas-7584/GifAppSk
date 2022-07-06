import React,{useState} from 'react'
import './App.css';

function App() {

  const [categorias, setCategorias] = useState( [ 'Dragon Ball', 'One Piece'] );

  const handleAddCategory = () => {
    setCategorias([...categorias, 'Super Esferas del Dragon'])
  }
  return (
    <>
        {/* Titulo---------- */}

      <h1>GifApp</h1>

      {/* Input---------- */}


      {/* Listado---------- */}

      <button onClick={(e) =>handleAddCategory(e)}>Agregar</button>

      <ol>
        {
          categorias.map(category =><li key={category}>{category}</li>)
        }
      </ol>
    </>
  );
}

export default App;
