import {render, screen} from '@testing-library/react';
import { GifGrid } from '../../components/GifGrid';
import { UseFetchGif } from '../../Hooks/UseFetchGif';

jest.mock('../../Hooks/UseFetchGif')

describe('Test en <GifGrid/>', () => { 

    const category= 'One Punch'

    test('Debe mostar inicialmente  el Cargando', () => { 

    UseFetchGif.mockReturnValue({
        imagenes: [ ],
        loading : true
    })

    render(<GifGrid  category={category} /> )
    
    expect( screen.getByText( 'CARGANDO...' ).innerHTML ).toBe( 'CARGANDO...' )
    
    expect( screen.getByText( category ).innerHTML ).toBe(category);

    expect( screen.getByText(category))  


    });
    

    test('Debe mostrar items,cuando se muestran la imagenes en sueFetchGif', () => { 

        UseFetchGif.mockReturnValue({
            imagenes:[
                {id: 'ACD456', title: 'Saitman',url:'https://onepunch/saitman.jpg'},
                {id: 'JKM865', title: 'Vegeta',url:'https://onepunch/vegeta.jpg'},
                {id: 'ALQ250', title: 'Deadpool',url:'https://onepunch/deadpool.jpg'}
            ],
            loading: false,
        })

        render(<GifGrid  category={category}/>)

        expect (screen.getAllByRole('img').length).toBe(3)


    })


})