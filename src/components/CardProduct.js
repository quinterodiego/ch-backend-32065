import React from 'react'

const CardProduct = ({title, thumbnail, price}) => {
    const priceFormat = price.toLocaleString('es-ar', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2
    })
    return (
        <div className="card m-2" style={{width: '18rem'}}>
            <img src={thumbnail} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{priceFormat}</p>
                <a href="#" className="btn btn-primary">Comprar</a>
            </div>
        </div>
    )
}

export default CardProduct;
