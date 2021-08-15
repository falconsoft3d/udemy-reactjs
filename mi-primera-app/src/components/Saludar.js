import React from "react"

export default function Saludar(props){
    return(
        <div>
            <h2>Hola {props.userInfo.name}, tiene {props.userInfo.edad} </h2>
        </div>
    )
}