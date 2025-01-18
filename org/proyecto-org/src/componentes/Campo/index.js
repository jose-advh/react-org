import "./Campo.css";

const Campo = (props) => {
    
    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    const { type = "text" } = props
    console.log(type)

    const placheholderModificado = `${props.placeholder}...`;
    return (
        <div className={`campo campo-${type}`}>
            <label>{props.titulo}</label>
            <input 
                placeholder={placheholderModificado} 
                required={props.required} 
                value={props.valor}
                onChange={manejarCambio}
                type={type}
            />
        </div>
    )
}

export default Campo;