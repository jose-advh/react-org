import { useState } from "react"
import "./MiOrg.css"

const MiOrg = () => {

    const manejarClick = () => {
        console.log("Mostrar/Ocultar Elemento mi bro")
    }

    return (
        <section className="orgSection">
            <h3 className="title">Mi Organización</h3>
            <img src="/imgs/add.png" onClick={manejarClick} />
        </section>
    )
}

export default MiOrg