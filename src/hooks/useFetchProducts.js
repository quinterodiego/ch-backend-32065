import {useState, useEffect} from 'react';
import {getProducts} from '../helpers/getProducts'

export const useFetchProducts = () => {

    const [products, setProducts] = useState([]);

    const getProductsAll = async () => {
        const newProducts = await getProducts();
        setProducts(newProducts);   
    }

    useEffect(() => {
        getProductsAll();
    }, [])

    return {
        products
    }
}