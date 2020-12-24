const quotes = [
    ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
    ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
    ["Argue with idiots, and you become an idiot.", "Paul Graham"],
    ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
    ["Be the best.", "Abu Sadat Md. Saim"],
    ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
    ["Get busy living or get busy dying.", "Stephen King"],
    ["If you want to live a happy life, tie it to a goal, not to people or things.", "Albert Einstein"],
    ["A good man treats women with honour.", "Prophet Muhammad"],
    ["Do not lose hope, nor be sad.", "Quoran 3:139"],
    ["The greatest of richness is the richness of the soul.", "Prophet Muhammad"],
    ["Do not lose hope, nor be sad.", "Quoran 3:139"],
    ["Strive always to excel in virtue and truth.", "Prophet Muhammad"],
    ["Sell this life for the next and you win both of them. Sell the next life for this and you lose both of them.", "Hasan Al-Basri"],
    ["Only the paranoid survive.", "Andy Grove"],
    ["It’s no use going back to yesterday, because I was a different person then.", "Lewis Carroll"],
    ["Whatever you are, be a good one.", "Abraham Lincoln"],
    ["The hard days are what make you stronger.", "Aly Raisman"],
    ["Work hard in silence, let your success be the noise.", "Frank Ocean"],
    ["Hard work beats talent when talent doesn’t work hard.", "Tim Notke"],
    ["Work hard, be kind, and amazing things will happen.", "Conan O'Brien"],
    ["Dreams don’t work unless you do.", "Jhon C. Maxwell"],
    ["Go the extra mile. It’s never crowded there.", "Dr. Wayne D. Dyer"],
    ["Turn your wounds into wisdom.", "Oprah"],
    ["We can do anything we want to if we stick to it long enough.", "Halen Keller"],
    ["Never regret anything that made you smile.", "Mark Twain"]
]

const data = Math.floor(Math.random() * 28);



document.getElementById('quotess').innerHTML = `"${quotes[data][0]}"`;

document.getElementById('poet').innerHTML = quotes[data][1];

const btn = document.querySelector('.button');

btn.style.background = '#ccc';

//button auto color

const bg = document.querySelector('.button');

bg.addEventListener('mousemove', runEvent);

function runEvent(e) {

    bg.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 200)`;

}

//random background color

const R = Math.floor(Math.random() * 256);
const G = Math.floor(Math.random() * 256);
const B = Math.floor(Math.random() * 256);

document.body.style.background = `rgb(${R},${G},${B})`;

document.querySelector('.custom').textContent = `RGB (${R},${G},${B})`

// console.log(quotes.length)