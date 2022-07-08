
import { useState } from 'react';
import { useEffect } from 'react';
import { getGif } from '../helpers/getGif';
import { GifItem } from './GifItem';

export const GifGrid = ({category}) => {

  const [imagenes, setImagenes] = useState ( [ ] );

  const getImages = async () =>{
    const newImages =await getGif ( category)
    setImagenes(newImages);
  }

useEffect(() =>{

  getImages()
  
},  [ ] )


  return (  
    <>

        <h3>{category}</h3>

          <div className="card-grid">
            {
              imagenes.map(imagen => <GifItem key={imagen.id} {...imagen}/> )
            }
          </div>
        </>
  )
}
