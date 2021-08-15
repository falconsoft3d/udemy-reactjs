import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar';
import React, { useEffect, useState } from 'react';

function App() {
  const [stateCar, setStateCar] = useState(false);
  const [contar, setContar] = useState(0);

  useEffect(()=>{
    console.log("Total" + contar);
  }, [contar])

  const encenderApagar = () => {
    setStateCar(!stateCar);
    setContar(contar+1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>El coche esta {stateCar ? "Encendido" : "Apagado"} !!</h3>
        <h4>Clicks {contar}</h4>
        <button onClick={encenderApagar}>Encender / Apagar</button>
      </header>
    </div>
  );
}

export default App;
