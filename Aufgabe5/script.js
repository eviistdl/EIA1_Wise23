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
    'Du sitzt den ganzen Tag unter deiner Decke. Irgendwann hörst du draußen etwas, was tust du: "nachschauen" oder "verstecken"?',
    "nachschauen",
    "verstecken",
    "Du trittst vor die Tür und schaust dich um. Plötzlich bemerkst du was das Geräusch war. Du schaffst es nicht zu entkommen, wirst von einer Dachlawine begraben und stirbst :(",
    "Wie erstarrt sitzt du weiterhin unter deiner Decke. Eine Dachlawine lässt dich aufschrecken, doch der restliche Tag bleibt ereignislos. Glückwunch, du hast überlebt!:)"
]

console.log("test");
let SurviveYourDay = prompt(startArray[0])

if (SurviveYourDay == startArray[1]) {
    alert("ENDE. Du fällst die Treppe runter und stirbst.");
}

if (SurviveYourDay == startArray[2]) {
    const answerZwei = myLocation(UniArray[0]);
    if (answerZwei == UniArray[1]) {
        alert(UniArray[3]);
    }
    else if (answerZwei == UniArray[2]) {
        alert(UniArray[4]);
    }
}

if (SurviveYourDay == startArray[3]) {
    const answerThree = myLocation(meinZimmerArray[0])
    if (answerThree == meinZimmerArray[1]) {
        alert(meinZimmerArray[3])
    }
    else if (answerThree == meinZimmerArray[2]) {
        alert(meinZimmerArray[4])
    }

}

else {
    alert("Error. Load again.");
} 

function myLocation(Story) {
    return prompt(Story)
}