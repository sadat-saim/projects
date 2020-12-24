const quotes = [
    ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
    ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
    ["Argue with idiots, and you become an idiot.", "Paul Graham"],
    ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
    ["Be the best.", "Abu Sadat Md. Saim"],
    ["Know thy self.", "Aristottle"],
    ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
    ["Get busy living or get busy dying.", "Stephen King"],
    ["If you want to live a happy life, tie it to a goal, not to people or things.", "Albert Einstein"],
    ["A good man treats women with honour.", "Prophet Muhammad"],
    ["Do not lose hope, nor be sad.", "Quoran 3:139"],
    ["The greatest of richness is the richness of the soul.", "Prophet Muhammad"],
    ["Do not lose hope, nor be sad.", "Quoran 3:139"],
    ["Strive always to excel in virtue and truth.", "Prophet Muhammad"],
    ["Sell this life for the next and you win both of them. Sell the next life for this and you lose both of them.", "Hasan Al-Basri"]
]

const data = Math.floor(Math.random() * 16);



document.getElementById('quotess').innerHTML = quotes[data][0];

document.getElementById('poet').innerHTML = quotes[data][1];

const btn = document.querySelector('.button');

btn.style.background = '#ccc';

const bg = document.querySelector('.button');

bg.addEventListener('mousemove', runEvent);

function runEvent(e) {

    bg.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 200)`;

}