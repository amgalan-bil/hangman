const letters = document.getElementById('letters');
const selected = document.getElementById('selected')
const underscoreDiv = document.getElementById('underscoreDiv')
const attempts = document.getElementById('attempts')
let container = document.getElementsByClassName('container')[0];
let sigleUnderscore = document.getElementsByClassName('repository')

let programmingLanguages = ['javascript', 'html', 'css', 'python', 'java', 'go', 'kotlin', 'php', 'swift', 'typescript', 'scala']
let sports = ['basketball', 'football', 'tennis', 'golf', 'table tennis', 'archery', 'wrestling', 'horse racing']
let movies = ['harry potter', 'dune', 'finding nemo', 'gladiator', 'godfather', 'avatar']
let categories = ['Programming Languages', 'Sports', 'Movies']
let answer = '';
let topic = '';
let tries = 10;
let genre;
let hint1;
let playAgain = document.getElementById('reset');
// let guess=[];

const attemptsContainer = document.createElement('div')
attemptsContainer.innerHTML = (`You have ${tries} tries left`)
attempts.appendChild(attemptsContainer)


let group = categories[Math.floor(Math.random() * categories.length)];
let randomLang = Math.floor(Math.random() * programmingLanguages.length);
let randomSport = Math.floor(Math.random() * sports.length);
let randomMovie = Math.floor(Math.random() * movies.length);

function word() {
    if (group === 'Programming Languages') {
        genre = document.createElement('h2');
        genre.innerHTML = `The Chosen Category is Programming Languages`
        selected.appendChild(genre);
        answer = programmingLanguages[randomLang];
        return answer;
    } else if (group === 'Sports') {
        genre = document.createElement('h2');
        genre.innerHTML = `The Chosen Category is Sports`
        selected.appendChild(genre);
        answer = sports[randomSport]
        return answer;
    } else {
        genre = document.createElement('h2');
        genre.innerHTML = `The Chosen Category is Movies`
        selected.appendChild(genre);
        answer = movies[randomMovie]
        return answer;
    }
}

let randomWord = word();
let clickedLetterDiv;
let something = '_';
box1 = 'repository';

const alphabet = ["a", 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ']
letters.className = "vessel";
box = 'section';

for (let i = 0; i < randomWord.length; i++) {
    const underscoreContainer = document.createElement('div');
    underscoreContainer.innerHTML = '_'
    underscoreContainer.className = box1;
    underscoreDiv.appendChild(underscoreContainer)
}

for (let i = 0; i < alphabet.length; i++) {
    const vessel = document.createElement('div');
    vessel.innerHTML = alphabet[i]
    vessel.className = box;

    vessel.addEventListener('click', function () {
        const underscoreContainer = document.getElementsByClassName(box1)
        vessel.style.pointerEvents = 'none';
        vessel.style.opacity = '0.5';
        for (let j = 0; j < randomWord.length; j++) {
            if (randomWord[j].includes(alphabet[i])) {
                console.log("working")
                underscoreContainer[j].innerHTML = alphabet[i];
            }

        }
        // for (let i = 0; i < sigleUnderscore.length; i++) {
            if(!underscoreDiv.innerHTML.includes('_')){
                attemptsContainer.innerHTML='YOU WIN!'
            }
        //     // underscoreContainer.innerHTML = '_'
        //     // underscoreContainer.className = box1;
        //     // underscoreDiv.appendChild(underscoreContainer)
        // }
        if (!randomWord.includes(alphabet[i])) {
            tries--;
            attemptsContainer.innerHTML = (`You have ${tries} tries left`)
            attempts.appendChild(attemptsContainer)
            if (tries < 1) {
                attemptsContainer.innerHTML = 'YOU LOSE!'
            }
        }
    })

    letters.appendChild(vessel);

}


let hint = document.getElementById('hint');
let clue = document.getElementById('clue');

let plangHint = [
    'Makes Webpage Interactive',
    'Structure of the Webpage',
    'Style of the Webpage',
    'A Programming Language developed by Guido van Rossum',
    'A Programming language created in 1995',
    'Used for cloud-based or server-side applications',
    'Used mainly for android mobile app development',
    'The mascot is a blue elephant',
    'Apple was one of its inventors',
    'Rhymes with Javascript',
    'In Italian, the programming language means stairway'];

let sportHint = [
    'You can dunk in this sport',
    'The most popular sport in the world',
    'Sport is originally played with bare hands',
    'A sport that many people think only rich people play',
    'China excel at this sport',
    'One of the three Naadam Festival sports',
    "World's oldest sport",
    "One of the three Naadam Festival sports"
]

let movieHint = [
    'The author of the original book used a pseudonym',
    'Takes place in a world of desert',
    'A father who looks for his lost son with a person that has short-term memory',
    'Time is set in ancient Rome',
    'A movie about a mafia family',
    'Takes place on Pandorra'
]

hint.innerHTML = 'HINT';

hint.onclick = function () {
    if (group === 'Programming Languages') {
        // hint1 = document.createElement('h2');
        clue.textContent = `Clue: ${plangHint[randomLang]}`
        // clue.appendChild(hint1);
    } else if (group === 'Sports') {
        // hint1 = document.createElement('h2');
        clue.textContent = `Clue: ${sportHint[randomSport]}`
        // clue.appendChild(hint1);
    } else if (group === 'Movies') {
        // hint1 = document.createElement('h2');
        clue.textContent = `Clue: ${movieHint[randomMovie]}`
        // clue.appendChild(hint1);
    }
}


playAgain.onclick = function () {
    window.location.reload()
}

playAgain.innerHTML = 'Play Again'