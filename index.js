
// const ss = document.querySelectorAll(".drum").length;

// for (i = 0 ; i<ss ; i++){

//     document.querySelectorAll("button")[i].addEventListener("click",hanldeClick)
// }


    



// function hanldeClick(){
//     alert("The button is pressed")
//    
// }


const ss = document.querySelectorAll(".drum").length;
console.log(ss)
for (i = 0 ; i<ss ; i++){

    document.querySelectorAll("button")[i].addEventListener("click",function(){
    //    this.style.color ="green";
        var buttonInnerhtml = this.innerHTML;
        makesound(buttonInnerhtml)

        buttonAnimation(buttonInnerhtml)
        
       
    })
}







//   # CONSTRUCTOR FUNCITON 

// function Housekeeper(name,age,languages,workexperience){
//     this.name = name;
//     this.age = age;
//     this.languages = languages;
//     this.workexperience = workexperience;

// }

// #  INITILIZING THE OBJECT 
// var Housekeeper = new Housekeeper1("Raja",19,["English", "Telugu","Hindi"])
// console.log(Housekeeper.housekeeper1)



// ACTIVATING THE SOUNDS WITH THE USE OF KEY BOARD BUTTONS 

document.addEventListener("keydown", function(event){
    makesound(event.key)
    buttonAnimation(event.key)
});


function makesound (key){  
    switch (key) { 
        case "w":
            var audio = new Audio('Drum Kit Starting Files/sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('Drum Kit Starting Files/sounds/kick-bass.mp3');
            audio.play();
            break;
        
        case "s":
            var audio = new Audio('Drum Kit Starting Files/sounds/snare.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('Drum Kit Starting Files/sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('Drum Kit Starting Files/sounds/tom-2.mp3');
            audio.play();
            break;
        
        case "k":
            var audio = new Audio('Drum Kit Starting Files/sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('Drum Kit Starting Files/sounds/tom-4.mp3');
            audio.play();
            break;
        
        
    
        default:
            break;
    }
}

// ADDING ANIMATION WHEN THE BUTTON PRESSED IT NEED TO CHANGE ITS OPTIMCITY AND COLOR 

function buttonAnimation(currentkey){  // The input for this taken form the line 29 , their we are going reading the button class name with using swith syntax 
    var activebutton = document.querySelector("." + currentkey);
    activebutton.classList.add("pressed"); // adding css property to the each button when it get clicked 

    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100)  //removing the css property after 100 milli seconds 
}