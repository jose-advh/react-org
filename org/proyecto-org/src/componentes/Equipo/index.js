import "./Equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) => {

    // Destructuración 

    const { colorSecundario, colorPrimario, titulo} = props.datos
    const { colaboradores, eliminarColaborador } = props
    const estiloTitulo = { borderColor: colorPrimario }
    const estiloSection = { backgroundColor: colorSecundario }

    return <>
    { 
        colaboradores.length > 0 &&
        <section className="equipo" style={estiloSection}>
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador, index) => <Colaborador 
                        datos={colaborador} 
                        key={index} 
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        />
                    )
                }
            </div>
        </section>
    }
    </>
}

export default Equipo