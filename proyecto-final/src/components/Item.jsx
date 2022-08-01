const divStyle = {
    width: '18rem'
}

export const Item = ({product}) => {
    return (
        <div className="card m-2" style={divStyle}>
            <img src={product.thumbnail} className="card-img-top" alt="..." />
            <div className="card-body bg-secondary text-white">
                <h5 className="card-title">{product.name}</h5>
                {/* <p className="card-text">{product.description}</p> */}
                <div>
                    <p className="h5">${new Intl.NumberFormat('es-ES').format(product.offers.price)}</p>
                    <a href="#" className="btn btn-primary">Comprar</a>
                </div>
            </div>
        </div>
    )
}
