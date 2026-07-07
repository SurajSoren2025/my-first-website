let button = document.getElementById("magicButton");

button.addEventListener("click", function(){

    let messages = [
        "You are now a web developer!",
        "Keep building!",
        "Your journey has started!",
        "Welcome to coding!"
    ];

    let random =
        Math.floor(Math.random()*messages.length);

    alert(messages[random]);
});