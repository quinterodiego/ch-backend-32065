const addFormListener = () => {
    const formProducts = document.getElementById('formProducts');
    formProducts.onsubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(formProducts);
        const data = Object.fromEntries(formData.entries());
        await fetch('http://localhost:8080/api/productos', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json' 
            }
        });
        formProducts.reset();
    }
}

window.onload = () => {
    addFormListener();
}