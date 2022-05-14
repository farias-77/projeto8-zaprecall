import Question from "./Question";
import Results from "./Results";
import FinalMessage from "./FinalMessage";
import React from "react";

import happy from "./assets/party 2.png";
import sad from "./assets/sad 7.png";
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
    ];

    

    const [answered, setAnswered] = React.useState(0);
    const [answerResults, setAnswerResults] = React.useState([]);
    const [wrongAnswer, setWrongAnswer] = React.useState(false);
    const [message, setMessage] = React.useState([]);
    
    React.useEffect(() => {
        if(answered === 0){
            console.log("sort")
            cards.sort(comparador);
        }
        
        if(answered === cards.length && wrongAnswer){
            setMessage([...message, <div className="finalMessageText"><h5><img src={sad} alt="emoji triste" />   Putz...</h5><p>Ainda faltam alguns...<br />Mas não desanime!</p></div>]);
        }else if(answered === cards.length){
            setMessage([...message, <div className="finalMessageText"><h5><img src={happy} alt="emoji feliz" />   Parabéns!</h5><p>Você não esqueceu de nenhum flashcard!</p></div>]);
        }
    }, [answered]);
    
    function increaseAnswered(color){      
        setAnswered(answered + 1);
        
        if(color === "green"){
            setAnswerResults([...answerResults, <div className={color}><ion-icon name="checkmark-circle" ></ion-icon></div>]);
        }else if(color === "orange"){
            setAnswerResults([...answerResults, <div className={color}><ion-icon name="help-circle" ></ion-icon></div>]);
        }else{ 
            setAnswerResults([...answerResults, <div className={color}><ion-icon name="close-circle" ></ion-icon></div>]);
            setWrongAnswer(true);
        }
    }

    function comparador(){
        return Math.random() - 0.5;
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
                    <FinalMessage cardsLength = {cards.length} answered = {answered}>{message}</FinalMessage>
                    <p>{answered}/{cards.length} CONCLUÍDOS</p>
                    <Results>{answerResults}</Results>
                </div>
            </div>
        </>
    )
}