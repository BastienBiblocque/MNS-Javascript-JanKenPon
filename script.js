coup = ['Pierre', 'Feuille', 'Ciseaux'];
scoreIa = 0;
scoreUsers = 0;

function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function play(playerValue){
    iaValue = getRandomInt();
    document.getElementById("jeuIA").innerHTML = coup[iaValue];
    document.getElementById("jeuPlayer").innerHTML = coup[iaValue];
    resultats = null;

    if (playerValue === iaValue) {
        resultats = 'Egalité';
    } else if( (playerValue === 0 && iaValue === 2) || (playerValue === 1 && iaValue === 0) || (playerValue === 2 && iaValue === 1) ){
        scoreUsers++;
        resultats = 'Vous gagnez';
    } else {
        scoreIa++;
        resultats = 'Vous perdez';

    }
    document.getElementById("displayResults").innerHTML = resultats;
    document.getElementById("scoreIa").innerHTML = scoreIa;
    document.getElementById("scoreUsers").innerHTML = scoreUsers;

    if (scoreUsers === 5){
        document.getElementById("isWin").style.display = "block";
        lockGame();
    }
    else if (scoreIa === 5){
        document.getElementById("isLoose").style.display = "block";
        lockGame();
    }
}

function lockGame() {
    document.getElementById("gameContainer").style.display = "none";
}
function retry() {
    scoreIa = 0;
    scoreUsers = 0;
    document.getElementById("displayResults").innerHTML = resultats;
    document.getElementById("scoreIa").innerHTML = scoreIa;
    document.getElementById("scoreUsers").innerHTML = scoreUsers;
    document.getElementById("gameContainer").style.display = "block";
}