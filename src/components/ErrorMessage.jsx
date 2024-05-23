import React from 'react'

const ErrorMessage = () => {
    return (
        <div>
            <h4 style={{ color: "red" }}>
            “Por favor chequea que la información sea correcta”
            </h4>
            <h5>
                La marca debe tener al menos 3 caracteres.
            </h5>
            <h5>  
                El modelo debe tener al menos 6 caracteres.
            </h5>
        </div>
    )
}

export default ErrorMessage