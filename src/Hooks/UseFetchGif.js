import React, {useState, useEffect} from 'react'
import { getGif } from '../helpers/getGif';

export const UseFetchGif = (category) => {


    const [imagenes, setImagenes] = useState ( [ ] );
    const [loading, setLoanding] = useState ( true);

    const getImages = async () =>{
        const newImages =await getGif ( category)
        setImagenes(newImages);
        setLoanding(false);
    }

    useEffect(() =>{

    getImages()
    
    },  [ ] )


    return {
        imagenes,
        loading,
        }
    
}
