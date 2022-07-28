import {Item} from './Item'

export const GridItems = ({products, divStyle}) => {
    return (
        <div className='d-flex flex-wrap justify-content-center'>
        {
            products.map((product) => {
            return (
                <Item product={product}/>
            )})
        }
        </div>
    )
}
