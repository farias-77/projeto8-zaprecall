export default function Question(){
    
    function showQuestion(){
        
    }

    function turnCard(){
        
    }
    
    return(
        <div className="question">
            <div className="questionOut" onClick={showQuestion}>
                <span>Pergunta 1</span>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <div className="front hidden" onClick={turnCard}>
                <h3>O que é JSX?</h3>
                <img src="assets/setinha.png" alt="setinha"/>
            </div>
            <div className="back"></div>
        </div>
    )
}