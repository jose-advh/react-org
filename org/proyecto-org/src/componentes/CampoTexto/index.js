import "./CampoTexto.css";

const CampoTexto = (props) => {
    const placheholderModificado = `${props.placeholder}...`;
    return (
        <div className="campo-texto">
            <label>{props.titulo}</label>
            <input placeholder={placheholderModificado} required={props.required} />
        </div>
    )
}

export default CampoTexto;