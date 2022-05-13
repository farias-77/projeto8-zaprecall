import Question from "./Question";
import Results from "./Results";
import React from "react";

import logoPequena from "./assets/logo-pequeno.png";

export default function Main(){
    
    const cards = [
         {question:"O que é JSX?",
         answer: "uma extensão de linguagem do JavaScript",
         color: ""},
         {question:"O React é __",
         answer: "uma biblioteca JavaScript para construção de interfaces",
         color: ""},
         {question:"Componentes devem iniciar com __ ",
         answer: "letra maiúscula",
         color: ""},
         {question:"Podemos colocar __ dentro do JSX",
         answer: "expressões",
         color: ""},
         {question:"O ReactDOM nos ajuda __",
         answer: "interagindo com a DOM para colocar componentes React na mesma",
         color: ""},
         {question:"Usamos o npm para __",
         answer: "gerenciar os pacotes necessários e suas dependências",
         color: ""},
         {question:"Usamos props para __ ",
         answer: "passar diferentes informações para componentes ",
         color: ""},
         {question:"Usamos estado (state) para __",
         answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
         color: ""}
    ]

    const [answered, setAnswered] = React.useState(0);
    const [answerResults, setAnswerResults] = React.useState([]);
    
    React.useEffect(() => {
        if(answered === cards.length){
            console.log("end");
        }
    }, [answered]);

    React.useEffect(() => {
        
    }, [answerResults]);
    
    function increaseAnswered(color){      
        setAnswered(answered + 1);
        
        if(color === "green"){
            setAnswerResults([...answerResults, <div className={color}><ion-icon name="checkmark-circle" ></ion-icon></div>]);
        }else if(color === "orange"){
            setAnswerResults([...answerResults, <div className={color}><ion-icon name="help-circle" ></ion-icon></div>]);
        }else{ 
            setAnswerResults([...answerResults, <div className={color}><ion-icon name="close-circle" ></ion-icon></div>]);
        }
    }

    return(
        <>
            <div className="header">
                <img src={logoPequena} alt="logo" />
                <div className="pageTitle" >ZapRecall</div>
            </div>
            <div className="questions">
                {cards.map((card, index) => <Question index={index} question={card.question} answer={card.answer} increaseAnswered={increaseAnswered}/>)}
            </div>
            <div className="footer">
                <div className="resultsContainer">
                    <p>{answered}/{cards.length} CONCLUÍDOS</p>
                    <Results>{answerResults}</Results>
                </div>
            </div>
        </>
    )
}