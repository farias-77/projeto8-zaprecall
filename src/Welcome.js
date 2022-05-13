import logo from "./assets//logo.png";

export default function BoasVindas({setpageStatus}){
    return(
        <div className="boasVindas">            
            <img src={logo} alt="logo" />
            <div className="pageTitle" >ZapRecall</div>
            <button  onClick={() => setpageStatus(true)}>Iniciar Recall!</button>
        </div>
    )


}