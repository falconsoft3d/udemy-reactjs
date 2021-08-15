import logo from './logo.svg';
import './App.css';
import HolaMundo, { AddHolaMundo } from './components/HolaMundo';
import DimeMarlon from './components/DimeMarlon';
import Saludar from './components/Saludar';

function App() {

  const mifuncion = () => {
    console.log("Mi funcion");
  }

  mifuncion();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar name="Marlon Falcon"/>
        <Saludar />
      </header>
    </div>
  );
}

export default App;
