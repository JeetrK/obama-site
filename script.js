document.getElementById('quoteButton').addEventListener('click', function() {
    var quotes = [
        "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.",
        "The future rewards those who press on. I don't have time to feel sorry for myself. I don't have time to complain. I'm going to press on.",
        "Why can't I just eat my waffle?"
    ];
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quoteDisplay').textContent = randomQuote;
});

function checkAnswers() {
    let score = 0;
    let totalQuestions = 4;

 
    if (document.getElementById('q1a1').checked) {
        score++;
    }

 
    if (document.getElementById('q2a2').checked) {
        score++;
    }

    if (document.getElementById('q3a1').checked) {
        score++;
    }


    if (document.getElementById('q4a1').checked) {
        score++;
    }


    let result = document.getElementById('result');
    result.innerHTML = `You got ${score} out of ${totalQuestions} correct`;

  
    if (score === totalQuestions) {
        result.innerHTML += " Incredible Job ";
    } else if (score >= 2) {
        result.innerHTML += " Good job ";
    } else {
        result.innerHTML += " bad job ";
    }
}



