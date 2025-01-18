import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba"
import { LiaKeyboard } from "react-icons/lia"

const Equipo = (props) => {

    // Destructuración 

    const { colorSecundario, colorPrimario, titulo, id} = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props
    const estiloTitulo = { borderColor: colorPrimario }
    const estiloSection = { backgroundColor: hexToRgba(colorPrimario, 0.2) }

    return <>
    { 
        colaboradores.length > 0 &&
        <section className="equipo" style={estiloSection}>
            <input 
                type="color"
                className="input-color"
                value={colorPrimario}
                onChange={(evento) => {
                    actualizarColor(evento.target.value, id)
                }}
            />
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador, index) => <Colaborador 
                        datos={colaborador} 
                        key={index} 
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                        />
                    )
                }
            </div>
        </section>
    }
    </>
}

export default Equipo