// Audio files
var tom_1 = new Audio('sounds/tom-1.mp3');
var tom_2 = new Audio('sounds/tom-2.mp3');
var tom_3 = new Audio('sounds/tom-3.mp3');
var tom_4 = new Audio('sounds/tom-4.mp3');
var snare = new Audio('sounds/snare.mp3');
var crash = new Audio('sounds/crash.mp3');
var kick = new Audio('sounds/kick-bass.mp3');

// Click event
for(var i=0;i<document.querySelectorAll('.drum').length;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
        makeSound(this.textContent);
        buttonAnimation(this.textContent);
    }); 
}

// Key event
document.addEventListener('keydown',(e)=>{
    makeSound(e.key);
    buttonAnimation(e.key);
})

// Make sound function
const makeSound = drumKey =>{
    switch(drumKey){
        case 'w':
            tom_1.play();
        break;
        
        case 'a':
            tom_2.play();
        break;
        
        case 's':
            tom_3.play();
        break;

        case 'd':
            tom_4.play();
        break;

        case 'j':
            snare.play();
        break;

        case 'k':
            crash.play();
        break;

        case 'l':
            kick.play();
        break;

        default: console.log('error');
    }
}

const buttonAnimation = drumKey => {
    var activeButton = document.querySelector('.' + drumKey);
    activeButton.classList.add('pressed');
    setTimeout(function(){
        activeButton.classList.remove('pressed');
    },100)
}


// notes
// function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
//     this.yearsOfExperience = yearsOfExperience;
//     this.name = name;
//     this.cleaningRepertoire = cleaningRepertoire;
//     this.clean = function(){
//         alert("Cleaning in progress...");
//     }
// }

// var houseKeeper1 = new HouseKeeper(12,'Angela',['bathroom','lobby','bedroom']);