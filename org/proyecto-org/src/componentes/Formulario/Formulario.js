import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
import { useState } from "react";

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const { registrarColaborador } = props

    const manejarEnvio = (event) => {
        event.preventDefault();
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
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
                    equipos={props.equipos}
                />
                <Boton texto="Crear" />
            </form>
        </section>
    )
}

export default Formulario;