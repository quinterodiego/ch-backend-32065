import React from 'react'

const FormNewProduct = () => {
    return (
        <form className='w-50 m-auto' id='formProducts'>
            <div className="mb-3">
                <label for="title" className="form-label">Nombre</label>
                <input type="text" className="form-control" name="title" />
            </div>
            <div className="mb-3">
                <label for="description" className="form-label">Descripción</label>
                <input type="text" className="form-control" name="description" />
            </div>
            <div className="mb-3">
                <label for="thumbnail" className="form-label">URL Imagen</label>
                <input type="text" className="form-control" name="thumbnail" />
            </div>
            <div className="mb-3">
                <label for="price" className="form-label">Precio</label>
                <input type="text" className="form-control" name="price" />
            </div>
            <div className="mb-3">
                <label for="code" className="form-label">Código</label>
                <input type="text" className="form-control" name="code" />
            </div>
            <div className="mb-3">
                <label for="stock" className="form-label">Stock</label>
                <input type="text" className="form-control" name="stock" />
            </div>
            <button type="submit" className="btn btn-primary">Cargar</button>
        </form>
    )
}

export default FormNewProduct;