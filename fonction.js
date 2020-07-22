// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');


// Etape 2 - Cacher l'erreur
error.style.display = 'none';

// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 1001); // On veut un nombre aléatoire de 1000 max
let coups = 0;
let nombreChoisi;

// Etape 6 - Créer la fonction vérifier
function verifier(nombre) {
    let instruction = document.createElement('div');

    if (nombre < nombreAleatoire) {
        // On veut afficher 'C'est plus'
        // Ajouter un contenu "#1 (4) c'est plus"
        // Ajouter les classes 'instruction' et 'plus'
        instruction.textContent = "#" + coups + " (" + nombreChoisi + ") C'est plus !"
        instruction.className   = "instruction plus";
        

    } else if (nombre > nombreAleatoire) {
        // On veut afficher 'C'est moins'
        // Ajouter un contenu "#1 (4) c'est moins"
        // Ajouter les classes 'instruction' et 'moins'
        instruction.textContent = "#" + coups + " (" + nombreChoisi + ") C'est moins !"
        instruction.className   = "instruction moins"
    } else {
        // On veuit afficher 'Félicitations vous avez trouvé le juste prix !'
        // Ajouter un contenu "#1 (4) Bien joué"
        // Ajouter les classes 'instruction' et 'fini'
        instruction.textContent = "Félicitations, vous avez trouvé le juste prix !"
        instruction.className   = "instruction fini";
        input.disabled          = true;
    }
        document.querySelector('#instructions').prepend(instruction);
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
    if (isNaN(input.value)) {
        // Afficher le message d'erreur si input n'est pas un nombre
        error.style.display = 'block';
    } else {
        // Cacher le message d'erreur
        error.style.display = 'none';
    }
});

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
    e.preventDefault();             // On annule l'evenement par defaut du submit qui consiste a envoyer les donnees du formulaire sur une autre page

    if (isNaN(input.value) || input.value == '') { // Si quand on valide l'input contient du texte ou est vide, alors on mets la bordure en rouge
        input.style.border = '1px red solid';
    } else {
        coups++;                    // On rajoute un au nombre de tentatives de l'utilisateur
        input.style.borderColor = 'silver';
        nombreChoisi = input.value; // On stock le nombre choisi dans une variable pour vérifier le résultat
        input.value = '';           // On remet le champ de l'input à zéro
        verifier(nombreChoisi);     // On lance une fonction pour vérifier si le nombre choisi et correct
    }
});
