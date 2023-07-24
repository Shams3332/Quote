



var qouteOutput = document.getElementById("qouteOutput");
var qouteAuther = document.getElementById("qouteAuther");



var  quote = ["“Be yourself; everyone else is already taken.”",
"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
"“A room without books is like a body without a soul.”",
"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
"“So many books, so little time.”",
]

var author = ["― Oscar Wilde","― Albert Einstein","― Marcus Tullius Cicero","― Bernard M. Baruch","― Frank Zappa",

]





function Qoutes(){
  
    var x = [Math.floor(Math.random()*quote.length)];
  
    qouteOutput.innerHTML = quote[x];
    qouteAuther.innerHTML = author[x];
  
  
};
