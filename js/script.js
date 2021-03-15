fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "c6757dccf0msh5fc585693ca57acp1ff336jsn8d39639ff216",
		"x-rapidapi-host": "quotes15.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});