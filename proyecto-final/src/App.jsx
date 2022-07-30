import {GridItems} from './components/GridItems'
import {products} from './data/products';
import './App.css'

export const App = () => {

  return (
    <>
      <div className='bg-dark'>
        <div className='container'>
          <h1 className='text-center text-white p-3'>TECLADOS</h1>
          <GridItems products={products}/>
        </div>
      </div>
    </>
  )
}