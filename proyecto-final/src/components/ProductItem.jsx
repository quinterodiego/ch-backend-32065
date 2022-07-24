export const ProductItem = ({ id, title, price, thumbnail }) => {
    return (
        <div>
            <img src={ thumbnail } alt={ title } />
            <p>{ title }</p>
            <p>{ price }</p>
        </div>
    )
}
