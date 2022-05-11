import React from "react";

export default function Question(){
    
    const [frontClasses, setFrontClasses] = React.useState("front hidden");
    const [backClasses, setBackClasses] = React.useState("back hidden");
    const [questionClasses, setQuestionClasses] = React.useState("question");
    
    function showQuestion(){
       setQuestionClasses("question hidden");
       setFrontClasses("front");
    }

    function turnCard(){
        setFrontClasses("front hidden");
        setBackClasses("back");
    }

    function processResult(){
        alert('chegou');
    }
    
    return(
        <div className="card">
            <div className={questionClasses} onClick={showQuestion}>
                <span>Pergunta 1</span>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <div className={frontClasses} onClick={turnCard}>
                <h3>O que é JSX?</h3>
                <img src="assets/setinha.png" alt="setinha"/>
            </div>
            <div className={backClasses}>
                <h3>JSX é uma sintaxe para escrever HTML dentro do JS</h3>
                <div className="results">
                    <div className="result red" onClick={() => processResult('red')}>Não lembrei</div>
                    <div className="result orange" onClick={() => processResult('orange')}>Quase não lembrei</div>
                    <div className="result green" onClick={() => processResult('green')}>Zap!</div>
                </div>
            </div>
        </div>
    )
}