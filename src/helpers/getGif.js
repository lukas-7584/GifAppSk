    export const getGif = async (category) => {
    
        const API_KEY = "yWIdPJtwjfdHOjorbB14jy8dpIHp8V3c";
        
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=${50}&offset=0&rating=g&lang=en`;

        const resp = await fetch(url);

        const { data } = await resp.json();

        const gifs = data.map(img => (
            {
                id: img.id,
                title: img.title,
                url: img.images.original.url
            }
        ))
        


    return gifs;
    };