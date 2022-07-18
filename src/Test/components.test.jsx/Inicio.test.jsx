import React from 'react';
import { useState } from 'react';
import{ render, screen, fireEvent, renderHook} from '@testing-library/react';

import Inicio from '../../components/Inicio';


describe('Test en <Inicio/>', () => { 

    test('render content', () => { 
        render (<Inicio/>)

        expect(screen.getByRole('heading') ).toHaveTextContent('GIFAPP');

        })

        // Verificar si cambia el estado de  categorias

        test('Test   verificar el estado de categories', () => {


            // const {result} = renderHook( () => Inicio());
    
            // console.log(result);
    
            // const {categories} = result.current;
    
            // console.log(categories);
    
            // expect.arrayContaining (categories)

        });
    

        // Testear funcionalidades de creadas enel TP 1, reset y eliminar categoria






    })