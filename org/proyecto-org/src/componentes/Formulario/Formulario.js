import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
import { useState } from "react";

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador, crearEquipo } = props

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

    const manejarNuevoEquipo = (event) => {
        event.preventDefault()
        crearEquipo({ titulo, colorPrimario: color })
    }

    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Campo 
                    titulo="Nombres" 
                    placeholder="Ingresar Nombres" 
                    valor={nombre}
                    actualizarValor={actualizarNombre}
                    required 
                />
                <Campo 
                    titulo="Puesto" 
                    placeholder="Ingresar Puesto" 
                    valor={puesto}
                    actualizarValor={actualizarPuesto}
                    required 
                />
                <Campo 
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
            <form onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formulario para crear el Equipo.</h2>
                <Campo 
                    titulo="Titulo" 
                    placeholder="Ingresar Titulo" 
                    valor={titulo}
                    actualizarValor={actualizarTitulo}
                    required 
                />
                <Campo 
                    titulo="Color" 
                    placeholder="Ingresar Color en hex" 
                    valor={color}
                    actualizarValor={actualizarColor}
                    type="color"
                    required 
                />
                <Boton texto="Registrar equipo" />
            </form>
        </section>
    )
}

export default Formulario;