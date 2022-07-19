import React,{useState} from 'react';
import '../App.css';
import { AddCategory } from '../components/AddCategory';
import { GifGrid } from '../components/GifGrid';

const Inicio = () => {

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

<div className='titulo container'>


<h1>GIFAPP</h1>

</div>      

{/* Input---------- */}

<AddCategory addCategory={handleAddCategory} /><br/>


{/* Listado---------- */}
<button className="reset" onClick={handleRemoveAll} data-testid="reset">RESET</button> 
<button className="delete" onClick={handleOnRemove} data-testid="eliminar">ELIMINAR BUSQUEDA </button>

{categories.map((category) => (
<><GifGrid className="categories" key={category} category={category}/></>
// <GifGrid key={category} category={category} />
))}

    </>
)
}

export default Inicio