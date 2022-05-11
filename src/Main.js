import Question from "./Question";

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
    
    
    
    return(
        <>
            <div className="header">
                <img src="assets/logo-pequeno.png" alt="logo" />
                <div className="pageTitle" >ZapRecall</div>
            </div>
            <div className="questions">
                {cards.map((card, index) => <Question question={card.question} answer={card.answer} index={index}/>)}
            </div>
            <div className="footer">
                0/{cards.length} CONCLUÍDOS
            </div>
        </>
    )
}