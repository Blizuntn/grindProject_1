var quoteEl= document.getElementsByClassName("quoteOfTheDay");
var quoteofthedayauthorEl = document.getElementById("quoteAuthor");
var quoteofthedayquoteEl = document.getElementById("quoteText");
var horoscopeSignEl = document.getElementById("signDate");
var horoscopeMessageEl = document.getElementById("signMessage")

var getApi = function (){
fetch("https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "c6757dccf0msh5fc585693ca57acp1ff336jsn8d39639ff216",
		"x-rapidapi-host": "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com"
	}
})
.then(response => {
	return response.json();
})
.then(data => {
    var quoteAuthor= data.author;
    var quoteText= data.text;
    quoteofthedayauthorEl.textContent = quoteAuthor;
    quoteofthedayquoteEl.textContent = quoteText;
    
    
})
.catch(err => {
	console.error(err);
});
}
getApi();
var getApi2 = function (){
    fetch("https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=aquarius&day=today", {
	"method": "POST",
	"headers": {
		"x-rapidapi-key": "c6757dccf0msh5fc585693ca57acp1ff336jsn8d39639ff216",
		"x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com"
	}
})
.then(response => {
	return response.json();
})
.then(data => {
    console.log(data);
    var signDte = data.current_date;
    var signDescription= data.description;
    horoscopeSignEl.textContent = signDte;
    horoscopeMessageEl.textContent = signDescription;

})
.catch(err => {
	console.error(err);
});
}
getApi2();