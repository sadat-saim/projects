const quotes = [
    ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
    ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
    ["Argue with idiots, and you become an idiot.", "Paul Graham"],
    ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
    ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"]
]

const data = Math.floor(Math.random() * 5);



document.getElementById('quotess').innerHTML = quotes[data][0];

document.getElementById('poet').innerHTML = quotes[data][1];

const btn = document.querySelector('.button');

// btn.setAttribute('href', 'https://sadat-saim.github.io/projects/');
btn.setAttribute('href', 'http://index.html');

btn.style.background = '#ccc';