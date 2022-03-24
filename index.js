var allDrumsBtn = document.querySelectorAll('.drum');

for (let i = 0; i < allDrumsBtn.length; i++) {

    allDrumsBtn[i].addEventListener('click', function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML)

        makeAnimation(buttonInnerHTML)

    })
    
}

window.addEventListener('keydown', (e) => {
    
    makeSound(e.key);

    makeAnimation(e.key);
})

function makeSound(key) {
    switch (key) {
            case "w":
                var tom1 = new Audio('sounds/tom-1.mp3')
                tom1.play()
                break;
            case "a":
                var tom2 = new Audio('sounds/tom-2.mp3')
                tom2.play()
                break;
            case "s":
                var tom3 = new Audio('sounds/tom-3.mp3')
                tom3.play()
                break;
            case "d":
                var tom4 = new Audio('sounds/tom-4.mp3')
                tom4.play()
                break;
            case "j":
                var snare = new Audio('sounds/snare.mp3')
                snare.play()
                break; 
            case "k":
                var crash = new Audio('sounds/crash.mp3')
                crash.play()
                break; 
            case "l":
                var kickbass = new Audio('sounds/kick-bass.mp3')
                kickbass.play()
                break; 
        default: console.log(key);
        }
}

function makeAnimation(currentButton) {
    var activeButton = document.querySelector(`.${currentButton}`);
    if (activeButton == null) {
        alert("Please USE only the the witten letters")
        return;
    } else {
        activeButton.classList.add("pressed");
    
    setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
    }
    
}