const questions = [
    {
        question: "What's the capital of Armenia?",
        answers: ["Yerevan", "Vardenis", "Gyumri", "Abovyan"],
        correct: "Yerevan",
    },
    {
        question: "Which city is by Lake Sevan?",
        answers: ["Dilijan", "Sevan", "Vanadzor", "Kapan"],
        correct: "Sevan",
    },
];

let currentIndex = 0;
let score = 0;

const p = document.getElementById("quetion");
const buttons = document.querySelectorAll(".item");

function showQuestion() {
    let k = questions[currentIndex];
    p.textContent = k.question;
    buttons.forEach((btn, index) => {
        btn.textContent = k.answers[index];
    });
}
buttons.forEach((btn) => {
    btn.addEventListener(`click`, function () {
        let app = btn.textContent;
        if (app === questions[currentIndex].correct) {
            score++;
        }

        currentIndex++;

        if (currentIndex < questions.length) {
            showQuestion();
        } else {
            p.style.color = "red";
            p.textContent = `You scored ${score} is 2`;
            document.querySelector(".button-container").innerHTML = '';
        }
    });
});
showQuestion();
