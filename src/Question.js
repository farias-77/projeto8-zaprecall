import React from "react";

export default function Question({question, answer, index}){    
    const [cardClasses, setCardClasses] = React.useState("card");
    const [frontClasses, setFrontClasses] = React.useState("front hidden");
    const [backClasses, setBackClasses] = React.useState("back hidden");
    const [questionClasses, setQuestionClasses] = React.useState("question");
    
    function showQuestion(){
       setQuestionClasses("question hidden");
       setFrontClasses("front height130");
       setCardClasses("card height130");
    }

    function turnCard(){
        setFrontClasses("front hidden");
        setBackClasses("back height130");
        setCardClasses("card height130");
    }

    function processResult(color){
        alert(color);
    }
    
    return(
        <div className={cardClasses}>
            <div className={questionClasses} onClick={showQuestion}>
                <h4>Pergunta {index + 1}</h4>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <div className={frontClasses} onClick={turnCard}>
                <h3>{question}</h3>
                <img src="assets/setinha.png" alt="setinha"/>
            </div>
            <div className={backClasses}>
                <h3>{answer}</h3>
                <div className="results">
                    <div className="result red" onClick={() => processResult('red')}>Não lembrei</div>
                    <div className="result orange" onClick={() => processResult('orange')}>Quase não lembrei</div>
                    <div className="result green" onClick={() => processResult('green')}>Zap!</div>
                </div>
            </div>
        </div>
    )
}