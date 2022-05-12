import React from "react"

export default function IonIcon({color}){

    const [ionName, setIonName] = React.useState("close-circle");

    if(color === "red"){
        setIonName("close-circle");
    }else if(color === "orange"){
        setIonName("help-circle")
    }else{
        setIonName("checkmark-circle")
    }
    
    return (
        <div className={color}><ion-icon name={ionName} ></ion-icon></div>
    )
}