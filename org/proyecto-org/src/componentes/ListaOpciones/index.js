import "./ListaOpciones.css";

const ListaOpciones = (props) => {

    const manejarEquipo = (e) => {
        props.actualizarEquipo(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div className="lista-opciones">
            <label>Equipos</label>
            <select value={props.valor} onChange={manejarEquipo}>
                <option value="" disabled defaultValue="" hidden>Seleccionar equipo..</option>
                {
                    props.equipos.map((equipo, index) => {
                       return <option key={index} value={equipo}>{equipo}</option>
                    })
                }
            </select>
        </div>
    )
}

export default ListaOpciones;