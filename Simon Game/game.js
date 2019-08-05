var gamePattern = [];
var buttonColors = ["red", "blue","green","yellow"];
var userClickedPattern = [];
var started = false;
level = 0;
$(document).keydown(function(){
    
    if (started === false){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;

    } 
    
})
function nextSequence(){

    userClickedPattern = [];
    $("#level-title").text("Level " + level);
    level++;


    // selecting random color 
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    // animation effect on button
    $("."+ randomChosenColor).fadeIn(50).fadeOut(50).fadeIn(50);

    // play music that is randomly chosen
    playSound(randomChosenColor);


}


$(".btn").click(function(){
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    console.log("btn udrClickedPattern Color " + userClickedPattern);
    animatePress(userChosenColor);

    // play corresponding music 
    playSound(userChosenColor);


    checkAnswer(userClickedPattern.length - 1);
})


function playSound(name){
    audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("." + currentColor).addClass("pressed");
    setTimeout(function(){
        $("." + currentColor).removeClass("pressed");
    }, 100);
}
function startOver(){
    level = 0;
    started = false;
    gamePattern = [];
}
function checkAnswer(currentLevel){

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("success");
        if (userClickedPattern.length === gamePattern.length){
        console.log("finished")
        setTimeout(function(){
            nextSequence();
        }, 1000);
        }
    }
    else{
        var wrong = "wrong";
        playSound(wrong);
        $("body").addClass("game-over");
        $("#level-title").text("Game Over Press Any Key to Restart");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        startOver();
    }
    
}

