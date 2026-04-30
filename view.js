updateView();

function updateView() {
    let html = "";

    if (model.appState.currentPage === "mainPage") html = mainPageView();
    else if (model.appState.currentPage === "login") html = loginView();
    else if (model.appState.currentPage === "quiz") html = quizListView();
    else if (model.appState.currentPage === "activeQuiz") html = activeQuizView();

    model.app.innerHTML = `<main>${html}</main>`;
}

// ------- MainView -------
function mainPageView() {
    const user = getLoggedInUser();

    return `
        <h1>Quiz</h1>
        ${user ? `<h2>Hei ${user.email}</h2>` : ""}

        ${
            user
                ? `<button onclick="changePage('quiz')">Start Quiz</button>
                   <button onclick="logOut()">Logg ut</button>`
                : `<button onclick="changePage('login')">Logg inn</button>`
        }
    `;
}

// ------- LoginView -------
function loginView() {
    return `
        <h2>Logg inn</h2>
        <input placeholder="email" onchange="model.viewState.login.email = this.value">
        <input type="password" placeholder="passord" onchange="model.viewState.login.password = this.value">
        <button onclick="checkLogin()">Logg inn</button>
    `;
}

// ------- QuizView -------
function quizListView() {
    let html = "<h2>Velg quiz</h2>";

    html += `<div class="button-container">`; 

    for (let quiz of model.data.quizData) {
        html += `<button onclick="selectQuiz(${quiz.id})">${quiz.name}</button>`;
    }
    
    html += `</div>`; 


    return html;
}

function activeQuizView() {
    const quiz = getActiveQuiz();
    if (!quiz) {
        changePage("mainPage");
        return "";
    }

    let html = `<h2>${quiz.name}</h2>`;

    for (let question of quiz.questions) {
        html += `<div>
            <h3>${question.question}</h3>
        `;

        for (let i = 0; i < question.alternatives.length; i++) {
            const alt = question.alternatives[i];

            // Finn om dette alternativet er valgt
           const selectedAnswer = model.viewState.answers.find(
    a => a.questionId === question.id
);





const selected = selectedAnswer && selectedAnswer.selectedIndex === i;

            let className = "option";

            // før submit -> bare active
            if (!model.viewState.submitted && selected) {
                className += " active";
            }

            // etter submit -> vis riktig/feil
            if (model.viewState.submitted) {
                if (alt.isCorrect) {
                    className += "correct";
                } else if (selected) {
                    className += " wrong";
                }
            }

            html += `
                <div 
                    class="${className}"
                    onclick="answer(${question.id}, ${i})"
                >
                    ${alt.text}
                </div>
            `;
        }

        html += `</div>`;
    }

    html += `<button onclick="submitQuiz()">Submit</button>`;

    return html;
}