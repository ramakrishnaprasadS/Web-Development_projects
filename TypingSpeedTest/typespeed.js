let speedTypingTestContEl = document.getElementById("speedTypingTest");
let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");
let textContEl = document.getElementById("textCont");


let clrid;
let startTimer = function() {
    let counter = 0;
    clrid = setInterval(function() {
        counter = counter + 1;
        timerEl.textContent = counter + " seconds";
    }, 1000);
}

let getQuote = function() {
    let options = {
        method: "GET"
    }
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        }).then(function(jsonData) {
            spinnerEl.classList.add("d-none");
            textContEl.classList.remove("d-none");
            startTimer();

            quoteDisplayEl.textContent = jsonData.content;
        });

}
getQuote();


submitBtnEl.addEventListener("click", function() {
    console.log(quoteDisplayEl.textContent);
    console.log(quoteInputEl.value);
    if (quoteInputEl.value == quoteDisplayEl.textContent) {
        clearInterval(clrid);
        resultEl.textContent = "you have completed in " + timerEl.textContent + "seconds";
    } else {
        resultEl.textContent = "you typed incorrect sentence";
    }
});


resetBtnEl.addEventListener("click", function() {
    quoteInputEl.value = "";
    resultEl.textContent = "";
    clearInterval(clrid);
    timerEl.textContent = 0;
    startTimer();

    getQuote();
});