import React, { useState } from 'react'

export const AddCategory = ( {addCategory} ) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInpuntChange = ({ target}) => { 
    setInputValue(target.value)    
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        if(inputValue.trim().length < 1 )return;

        addCategory( inputValue.trim() )

        setInputValue('')

    }

    return (

        <form onSubmit={handleSubmit} >
                    <input placeholder='Buscar Gif' type='text' value={inputValue}  onChange={handleInpuntChange}/>  
                    <button type="submit" className='bton'>
                            <div style={{display: "flex"}}>
                                
                                <img src="https://giphy.com/static/img/search-icon.svg" className='picture' />
                                
                            </div>
    
                    </button>      
    </form>

    )}
