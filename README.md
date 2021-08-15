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