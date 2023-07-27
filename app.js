const QuoteText = document.querySelector(".quote");
quoteBtn = document.querySelector("button");
authorName = document.querySelector(".author .name");
soundBtn = document.querySelector(".sound");
copyBtn = document.querySelector(".copy");

function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerHTML = "Loading..."
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        console.log(result);
        QuoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "Next Quote"
        quoteBtn.classList.remove("loading");
    });
}

quoteBtn.addEventListener("click", randomQuote);

soundBtn.addEventListener("click", () =>{
    let utterance = new SpeechSynthesisUtterance(QuoteText.innerText + ' by ' + authorName.innerText);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", () =>{
    navigator.clipboard.writeText(QuoteText.innerText + ' -- ' + authorName.innerText);
    alert("Quote has been copied.");
});