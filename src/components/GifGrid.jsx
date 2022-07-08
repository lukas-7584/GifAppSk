import { UseFetchGif } from '../Hooks/UseFechtGif';
import { GifItem } from './GifItem';

export const GifGrid = ({category}) => {

  const {imagenes, loading} = UseFetchGif(category)

  return (  
    <>

        <h3>{category}</h3>

          <div className="card-grid">

          {
            loading ? <h2>CARGANDO...</h2> :  
            imagenes.map(imagen =>(<GifItem key ={imagen.id} {...imagen}/>))
          }

          </div>
        </>
  )
}
