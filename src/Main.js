import Question from "./Question";

export default function Main(){
    return(
        <>
            <div className="header">
                <img src="assets/logo-pequeno.png" alt="logo" />
                <div class="pageTitle" >ZapRecall</div>
            </div>
            <div class="body">
                <Question />
            </div>
            {/* <Footer /> */}
        </>
    )
}