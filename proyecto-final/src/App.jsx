import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { ProductsGrid } from './components/ProductsGrid';

import './App.css'

export const App = () => {

  const [ category, setCategory ] = useState('Iphone');

  const onAddCategory = ( newCategory ) => {
    setCategory( newCategory );
  }

  return (
    <>
      <h1>PRODUCTOS</h1>

      <AddCategory onNewCategory={ e => onAddCategory( e ) }  />

      <ProductsGrid categoryName={ category } />
    </>
  )
}