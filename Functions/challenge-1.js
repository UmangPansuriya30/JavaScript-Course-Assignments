'use strict';
const poll = {
    answers: [0, 0, 0, 0],
    registerNewAnswer() {
        const option = prompt(`What is your favourite programming language?
            0: JavaScript
            1: Python
            2: Rust
            3: C++`)
        if (option < this.answers.length)
            this.answers[option]++;
        else
            console.log("invalid option!!");
        this.displayResult();
        this.displayResult('string');
    },
    displayResult(type = 'array') {
        if (type === 'array')
            console.log(this.answers);
        else if (type === 'string')
            console.log(`Poll results are ${this.answers.join(',')}`)
    }
}

document.querySelector(".poll").addEventListener('click', poll.registerNewAnswer.bind(poll))

poll.displayResult.call({ answers: [5, 2, 3] })
poll.displayResult.call({ answers: [5, 2, 3] }, 'string')
poll.displayResult.call({ answers: [1, 5, 3, 9, 6, 1] })
poll.displayResult.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string')