const divStyle = {
    width: '18rem'
}

export const Item = ({product}) => {
    return (
        <div className="card m-2" style={divStyle}>
            <img src={product.thumbnail} className="card-img-top" alt="..." />
            <div className="card-body bg-secondary text-white d-flex flex-column justify-content-between">
                <p className="card-title h5">{product.name}</p>
                {/* <p className="card-text">{product.description}</p> */}
                <div className="d-flex justify-content-between align-items-center">
                    <p className="h5 m-0 text-dark bg-white p-2">${new Intl.NumberFormat('es-ES').format(product.offers.price)}</p>
                    <a href="#" className="btn btn-primary"><i class="fa-solid fa-cart-plus"></i></a>
                </div>
            </div>
        </div>
    )
}
