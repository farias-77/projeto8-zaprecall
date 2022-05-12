import IonIcon from "./IonIcon";

export default function Results({answerResults}){

    console.log(answerResults)

    return (
         <div className="answerResults">
            {/* {answerResults.map(color => <IonIcon color={color} />)} */}
            <div className="red"><ion-icon name="close-circle" ></ion-icon></div>
        </div>
    )
}