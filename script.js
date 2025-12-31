const quotes=[
"Liya ji, aap itni cool ho ki AC bhi insecure feel kare 😎❄️",
"Warning ⚠️: Liya ji ke jokes sunke hans-hans ke pet dard ho sakta hai 😂",
"Liya ji is proof that multitasking is possible – baatein bhi, masti bhi 😄",
"Google bhi confuse ho jata hai jab Liya ji ka answer search karta hai 🤯",
"Liya ji ka swag = unlimited, battery kabhi low nahi hoti 🔋😎",
"Aaj ka motivation: Jo kaam Liya ji kal karega, wo bhi maze se karega 😜"
];
const quoteEl=document.getElementById("quote");
const btn=document.getElementById("btn");
function showRandomQuote(){
  const i=Math.floor(Math.random()*quotes.length);
  quoteEl.style.opacity=0;
  setTimeout(()=>{
    quoteEl.textContent=quotes[i];
    quoteEl.style.opacity=1;
  },300);
}
btn.addEventListener("click",showRandomQuote);
showRandomQuote();

