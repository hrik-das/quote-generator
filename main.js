const api = "https://api.quotable.io/random";
const quote = document.getElementById('quote');
const author = document.getElementById('author');
async function GetQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
GetQuote(api);
function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+ quote.innerHTML + "- By "+ author.innerHTML, "Tweet Window", "width=600, heightt=300");
}