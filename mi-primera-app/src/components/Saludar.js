import React from "react"

export default function Saludar(props){

    return(
        <div>
            <button onClick={() => props.saludarFn(props.userInfo.name)}>Saludar</button>
        </div>
    )
}