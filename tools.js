function displayCard (element) {
    element.style.display = "block";
    element.scrollIntoView();
}

/*
 * Affiche le contenu d'un tableau de type Array à la fin courante du document html.
 * Le résultat est présenté sous forme de table HTML dans d'un bloc de type "cartouche".
 * Paramètres: le tableau (type Array) à afficher. La fonction est prévue pour admettre un
 *  tableau à une dimension ne contenant que des éléments directement affichables (nombres, chaines) ;
 *  pour tout autre type d'élément, le comportement n'est pas garanti.
 * Retour :
 */

function displayArray (tab) {
    let element = document.getElementById ('result');
    displayCard (element);
    let out = '<table class="display">\n<tr>\n';
    tab.forEach ((item, index) => {
        out += '<td class="border-blue">' + item + '</td>\n';
    });
    out += '</tr>\n</table>\n';
    element.innerHTML = out;
}


/*
 * Affiche un résultat à la fin courante du document html.
 * Le résultat est présenté dans d'un bloc de type "cartouche" sous forme d'un élément "message"
 * suivi d'un élément résultat. Par exemple : "Voici mon résultat : " + le résultat proprement dit.
 * Paramètres:
 *  - message : la chaine de caractères du message.
 *  - result : le résultat à concaténer ; ce paramètre peut être une chaine ou un nombre.
 * Retour :
 */

function displayOneResult (message, result) {
    let element = document.getElementById ('result');
    displayCard (element);
    let out = '<table class="display">\n<tr>\n<td>';
    out += (message + " " + result);
    out += '</td></tr>\n</table>\n</div>';
    element.innerHTML = out;
}


/*
 * Génère aléatoirement un nombre entier entre un minimum et un maximum.
 * Paramètres: 
 *  - min : le nombre entier minimum de la plage de génération
 *  - max : le nombre entier maximum de la plage de génération
 * Retour : un nombre entier entre le min et le max choisis.
 */

function randomIntFromInterval (min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/*
 * Génère aléatoirement une série de n nombres entiers entre un minimum et un maximum.
 * Paramètres: 
 *  - n : le nombre d'entiers à générer
 *  - min : le nombre entier minimum de la plage de génération
 *  - max : le nombre entier maximum de la plage de génération
 * Retour : un tableau (Array) de nombres entiers entre le min et le max choisis.
 */

function randomArrayOfIntFromInterval (n, min, max) { // min and max included 
    let tab = [];
    for (let i=0; i<n; i++) {
        tab.push(randomIntFromInterval (min, max));
    }
    return (tab);
}


/**
 * Affiche le contenu de deux tableaux sous forme de table HTML à la fin courante du document HTML.
 * Le tableau est structuré avec deux lignes, chaque ligne représentant un des tableaux passés en paramètres.
 * 
 * Paramètres:
 *   - tab1: Premier tableau (type Array) à afficher. Il doit contenir des éléments affichables directement.
 *   - tab2: Deuxième tableau (type Array) à afficher. Doit avoir les mêmes restrictions qu'au-dessus.
 * 
 * Retour : Aucun.
 * 
 * Note : La fonction insère le tableau dans un élément HTML ayant l'ID "result".
 */

function displayTwoArrays(tab1, tab2) {
    let element = document.getElementById('result');

    // Vérifie si l'élément existe pour éviter les erreurs
    if (!element) {
        console.error("L'élément avec l'ID 'result' est introuvable.");
        return;
    }

    displayCard(element);

    let out = '<table class="display">\n';
    out += '<tr>\n';
    tab1.forEach(item => {
        out += '<td class="border-blue">' + item + '</td>\n';
    });
    out += '</tr>\n';


    out += '<tr>\n';
    tab2.forEach(item => {
        out += '<td class="border-blue">' + item + '</td>\n';
    });
    out += '</tr>\n';


    out += '</table>\n';
    element.innerHTML = out;
}
