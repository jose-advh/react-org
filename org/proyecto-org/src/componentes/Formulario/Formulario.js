import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";


const Formulario = () => {

    const manejarEnvio = (event) => {
        event.preventDefault();
        console.log("Manejando la vuelta pri xDSDDDD")
    }

    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <CampoTexto titulo="Nombres" placeholder="Ingresar Nombres" required />
                <CampoTexto titulo="Puesto" placeholder="Ingresar Puesto" required />
                <CampoTexto titulo="Foto" placeholder="Ingresar enlace de Foto" required />
                <ListaOpciones />
                <Boton texto="Crear" />
            </form>
        </section>
    )
}

export default Formulario;