var noOfDrums = document.querySelectorAll(".drum").length;


for (var i = 0; i < noOfDrums; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        
       makeSound(buttonInnerHTML);

        

    });

}


document.addEventListener("keydown", function(event){
    makeSound(event.key);
})

function makeSound(key) {
     
    switch (buttonInnerHTML) {
        case "w":
            var tom1 = new Audio("./soundsDRUMKIT/tom-1.mp3");
            tom1.play()
            break;

        case "a":
            var tom2 = new Audio("./soundsDRUMKIT/tom-2.mp3");
            tom2.play()
            break;

        case "s":
            var tom3 = new Audio("./soundsDRUMKIT/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./soundsDRUMKIT/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("./soundsDRUMKIT/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("./soundsDRUMKIT/crash.mp3");
             crash.play();
            break;
        case "l":
            var kick = new Audio("./soundsDRUMKIT/kick-bass.mp3");
            kick.play();
            break;
        default: console.log("button not found");

           
    }
}

