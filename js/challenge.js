const counter = document.getElementById("counter");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const heartButton = document.getElementById("heart");
const pauseButton = document.getElementById("pause");
const commentsList = document.getElementsByClassName("comments")[0];
const submit = document.getElementById("submit")
let counterPaused = false;
let count = 0;


document.addEventListener("DOMContentLoaded", function() {
    setInterval(incrementCounter, 1000);
})

function incrementCounter() {
    if(counterPaused == false) {
        counter.textContent++; 
    }
}



updateDisplay();

plusButton.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

minusButton.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    counter.innerHTML = count;
};

let timer = 0
let likeCount = 0

heartButton.addEventListener("click", function() {
    likeTimer();
})


function likeTimer(){
    likeCount++
    let = likeString = `${timer} was liked ${likeCount} times`
    let node = document.createElement("li")
    let textNode = document.createTextNode(likeString);
    node.appendChild(textNode)

    if (likeCount === 1){
        document.querySelector(".likes").appendChild(node)
    } else {
        document.querySelector(".likes").lastChild.innerHTML = textNode.textContent
    }
}




pauseButton.addEventListener("click", function(){
    if (counterPaused == false) {
        counterPaused = true;
        console.log(counterPaused);
        pauseButton.innerHTML = "resume";
        heartButton.disabled = true;
        minusButton.disabled = true;
        plusButton.disabled = true;
    } else if (counterPaused == true) {
        counterPaused = false;
        pauseButton.innerHTML = "pause";
        heartButton.disabled = false;
        minusButton.disabled = false;
        plusButton.disabled = false;
    }
})



submit.addEventListener("click", function(event) {
    event.preventDefault();
    addComment();
})

function addComment() {
    let comment = document.getElementById("comment-input").value;
    let commentElement = document.createElement("p");
    commentsList.appendChild(commentElement);
    commentElement.textContent = comment;
}