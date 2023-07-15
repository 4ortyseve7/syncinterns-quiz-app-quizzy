let i = 0;
let score = 0;
let qNumber = 0;
let rand;
let qArray = [
    'Which animal is carnivore?',
    'Select the non-living object?',
    'Which among these is not a planet?',
    'Full form of HTML?',
    'Who discovered Zero (0)?'
];
let opArray = [
    ['Panther','Tiger','Lion','All of these'],
    ['Butterfly','Elephant','Cupboard','Ostrich'],
    ['Sun','Earth','Uranus','Mars'],
    ['High Text Marking Language','Hyper Text Markup Language','Hyper Text Makeup Language','Hyper Transcript Marked Language'],
    ['Aryabhatta','Albert Einstein','Issac Newton','Alexander Graham Bell']
];
let opCorrect = [
    '4',
    '3',
    '1',
    '2',
    '1'
]

function f(k){
    i=k;
    check();
}
function check(){
    console.log(i);
}
function confirm(){
    if(i == opCorrect[qNumber]){
        score++;
    }
    i = 0;
    qNumber++;
    nxtQ();
}
function nxtQ(){
    if(qNumber > 4){
        mainBox.style.display = "none";
        endBox.style.display = "block";
        scoreval.innerHTML = score;
    }
    else{
        qString.innerHTML = qArray[qNumber];
        
        option1.innerHTML = opArray[qNumber][0];
        option2.innerHTML = opArray[qNumber][1];
        option3.innerHTML = opArray[qNumber][2];
        option4.innerHTML = opArray[qNumber][3];
        
        quesOutOf.innerHTML = qNumber+1;
    }    
}

function startquiz(){
    homeBox.style.display = "none";
    mainBox.style.display = "block";
    nxtQ();
}

function retakequiz(){
    i = 0;
    score = 0;
    qNumber = 0;
    endBox.style.display = "none";
    mainBox.style.display = "none";
    homeBox.style.display = "block";
}
