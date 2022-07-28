const divStyle = {
    width: '18rem'
  }

export const Item = ({product}) => {
    return (
        <div className="card m-2" style={divStyle}>
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body bg-secondary text-white">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Comprar</a>
            </div>
        </div>
    )
}
