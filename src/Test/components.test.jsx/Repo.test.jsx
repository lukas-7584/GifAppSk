import{render,screen} from '@testing-library/react'

import Repo from '../../components/Repo'


describe('Repo <Repo/>', () => { 

    test('testing del repo', () => { 
        render(<Repo/>)
        })

        test('render content', () => { 
            render (<Repo/>)
    
            expect(screen.getByRole('heading') ).toHaveTextContent( 'LINK AL REPOSITORIO' );
    
            })
    

})