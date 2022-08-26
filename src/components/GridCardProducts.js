import React from 'react'
import {useFetchProducts} from './../hooks/useFetchProducts';
import CardProduct from './CardProduct'

const GridCardProducts = () => {
    const {products} = useFetchProducts();
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {
                products.map(p => <CardProduct title={p.title} thumbnail={p.thumbnail} price={p.price}  key={p.title}/>)
            }
        </div>
    )
}

export default GridCardProducts;
