import './App.css';
import { useState } from 'react';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true)

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div>
      <Header />
      { mostrarFormulario && <Formulario /> }
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
