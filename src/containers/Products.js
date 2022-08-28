import React from 'react';
import NavBar from './../components/NavBar';
import Footer from './../components/Footer';
import GridCardProducts from './../components/GridCardProducts'

const Products = () => {

    return (
        <div className='text-center'>
            <NavBar />
            <h2 className='p-3 m-0'>PRODUCTOS</h2>
            <GridCardProducts />
            <Footer />
        </div>
    )
}

export default Products;
