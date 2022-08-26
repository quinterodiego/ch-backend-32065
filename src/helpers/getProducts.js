export const getProducts = async () => {
    const url = `http://localhost:8080/productos`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            accept: 'application/json',
        },});
        const data = await response.json();
        const products = data.map(p => ({
        id: p.id,
        title: p.title,
        thumbnail: p.thumbnail,
        price: p.price
    }))

    return products;
}