import "./CampoTexto.css";

const CampoTexto = (props) => {
    
    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }
    const placheholderModificado = `${props.placeholder}...`;
    return (
        <div className="campo-texto">
            <label>{props.titulo}</label>
            <input 
                placeholder={placheholderModificado} 
                required={props.required} 
                value={props.valor}
                onChange={manejarCambio}
            />
        </div>
    )
}

export default CampoTexto;