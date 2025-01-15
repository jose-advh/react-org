import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
import { useState } from "react";


const Formulario = () => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const manejarEnvio = (event) => {
        event.preventDefault();
        console.log("Manejando la vuelta pri xDSDDDD")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }

        console.log(datosAEnviar)
    }


    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <CampoTexto 
                    titulo="Nombres" 
                    placeholder="Ingresar Nombres" 
                    valor={nombre}
                    actualizarValor={actualizarNombre}
                    required 
                />
                <CampoTexto 
                    titulo="Puesto" 
                    placeholder="Ingresar Puesto" 
                    valor={puesto}
                    actualizarValor={actualizarPuesto}
                    required 
                />
                <CampoTexto 
                    titulo="Foto" 
                    placeholder="Ingresar enlace de Foto" 
                    valor={foto}
                    actualizarValor={actualizarFoto}
                    required 
                    />
                <ListaOpciones 
                    valor={equipo}
                    actualizarEquipo={actualizarEquipo}
                />
                <Boton texto="Crear" />
            </form>
        </section>
    )
}

export default Formulario;