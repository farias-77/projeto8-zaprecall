export default function BoasVindas({setChangePage}){
    return(
        <div className="boasVindas">            
            <img src="assets/logo.png" alt="logo" />
            <div className="pageTitle" >ZapRecall</div>
            <button  onClick={() => setChangePage(true)}>Iniciar Recall!</button>
        </div>
    )


}