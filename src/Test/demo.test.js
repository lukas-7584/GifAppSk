import { getSaludo, getUser } from "./Function";

describe('test demo', ()=>{

        test('test 1 Numero igual', () => {

            expect(1===1).toBe(true); 

        });

        test('test 2 Mensaje igual', () => {

            // Arrange / Inicio

            const message1 = "Hola";

            // Act/ Acciones

            const message2 = message1.trim();

            // Assert / Observar el Comportamiento

            expect (message1).toBe(message2);

        });

        test('test 3 getSaludo', () => {

            const nombre ="Lukas";

            const message = getSaludo(nombre);

            expect(message).toBe('Hola ${nombre}');


        });
        
        test('test 4 getUser', () => {

        const testUser = {
        

            uid: 'ABC4525',
            username: 'lukas_cronos'        
        
        }

        const user = getUser();

        expect(testUser).toEqual(user);



        });


});
