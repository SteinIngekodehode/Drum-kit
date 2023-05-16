const drumkitEl = document.querySelector("#drumkit") /*finne elementet med ID via query*/


drumkitEl.addEventListener("click", function (event) { /*få elementet til å lytte etter klikk*/
console.log(event.target)
if (event.target.tagName === "BUTTON"){   /*henter button i Html*/
    soundSelecter(event.target.innerText) /*sender verdien vi mottok via "event" videre til soundselector*/

}
})


/*window.addEventListener('keydown', playSound);*/



function soundSelecter(instrumentName){ 
console.log(instrumentName)
    
    
    const clapperSound = document.createElement("audio")
    clapperSound.src = `audio/${instrumentName}.wav` /*her er lyden*/
    
        clapperSound.play()  /*spel av lyden*/ 
    } 


 /* knytte kver lyd opp mot ein tast*/
 /* lage ein funksjon som speler av lyden til tilknytta tast når den blir trykka på /*   
 */