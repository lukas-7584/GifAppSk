import React from 'react';
import { useState } from 'react';
import{ render, screen, fireEvent, renderHook} from '@testing-library/react';

import Inicio from '../../components/Inicio';


describe('Test en <Inicio/>', () => { 

    test('Comprobrando esta inicial', () => { 
        render (<Inicio/>)

        const  h3 = screen.queryByRole('heading',{level: 3})

        expect(h3).toBeNull()

            screen.debug()

        })

        // Verificar si cambia el estado de  categorias


        test('Cambios estado categorias', () => { 

            render (<Inicio/>)

            const input = screen.getByRole('textbox')

            const form = screen.getByRole('form')

            fireEvent.change(input, { target: { value: 'Dragon Ball' } })

            fireEvent.submit(form)

            screen.debug()

            const  h3 = screen.queryByRole('heading',{level: 3})

            expect(h3).toBeTruthy()

            })



            test('Should render Reset button', ()=>{

                

                
            })
            




    })