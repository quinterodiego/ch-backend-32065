import React from 'react'

const CardProduct = ({title, thumbnail, price}) => {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={thumbnail} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{price}</p>
                <a href="#" className="btn btn-primary">Comprar</a>
            </div>
        </div>
    )
}

export default CardProduct;
