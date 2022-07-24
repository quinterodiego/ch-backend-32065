
export const getProducts = ( category ) => {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '91fe280ff3msh8eb0e47b11fc841p159558jsne62e37489ee5',
                'X-RapidAPI-Host': 'amazon23.p.rapidapi.com'
            }
        };
        
        const { result } = fetch(`https://amazon23.p.rapidapi.com/product-search?query=${category}&country=US`, options);

        return result;
}
