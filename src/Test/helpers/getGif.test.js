import { getGif } from "../../helpers/getGif"

describe('test en getGif', () => { 

    test('Debe retornar el arreglo de gif', async () => { 

                const gif = await getGif('Dragon Ball')


                expect(gif.length).toBeGreaterThan(0);

                expect (gif[0] ).toEqual({
                    id:  expect.any(String),
                    title:  expect.any(String),
                    url: expect.any(String),
                })


        }) 
});