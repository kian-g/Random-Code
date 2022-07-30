function randomQuote() {
    var quotes = [
        {
            quote: "I'm not a great programmer; I'm just a good programmer with great habits.",
            source: "Kent Beck",
            citation: "About.me",
            year: "2008",
            tag: "programming"
        },
        {
            quote: "The best way to predict the future is to create it.",
            source: "Abraham Lincoln",
            citation: "About.me",
            year: "1861",
            tag: "future"
        },
        {
            quote: "The best way to predict the future is to create it.",
            source: "Abraham Lincoln",
            citation: "About.me",
            year: "1861",
            tag: "future"
        },
        {
            quote: "The best way to predict the future is to create it.",
            source: "Abraham Lincoln",
            citation: "About.me",
            year: "1861",
            tag: "future"
        }
    ];
    var random = Math.floor(Math.random() * quotes.length);
    return quotes[random];
}

console.log(randomQuote());
//console.log(randomQuote().quote + " - " + randomQuote().source + ". " + randomQuote().year + " [" + randomQuote().tag + "]");
