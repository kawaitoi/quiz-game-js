const quiz = [{
    qustion: "サトシが好きなポケモンは？",
    answers: ["ピカチュウ",
        "ケムッソ",
        "ニャース",
        "小次郎"
    ],
    correct: "ピカチュウ"

}, {
    qustion: "一話に出てきた伝説のポケモンは？",
    answers: ["ピカチュウ",
        "ホウオ",
        "ギャラドス",
        "鈴木さん"
    ],
    correct: "ホウオ"
}, {
    qustion: "ポケモンセンターはどこ？",
    answers: ["千葉県",
        "福岡県",
        "大阪府",
        "マサラタウン"
    ],
    correct: "千葉県"
    
},
{
    qustion:"コイキングの進化系は？",
    answers: ["どらえもん",
    "ギャラドス",
    "グラードン",
    "サーモン"
    ],
    correct: "ギャラドス"
}];

const quizLenght = quiz.length;
let quizIndex = 0;
let score = 0;

const button = document.getElementsByTagName("button")

let buttonLength = button.length;

//ボタン4つ
//button[0].textContent = quiz[quizIndex].answers[0];
//button[1].textContent = quiz[quizIndex].answers[1];
//button[2].textContent = quiz[quizIndex].answers[2];
//button[3].textContent = quiz[quizIndex].answers[3];


//クイズの問題
const setupQuiz = () => {

    //htmlに問題文を表示
    document.getElementById("question").textContent = quiz[quizIndex].qustion;

    let buttonIndex = 0;

    while (buttonIndex < buttonLength) {
        button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert("正解");
        score++;
    } else {
        window.alert("残念");
    }

    quizIndex++;

    if(quizIndex < quizLenght){
        setupQuiz();
        
    }else{
        window.alert("終わり!合計の正解数は"+ score　+ "問です！");
    }
}

//ボタンをおしたら正誤判定

let handleIndex = 0;

while (handleIndex < buttonLength) {
    button[handleIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handleIndex++;
}

