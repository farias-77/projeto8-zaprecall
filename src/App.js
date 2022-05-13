import Welcome from "./Welcome";
import Main from "./Main";
import React from "react";

export default function App(){ 
    
    const [pageStatus, setpageStatus] = React.useState(false);
    
    return (
        pageStatus ? <Main /> : <Welcome setpageStatus={setpageStatus} />
    )
}