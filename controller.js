// ------- LoginController -------
function checkLogin() {
    const login = model.viewState.login;

    const user = model.data.users.find(
        u => u.email === login.email && u.password === login.password
    );

    if (user) {
        model.appState.loggedInId = user.id;

        // reset input
        model.viewState.login.email = "";
        model.viewState.login.password = "";

        changePage("mainPage");
    } else {
        alert("Feil login");
    }
}

function logOut() {
    model.appState.loggedInId = null;
    changePage("mainPage");
}


// ------- mainQuiz -------
function selectQuiz(id) {
    model.viewState.currentQuizId = id;
    model.viewState.answers = [];
    model.viewState.points = 0;
    model.viewState.submitted = false; 

    changePage("activeQuiz");
}


function answer(questionId, selectedIndex) {

    model.viewState.answers = model.viewState.answers.filter(
        a => a.questionId !== questionId
    );

    model.viewState.answers.push({
        questionId,
        selectedIndex,
    });

    updateView();
}

function submitQuiz() {
    model.viewState.points = 0;
    model.viewState.submitted = true;

    const quiz = getActiveQuiz(); 

       for (let answer of model.viewState.answers) {
        const question = quiz.questions.find(q => q.id === answer.questionId);
        const selectedAlt = question.alternatives[answer.selectedIndex];

        if (selectedAlt.isCorrect) {
            model.viewState.points++;
        }
    }

    model.data.leaderboard.push({
        userId: model.appState.loggedInId,
        quizId: model.viewState.currentQuizId,
        score: model.viewState.points,
    });

    alert("Score: " + model.viewState.points);

    changePage("mainPage"); 
}





function changePage(page) {
    model.appState.currentPage = page;
    updateView();
}

function getLoggedInUser() {
    return model.data.users.find(
        u => u.id === model.appState.loggedInId
    );
}

function getActiveQuiz() {
    return model.data.quizData.find(
        q => q.id === model.viewState.currentQuizId
    );
}