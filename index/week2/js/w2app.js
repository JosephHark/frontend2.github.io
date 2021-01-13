const question = "What is Superman's real name?"
const answer = prompt(question);
alert(`You answered ${answer}`);
if(answer == "Clark Kent"){
    alert("You got it right! Clark Kent is the secert identity of Superman.")
} else if(answer == "clark kent"){
    alert("You got it right! Clark Kent is the secert identity of Superman.")

} else {
    alert("I'm sorry that asnwer is incorrect. Clark Kent is the secert identity of Superman.")
}


const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];
function start(quiz){
    let score = 0;
    // main game loop
    for(const [question,answer] of quiz){
        const response = ask(question);
        check(response,answer);
    }
    // end of main game loop
    gameOver();
    // function declarations
    function ask(question){
        return prompt(question);
    }
    function check(response,answer){
        if(response === answer){
        alert('Correct!');
        score++;
        } else {
        alert(`Wrong! The correct answer was ${answer}`);
        }
    }
    function gameOver(){
        alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
    }
}
start(quiz);