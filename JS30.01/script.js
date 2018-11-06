var button = document.querySelectorAll(".key");
var audio = document.querySelectorAll("audio");

function clear() {
    for(var i = 0; i < button.length; i++) {
        if(button[i].classList.contains("playing")) {
            button[i].classList.remove("playing");
        }
    }
}

for(var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
        clear();
        var id = this.id;
        this.classList.add("playing");
        for(var j = 0; j < button.length; j++) {
            if(audio[j].id == id) {
                audio[j].currentTime = 0;
                audio[j].play();
            }
        }
    });
}


document.addEventListener("keydown", function(name) {
    var keyCode = name.keyCode;

    for(var i = 0; i < button.length; i++) {
        if(button[i].id == keyCode&&audio[i].id == keyCode) {
            clear();
            button[i].classList.add("playing")
            audio[i].currentTime = 0;
            audio[i].play();;
        }
    }
});


/*Код автора

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);*/
