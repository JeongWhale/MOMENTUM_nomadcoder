const questionForm = document.querySelector(".js-question")
const questionInput = document.querySelector(".js-question__input")

const h4Id = "confirm__title"
    
function addEventQuestion(text){
    const h4 = document.createElement("h4")
    // h4 생성
    questionForm.appendChild(h4);
    h4.id=h4Id;
    h4.innerText=`"Hello ${text} lover"`
}


function handleEnter(event){
    event.preventDefault();
    const currentValue=questionInput.value;
    addEventQuestion(currentValue);
    //딜리트라인
    const btn = event.target;
    questionForm.removeChild(questionInput);
}

function init(){
    questionForm.addEventListener("submit", handleEnter)
}

init();