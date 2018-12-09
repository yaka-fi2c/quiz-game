//quiz game

(function () {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question)

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function (answer, callback) {
        var sc;

        if (answer === this.correct) {
            console.log('correct answer!')
            sc = callback(true);
        } else {
            console.log('sorry, wrong answer. ')

            sc = callback(false);
        }
        this.displayScore(sc)

    }

    Question.prototype.displayScore =
        function (score) {
            console.log('your current score is: ' + score );
            console.log('- - - - - - - - - - - - - - - - - - - ')
        }

    var question1 = new Question('is javaScript the coolest programming language in the world?',
        ['yes', 'no'], 0
    );


    var question2 = new Question('what is the name of this course\'s teacher?',
        ['John', 'Michae', 'Jonas'], 2
    );

    var question3 = new Question('what does best describe coding?',
        ['Boring', 'Hard', 'Fun', 'Tedious'], 2
    );
    var questions = [question1, question2, question3];

    function score() {
        var sc = 0;
        return function (correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    };

    var saveScore = score();

    function nextQuestion() {


        var number = Math.floor(Math.random() * questions.length);

        questions[number].displayQuestion();

        var answer = prompt('please choose the correct answer. ');

        if (answer !== 'exit') {

            questions[number].checkAnswer(parseInt(answer), saveScore);
            nextQuestion();

        }
    };
    nextQuestion();
})();


