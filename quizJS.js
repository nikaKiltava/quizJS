let namesA = ["Konoplyanka", "Gotze", "Muller", "Messi", "Robben", "Loading"];
let namesB = ["Messi", "Ronaldo", "Neuer", "Lewandowski", "Salah", "Loading"];
let namesC = ["Aguero", "Suarez", "Savic", "Vidic", "Lewandowski", "Loading"];
let namesD = ["Rooney", "Denney", "Ocampos", "Pique", "Boateng", "Loading"];
let imageList = [
"https://i2-prod.liverpoolecho.co.uk/incoming/article6643227.ece/ALTERNATES/s615/3684753.jpg",
"https://eu-images.contentstack.com/v3/assets/bltcc7a7ffd2fbf71f5/blt062ac90d4766dafb/61d33967298dc26a42a3bf33/Cristiano_Ronaldo_Man_Utd_captain_2021-22.jpg?auto=webp&fit=crop&format=jpg&height=300&quality=60",
"https://mundoalbiceleste.com/wp-content/uploads/2021/02/es-9liyxmamhifq_1612021747.jpg",
"https://upload.wikimedia.org/wikipedia/commons/f/fa/Gerard_Piqu%C3%A9_2017.jpg",
"https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1314x345:1316x343)/origin-imgresizer.eurosport.com/2021/11/03/3247847-66474208-2560-1440.jpg",
"https://miro.medium.com/max/1200/1*mg5YaPigfU8-cwKtkxV9gw.png"
];
let correctAnswerList = ["Konoplyanka", "Ronaldo", "Ocampos", "Pique", "Lewandowski"]

let i = 0;


let optionOne = document.querySelector('#firstOption');
let optionTwo = document.querySelector('#secondOption');
let optionThree = document.querySelector('#thirdOption');
let optionFour = document.querySelector('#fourthOption');
let playerImage = document.querySelector('#playerImg')
let siteName = document.getElementById('webName')
let score;
userScore = 0;


startGame();


function startGame(){
document.addEventListener('click', (e) => {
    let element = e.target;
    if(element.innerHTML == correctAnswer[i] && element.className == "btn"){
        e.target.style.backgroundColor="#00ff00"
        buttonCount++
        i++
        userScore++;
        console.log(i)
        if(i < correctAnswerList.length){setTimeout(nextQuestion, 500)
        }
    }else if(element.className == "btn"){
        e.target.style.backgroundColor="FF0000"
        buttonCount++
        i++
        console.log(i)
        if(i < correctAnswerList.length){setTimeout(nextQuestion, 500)
        }
    }if(i == correctAnswerList.length - 1){
        setTimeout(displayScore, 1200)
    }
})
};


function displayScore(){
    optionOne.remove()
    optionTwo.remove()
    optionThree.remove()
    optionFour.remove()
    playerImage.remove()
    siteName.remove()
    finalScore();
}


function finalScore(){
    score = document.createElement("p");
    score.innerHTML = "Your score is " + userScore + "/" + correctAnswerList.length;
    score.style.fontSize = "80px";
    score.style.color = "blue"
    document.body.appendChild(score);
}

function nextQuestion(){
console.log(i);
optionOne.style.backgroundColor='#FFFFFF'
optionTwo.style.backgroundColor='#FFFFFF'
optionThree.style.backgroundColor='#FFFFFF'
optionFour.style.backgroundColor='#FFFFFF'
console.log(correctAnswerList[i])
optionOne.innerHTML = namesA[i]
optionTwo.innerHTML = namesB[i]
optionThree.innerHTML = namesC[i]
optionFour.innerHTML = namesD[i]
playerImage.innerHTML = '<img src="' + imageList[i] +'">'
}