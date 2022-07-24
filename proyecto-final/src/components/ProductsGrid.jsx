import { useState, useEffect } from 'react'
import { ProductItem } from './ProductItem'
import { getProducts } from './../helpers/getProducts'

export const ProductsGrid = ({ categoryName }) => {

    const [ products, setProducts ] = useState([]);

    const getProductsData = async () => {

        const newProducts = await getProducts( categoryName );
        setProducts( newProducts );
    }
        
    useEffect(() => {
        getProductsData();
    }, []);

    return (
        <>
            <h3>Categoría: { categoryName }</h3>
            <div>
                {/* {
                    products.map(( product ) => <ProductItem title={ product.title }/>)
                } */}
            </div>
        </>
    )
}
