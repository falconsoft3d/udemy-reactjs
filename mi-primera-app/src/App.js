import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar';

function App() {

  const userName = "Marlon Falcon";
  const edad = 41;
  const user = {
    name: "Marlon",
    edad: 41
  }

  const saludarFn = (name) => {
     console.log("Hola " + name)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar userInfo={user} saludarFn={saludarFn}/>
      </header>
    </div>
  );
}

export default App;
