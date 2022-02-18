const quotes = [
    {
        quotes:"Don't dwell on the past.",
        author:"Kim yeongmin"
    },
    {
        quotes:"Believe in yourself.",
        author:"Song"
    },
    {
        quotes:"Seize the day.",
        author:"Jung"
    },
    {
        quotes:"You only live once.",
        author:"Dong"
    },
    {
        quotes:"Love yourself.",
        author:"Suk"
    },
    {
        quotes:"Where there is a will there is a way.",
        author:"Ryan"
    },
    {
        quotes:"Don't beat yourself up.",
        author:"Yeong"
    },
    {
        quotes:"Life is a journey.",
        author:"June"
    },
    {
        quotes:"Don't dream, Be it.",
        author:"E"
    },
    {
        quotes:"No pain, No gain.",
        author:"Min"
    }
]

const quote = document.getElementById("quote");
const author = document.getElementById("writer");

function paintQuotes(selectQuoteObj){
    quote.innerText = selectQuoteObj.quotes;
    author.innerText = selectQuoteObj.author;
}

function selectQuotes(){
    const selectQuoteObj = quotes[Math.floor(Math.random()*quotes.length)];
    paintQuotes(selectQuoteObj);
}
selectQuotes();
setInterval(selectQuotes, 10000);