import React from "react"

export default function FinalMessage(props){    

    const [classes, setClasses] = React.useState("");

    React.useEffect(() => {
        if(props.answered === props.cardsLength){
            setClasses("finalMessage");
        }
    }, [props.answered])

    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}