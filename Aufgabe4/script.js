let SurviveYourDay = prompt('Überlebe den Tag: Du bekommst einen Anruf, in dem es heißt du wirst sterben. Wohin gehst du:"Keller" "Uni" "mein Zimmer"');



if (SurviveYourDay == "Keller") {
   alert("ENDE. Du fällst die Treppe runter und stirbst.");

} else if (SurviveYourDay == "Uni") {
    let answerZwei = prompt('Dein Tag verläuft ohne Probleme. Doch auf dem Rückweg hörst du etwas im Gebüsch. Was tust du:"nachschauen" oder "rennen"');
    if (answerZwei == "nachschauen"){
        alert("Du schlüpfst hinter das Gebüsch, aber findest dort nichts. Gerade als du zurück auf den Weg willst, merkst du, dass du einem außer Kontrolle geratenen Auto ausgewichen bist. Du kommst unversehrt zuhause an. Glückwunsch, du hast überlebt!");
    }
    else if (answerZwei == "rennen"){
        alert("Du rennst so schnell du kannst und lässt dabei das Gebüsch nicht aus den Augen. Dabei übersiehst du ein Auto, wirst angefahren und stirbst :(");
    }

} else if (SurviveYourDay == "mein Zimmer") {
    let answerThree = prompt('Du sitzt den ganzen Tag unter deiner Decke. Irgendwann hörst du draußen etwas, was tust du: "nachschauen" oder "verstecken"')
    if (answerThree == "nachschauen"){
        alert("Du trittst vor die Tür und schaust dich um. Plötzlich bemerkst du was das Geräusch war. Du schaffst es nicht zu entkommen, wirst von einer Dachlawine begraben und stirbst :() ")
    }
    else if (answerThree == "verstecken"){
        alert("Wie erstarrt sitzt du weiterhin unter deiner Decke. Eine Dachlawine lässt dich aufschrecken, doch der restliche Tag bleibt ereignislos. Glückwunch, du hast überlebt!:)")
    }

} else {
   alert("Error. Load again.");
} 
 
