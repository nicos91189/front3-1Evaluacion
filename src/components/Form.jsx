import { useState } from "react";
import Card from "./Card";
import ErrorMessage from "./ErrorMessage";

const Form = () => {
    const [auto, setAuto] = useState({
        marca: "",
        modelo: "",
    });

    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const regexmarca = /^(?!\s)[\s\S]{3,20}$/;
        if (auto.modelo.length > 6 && regexmarca.test(auto.marca)) {
           setShow(true);
           setError(false);
         } else {
          setError(true);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Marca:</label>
                <input
                    type='text'
                    onChange={(event) =>
                        setAuto({ ...auto, marca: event.target.value })
                    } 
                />
                <br />
                <label>Modelo:</label>
                <input
                    type='text'
                    onChange={(event) =>
                        setAuto({ ...auto, modelo: event.target.value })
                    }
                />
                <br />
                <button>Cargar</button>

                {show ? <Card auto={auto} /> : null}
                {error && <ErrorMessage />}
            </form>

        </>
    );
};

export default Form;