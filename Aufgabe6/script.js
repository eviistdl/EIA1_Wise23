let startArray = [
    'Überlebe den Tag: Du bekommst einen Anruf, in dem es heißt du wirst sterben. Wohin gehst du: "Keller" "Uni" "mein Zimmer"',
    "Keller",
    "Uni",
    "mein Zimmer"
]

let UniArray = [
    'Dein Tag verläuft ohne Probleme. Doch auf dem Rückweg hörst du etwas im Gebüsch. Was tust du:"nachschauen" oder "rennen"',
    "nachschauen",
    "rennen",
    "Du schlüpfst hinter das Gebüsch, aber findest dort nichts. Gerade als du zurück auf den Weg willst, merkst du, dass du einem außer Kontrolle geratenen Auto ausgewichen bist. Du kommst unversehrt zuhause an. Glückwunsch, du hast überlebt!",
    "Du rennst so schnell du kannst und lässt dabei das Gebüsch nicht aus den Augen. Dabei übersiehst du ein Auto, wirst angefahren und stirbst :("
]
let meinZimmerArray = [
    'Du sitzt den ganzen Tag unter deiner Decke. Irgendwann hörst du draußen etwas, was tust du: "nachgucken" oder "verstecken"?',
    "nachgucken",
    "verstecken",
    "Du trittst vor die Tür und schaust dich um. Plötzlich bemerkst du was das Geräusch war. Du schaffst es nicht zu entkommen, wirst von einer Dachlawine begraben und stirbst :(",
    "Wie erstarrt sitzt du weiterhin unter deiner Decke. Eine Dachlawine lässt dich aufschrecken, doch der restliche Tag bleibt ereignislos. Glückwunch, du hast überlebt!:)"
]

state = 0;

const input = document.querySelector(".InputForm_field")
const output = document.getElementById("output")

input.addEventListener("keydown", function (event) {
    if (event.key == "Enter" && state == 0){
        if (input.value == "Uni"){
            output.innerHTML =  UniArray[0]
            state++
        } else if (input.value == "mein Zimmer") {
            output.innerHTML = meinZimmerArray[0]
            state++
        } else if (input.value == "Keller") { 
            output.innerHTML = "ENDE. Du fällst die Treppe runter und stirbst."
        }
    }
})

input.addEventListener("keydown", function (event) {
    if (event.key == "Enter" && state == 1){
        if (input.value == "nachschauen"){
            output.innerHTML =  UniArray[3]
            state++
        } else if (input.value == "rennen") {
            output.innerHTML = UniArray[4]
            state++
        } else if (input.value == "nachgucken") {
            output.innerHTML = meinZimmerArray[3]
            state++
        } else if (input.value == "verstecken") {
            output.innerHTML = meinZimmerArray[4]
            state++
        }
    }
})

