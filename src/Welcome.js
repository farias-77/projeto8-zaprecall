export default function BoasVindas({setpageStatus}){
    return(
        <div className="boasVindas">            
            <img src="assets/logo.png" alt="logo" />
            <div className="pageTitle" >ZapRecall</div>
            <button  onClick={() => setpageStatus(true)}>Iniciar Recall!</button>
        </div>
    )


}