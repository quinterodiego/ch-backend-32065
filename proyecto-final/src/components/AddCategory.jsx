import { useState } from 'react'

export const AddCategory = () => {

    const [ inputValue, setInputValue ] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length <= 1 ) return;

        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <>
            <h2>Ingrese una categoría</h2>
            <form onSubmit={ onSubmit }>
                <input 
                    type="text" 
                    value={ inputValue }
                    onChange={ onInputChange }
                />
            </form>

        </>
    )
}
