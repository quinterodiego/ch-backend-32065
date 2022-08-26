import React from 'react'
import {useFetchProducts} from './../hooks/useFetchProducts';
import CardProduct from './CardProduct'

const GridCardProducts = () => {
    const {products} = useFetchProducts();
    return (
        <>
            {
                products.map(p => <CardProduct title={p.title} thumbnail={p.thumbnail} price={p.price}/>)
            }
        </>
    )
}

export default GridCardProducts;
