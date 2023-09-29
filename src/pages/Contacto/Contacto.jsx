import React, { useState } from 'react';
import { ContactoStyled } from './ContactoStyle';
import Button from '../../components/UI/Button/Button';

const Contacto = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario Enviado")
    };

    return(
        <ContactoStyled>
        <h2>C O N T A C T O</h2>
        <form className='form-container' onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id= "nombre" name= "nombre" value={nombre}
                onChange={(e) => setNombre(e.target.value)} />
            <label htmlFor="Apellido">Apellido:</label>
            <input type="text" id= "apellido" name= "apellido" value={apellido}
                onChange={(e) => setApellido(e.target.value)} />
             <label htmlFor="Email">Email:</label>
            <input type="text" id= "Email" name= "Email" value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)} />

                <Button radius= '15'>Enviar</Button>
            
        </form>
        </ContactoStyled>

    )
}

export default Contacto