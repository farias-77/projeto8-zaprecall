import Welcome from "./Welcome";
import Main from "./Main";
import React from "react";

export default function App(){ 
    
    const [changePage, setChangePage] = React.useState(false);
    
    return (
        changePage ? <Main /> : <Welcome setChangePage={setChangePage} />
    )
}