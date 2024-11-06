//for buttons click
for(var i =0 ;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click", getclicked);//to access all buttons
   
}//here function ends
 
function getclicked(){//funtion to check for sound event 
    var latter = this.innerHTML;    
    checkkey(latter);
    animationforbtn(latter);
     
   
}

 document.addEventListener("keydown",getclick);//for keyboard presses

 function getclick(keydown){
    var key = keydown.key;
     checkkey(key);//event.key is to access property of event like object property
     animationforbtn(key);
 }
 function checkkey (key){
    switch (key) {
        case "w":
             var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();

            break;
            case "a":
             var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();

            break;case "s":
            var audio = new Audio('./sounds/tom-2.mp3');
           audio.play();

           break;case "d":
           var audio = new Audio('./sounds/tom-1.mp3');
          audio.play();

          break;

          case "k":
             var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();

            break;
            case "l":
             var audio = new Audio('./sounds/snare.mp3');
            audio.play();

            break;
            case "j":
                var audio = new Audio('./sounds/snare.mp3');
               audio.play();
   
               break;
     
        default:
            
     }
 } 
 function animationforbtn(key){
     document.querySelector("."+key).classList.add("pressed");
    

     setTimeout(timeoutfunction , 100 , key);

 }
 function timeoutfunction(key){
    document.querySelector("."+key).classList.remove("pressed");
 }