/* array med lydfiler:*/
const soundFolder = "/sounds" [
    "clap.wav",
    "hihat.wav",
    "kick.wav",
    "openhat.wav",
    "ride.wav",
    "snare.wav",
    "tink.wav",
    "tom.wav"
]

/* array med keys*/



const drumkitContainer = document.getElementById("drumkit");


/*Lag ein button og audio  element med eventListener og returnerer elementet*/

function drum(soundFolderAndFilename) {
    const button = document.createElement("button")
    button.textContent = soundFolderAndFilename

    button.addEventListener("click", () => {
    sound.play()
})

    return button
}

/* loop gjennom soundlist arrayet og returnerer et nytt array som inneholder: en button*/

const drumkitElements = soundList.map((sound) => {
return drum(soundFolder + sound)
})



/* pakk opp innholdet fra arrayet slik at det kan appendes til drumkitContainer
drumkitContainer.append(...drumkitElements)*/

drumkitContainer.append(...drumkitELements)

window.addEventListener("keydown", (event) => {

    /*key: gir oss bokstaaven*/
    /*code: gir oss også bokstaven(behandler NumLock annerledes)*/


})