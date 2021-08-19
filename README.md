# udemy-reactjs
# Crear una Aplicación de ReactJS
```
$ npx create-react-app mi-primera-app
$ cd mi-primera-app
$ npm start
http://localhost:3000/
```

# Componente que se ejecuta
```
src/App.js
```

# Crear un Componente
```
src/components/HolaMundo.js
```

```
import React from "react";

function HolaMundo() {
    return(
        <div>
            <h1>Hola Mundo</h1>
            <h2>Marlon Falcón</h2>
        </div>
    )
}
export default HolaMundo;
```

```
App.js
import HolaMundo from './components/HolaMundo';
<HolaMundo/>
```

# Props
# Se utiliza para pasar información entre componentes
```
import React from "react"

export default function Saludar(props){
    return(
        <div>
            <h2>Hola {props.name} </h2>
        </div>
    )
}
```

```
import Saludar from './components/Saludar';
<Saludar name="Marlon Falcon"/>
```

# props con objetos
```
import Saludar from './components/Saludar';
function App() {

  const userName = "Marlon Falcon";
  const edad = 41;
  const user = {
    name: "Marlon",
    edad: 41
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar userInfo={user}/>
      </header>
    </div>
  );
}
```

```
import React from "react"

export default function Saludar(props){
    return(
        <div>
            <h2>Hola {props.userInfo.name}, tiene {props.userInfo.edad} </h2>
        </div>
    )
}
```

# props con funciones
```
import React from "react"

export default function Saludar(props){

    return(
        <div>
            <button onClick={() => props.saludarFn(props.userInfo.name)}>Saludar</button>
        </div>
    )
}
```

```
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
```

# Hook de estado userState
# Un estado es reactivo
```
import React, { useState } from 'react';

function App() {
  const [stateCar, setStateCar] = useState(false);

  const encenderApagar = () => {
    setStateCar(!stateCar);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>El coche esta {stateCar ? "Encendido" : "Apagado"} !!</h3>
        <button onClick={encenderApagar}>Encender / Apagar</button>
      </header>
    </div>
  );
}

export default App;
```

# Hook de efecto useEffect
# Este hook se ejecuta cuando el componente ya esta montado
```
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
``` 

``` 
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count , setCount ] = useState(0);

  return (
    <div className="App">
      <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <button onClick={() => setCount(0)}>
        Reiniciar
      </button>


    </div>
    </div>
  );
}

export default App;
``` 
