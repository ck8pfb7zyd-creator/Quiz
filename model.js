const model = {
    app: document.getElementById("app"),

    appState: {
        currentPage: "mainPage",
        loggedInId: null,
    },

    viewState: {
        login: {
            email: "",
            password: "",
        },
        currentQuizId: null,
        answers: [],
        points: 0,
    },

    data: {
        users: [
            { id: 1, email: "admin@test.no", password: "123" },
            { id: 2, email: "user@test.no", password: "321" },
        ],

        quizData: [
            {
                id: 1,
                name: "Game Of Thrones Quiz",
                questions: [
                    {
                        id: 1,
                        question: "Hva heter sverdet til Jon Snow?",
                        alternatives: [
                            {text: "Longclaw", isCorrect: true},
                            {text: "Needle", isCorrect: false},
                            {text: "Oathkeeper", isCorrect: false}
                        ],
                    },
                    {
                        id: 2,
                        question: "Hva heter hovedstaden i Westeros?",
                        alternatives: [
                            {text: "Winterfell", isCorrect: false},
                            {text: "King's Landing", isCorrect: true},
                            {text: "Braavos", isCorrect: false}
                        ],
                    },
                    {
                        id: 3,
                        question: "Hvem drepte Night King?",
                        alternatives: [
                            {text: "Jon Snow", isCorrect: false},
                            {text: "Jaime Lannister", isCorrect: false}, 
                            {text: "Arya Stark", isCorrect: true}
                        ],
                    }, 
                    {
                        id: 4,
                        question: "Hva er slagordet til House Stark?",
                        alternatives: [
                            {text: "Fire and Blood", isCorrect: false},
                            {text: "Winter is Coming", isCorrect: true},
                            {text: "Hear Me Roar", isCorrect: false}
                        ],
                    }, 
                    {
                        id: 5,
                        question: "Hvem er kjent som 'The Kingslayer'?",
                        alternatives: [
                            {text: "Jaime Lannister", isCorrect: true}, 
                            {text: "Tyrion Lannister", isCorrect: false},
                            {text: "Joffrey Baratheon", isCorrect: false}
                        ],
                    }, 
                ],
            },

            {
                id: 2,
                name: "Strange facts Quiz",
                questions: [
                    {
                        id: 1,
                        question: "Hvor mange hjerter har en blekksprut?",
                        alternatives: [
                            {text: "1", isCorrect: false},
                            {text: "2", isCorrect: false},
                            {text: "3", isCorrect: true}
                        ],
                    },
                    {
                        id: 2,
                        question: "Hva er det rare med bananer?",
                        alternatives: [
                            {text: "De vokser nedover", isCorrect: false},
                            {text: "De er radioaktive", isCorrect: true},
                            {text: "De inneholder kjøttprotein", isCorrect: false}
                        ],
                    },
                    {
                        id: 3,
                        question: "Hva skjer hvis du gråter i verdensrommet?",
                        alternatives: [
                            {text: "Tårene fryser", isCorrect: false},
                            {text: "De flyter bort", isCorrect: true},
                            {text: "De blir sittende fast på ansiktet", isCorrect: false}

                        ],
                    },

                    {
                        id: 4, 
                        question: "Hvor mange prosent av kroppen din er bakterier?", 
                        alternatives: [
                            {text: "Rundt 50%", isCorrect: true},
                            {text: "10%", isCorrect: false},
                            {text: "6", isCorrect: false}
                        ]
                    },

                    {
                        id: 5,
                        question: "Hvilket dyr kan overleve i verdensrommet uten beskyttelse", 
                        alternatives: [
                            {text: "Kakkerlakk", isCorrect: false},
                            {text: "Maur", isCorrect: false},
                            {text: "Tardigrade(bjørnedyr)", isCorrect: true}
                        ]
                    }
                ],
            },

            {
                id: 3,
                name: "Guess the Movie",
                questions: [
                    {
                        id: 1,
                        question: "Yippee-ki-yay!",
                        alternatives: [
                            {text: "Lethal Weapon", isCorrect: false},
                            {text: "Die Hard", isCorrect: true},
                            {text: "Rambo", isCorrect: false}
                        ],
                    },
                    {
                        id: 2,
                        question: "There is no spoon",
                        alternatives: [
                            {text: "The Matrix", isCorrect: true},
                            {text: "Interstellar", isCorrect: false},
                            {text: "Inception", isCorrect: false}
                        ],
                    },
                    {
                        id: 3,
                        question: "Hope is a good thing, maybe the best of things",
                        alternatives: [
                            {text: "Forrest Gump", isCorrect: false},
                            {text: "The Shawshank Redemption", isCorrect: true},
                            {text: "Cast Away", isCorrect: false}
                        ],
                    },

                    {
                        id: 4, 
                        question: "We`re gonna need a bigger boat", 
                        alternatives: [
                            {text: "Titanic", isCorrect: false},
                            {text: "Haisommer", isCorrect: false},
                            {text: "Jaws", isCorrect: true}
                        ],
                    },

                    {
                        id: 5,
                        question: "I wish I knew how to quit you",
                        alternatives: [
                            {text: "Brokeback Mountain", isCorrect: true},
                            {text: "The Notebook", isCorrect: false},
                            {text: "Dear John", isCorrect: false}
                        ],
                    }, 
                ],
            },
        ],

        leaderboard: [],
    },
};