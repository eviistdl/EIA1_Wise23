
// index       0  1  2  3    4      5
let startArray = [
    'Überlebe den Tag: Du bekommst einen Anruf, in dem es heißt du wirst sterben. Wohin gehst du: "Keller" "Uni" "mein Zimmer"',
    "Keller",
    "Uni",
    "mein Zimmer"
]

let KellerArray = [
   "ENDE. Du fällst die Treppe runter und stirbst."
]

let UniArray = [
    'Dein Tag verläuft ohne Probleme. Doch auf dem Rückweg hörst du etwas im Gebüsch. Was tust du:"nachschauen" oder "rennen"',
    "nachschauen",
    "rennen",
    "Du schlüpfst hinter das Gebüsch, aber findest dort nichts. Gerade als du zurück auf den Weg willst, merkst du, dass du einem außer Kontrolle geratenen Auto ausgewichen bist. Du kommst unversehrt zuhause an. Glückwunsch, du hast überlebt!",
    "Du rennst so schnell du kannst und lässt dabei das Gebüsch nicht aus den Augen. Dabei übersiehst du ein Auto, wirst angefahren und stirbst :("
]

let meinZimmerArray = [
    'Du sitzt den ganzen Tag unter deiner Decke. Irgendwann hörst du draußen etwas, was tust du: "nachschauen" oder "verstecken"?',
    "nachschauen",
    "verstecken",
    "Du trittst vor die Tür und schaust dich um. Plötzlich bemerkst du was das Geräusch war. Du schaffst es nicht zu entkommen, wirst von einer Dachlawine begraben und stirbst :(",
    "Wie erstarrt sitzt du weiterhin unter deiner Decke. Eine Dachlawine lässt dich aufschrecken, doch der restliche Tag bleibt ereignislos. Glückwunch, du hast überlebt!:)"
]


let SurviveYourDay = prompt(startArray[0])

if (SurviveYourDay == startArray[1]) {
    alert(KellerArray[0]);
}

else if (SurviveYourDay == startArray[2]) {
    let answerZwei = prompt(UniArray [0]);
    if (answerZwei == UniArray[1]){
        alert(UniArray[3]);
    }
    else if (answerZwei == UniArray[2]){
        alert(UniArray[4]);
    }
}

else if (SurviveYourDay == startArray[3]) {
    let answerThree = prompt(meinZimmerArray[0])
    if (answerThree == meinZimmerArray[1]){
        alert(meinZimmerArray[3])
    }
    else if (answerThree == meinZimmerArray[2]){
        alert(meinZimmerArray[4])
    }

}

else {
    alert("Error. Load again.");
 } 

