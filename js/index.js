/* String
const what = "JeongWhale";
console.log(what);
*/

/* Boolean
const wat = true;
*/

/* Number
const wat = 666;
*/

/* Float
const wat = 55.1;
*/

const calculator = {
    plus: function(a, b){
        return a+b;
    },

    minus: function(a, b){
        return a-b;
    },

    multiply: function(a,b){
        return a*b;
    },

    division: function(a,b){
        return a/b;
    },

    squareroot: function(a,b){
        return a**b;
    }
}

const plus = calculator.plus(5, 5)
const minus = calculator.minus(5, 5)
const multiply = calculator.multiply(5, 5)
const division = calculator.division(5, 5)
const squareroot = calculator.squareroot(5, 5)

key=[plus,minus,multiply,division,squareroot];

for (i=0; i<5; i++){
    console.log(key[i]);
};

const title = document.getElementById("title");
console.log(title);


/*
title.innerHTML = "Hi! From JS!"
title.style.backgroundColor="white"; 

function handleResize(){
    console.log("I have been resized");
}


const ClickedClass="clicked";

function handleClick(){
    title.classList.toggle(ClickedClass);
}

function init(){
    title.addEventListener("click", handleClick);
}

init(); 

window.addEventListener("resize", handleResize);
*/