let correct = 0;
let wrong = 0;
document.getElementById('correct').innerText = correct;
document.getElementById('wrong').innerText = wrong;

let questions = [{
    "question": "what is 2 + 2?",
    "answer": 4,
    "options": [1, 2, 3, 4]
},
{
    "question": "what is capital of India?",
    "answer": "new delhi",
    "options": ["select","new delhi", "Mumbai", "Chennai", "kolkata"]
},
{
    "question": "what is capital of Bangladesh?",
    "answer": "Dhaka",
    "options": ["select","Dhaka", "Chitagong", "Mirput", "kolkata"]
},
{
    "question": "what is currency of Bangladesh?",
    "answer": "Takka",
    "options": ["select","Takka", "INR", "USD", "PNR"]
}
]

let randomIndex = Math.floor(Math.random() * questions.length);
document.getElementById('question').innerText = questions[randomIndex].question



for (let i = 0; i < 4; i++) {
    let option = document.createElement('option');
    option.value = questions[randomIndex].options[i];
    option.innerText = questions[randomIndex].options[i];
    document.getElementById('options').options[i] = option

}



function checkresult() {
    let selectedIndex = document.getElementById('options').selectedIndex;
   if (questions[randomIndex].answer === questions[randomIndex].options[selectedIndex]) {
        correct += 1;
        document.getElementById('correct').innerText = correct
    }
    else {
        wrong += 1;
        document.getElementById('wrong').innerText = wrong
    }

    let newRandomIndex = Math.floor(Math.random() * questions.length);
    
    document.getElementById('question').innerText = questions[newRandomIndex].question
    


    for (let i = 0; i < 4; i++) {
        let option = document.createElement('option');
        option.value = questions[newRandomIndex].options[i];
        option.innerText = questions[newRandomIndex].options[i];
        document.getElementById('options').options[i] = option

    }
    document.getElementById("final").innerText=`${(correct/(correct+wrong) *100)} %`;
}

