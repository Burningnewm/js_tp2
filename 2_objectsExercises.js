// Exercice 1 :
// Créer une variable (un objet) book qui va stocker des informations sur le livre Harry Potter à l'école des sorciers.
// Cette variable devra contenir :
// - Le titre : Harry Potter à l'école des sorciers
// - L'année de parution : 1998
// - La liste des chapitres : Le survivant, Une vitre disparaît, Les lettres de nulle part, Le gardien des Clés, Le Chemin de Traverse, Rendez-vous sur la voie 9¾, Le Choixpeau magique, Le maître des potions, Duel à minuit, Halloween, Le match de Quidditch, Le Miroir du Riséd, Nicolas Flamel, Norbert le dragon, La Forêt interdite, Sous la trappe, et L'homme aux deux visages.
// - Une liste (un tableau) de personnages principaux initialement vide.
const book = {
    title: "Harry Potter à l'école des sorciers",
    publicationYear: 1998,
    chaptersList: ["Le survivant", "Une vitre disparaît", "Les lettres de nulle part", "Le gardien des Clés", "Le Chemin de Traverse", "Rendez-vous sur la voie 9¾", "Le Choixpeau magique", "Le maître des potions", "Duel à minuit", "Halloween", "Le match de Quidditch", "Le Miroir du Riséd", "Nicolas Flamel", "Norbert le dragon", "La Forêt interdite", "Sous la trappe",  "L'homme aux deux visages"],
    mainCharacters: []
};

// Exercice 2 :
// Créer 3 variables (3 objets) pour représenter 3 des personnages principaux : Hermione Granger, Harry Potter et Ron Weasley.
// Ces objets contiendront le nom et le prénom des personnages.
// L'objet représentant Harry Potter contiendra aussi la valeur "Vert" pour l'attribut "eyesColor".
const hermione = {
    name: "Granger",
    firstName: "Hermione"
};
const harry = {
    name: "Harry",
    firstName: "Potter",
    eyesColor: "Vert"
};
const ron = {
    name: "Weasley",
    firstName: "Ron"
};
// Exercice 3 :
// Écrire une fonction qui reçoit un livre (un objet représentant un livre) et un personnage (un objet représentant un personnage) et qui ajoute ce personnage à la fin de la liste des personnages.
function bookObject(book, character){
    book.mainCharacters.push(character);
};
// Exercice 4 :
// Utiliser la fonction précédente pour ajouter les 3 personnages de l'exercice 2 au livre de la question 1
bookObject(book, hermione);
bookObject(book, harry);
bookObject(book, ron);
console.log(book);
// Exercice 5 :
// Écrire les prénoms des personnages principaux du livre **en passant par la variable qui représente le livre**. Interdiction d'utiliser les variables de l'exercice 2.
// console.log(book); // L'objet livre
// console.log(book.mainCharacters); // Le tableau des personnages principaux
// console.log(book.mainCharacters[0]); // La première case : l'objet qui représente Hermione
// console.log(book.mainCharacters[0].firstName); // "Hermione"
for (let x in book.mainCharacters){
    console.log(book.mainCharacters[x].firstName);
};

// console.log(book.mainCharacters[0].firstName); // "Hermione"
// console.log(book.mainCharacters[1].firstName); // "Harry"
// console.log(book.mainCharacters[2].firstName); // "Ron"

// Exercice 6 :
// Combien y a-t-il de 'e' dans les titres des chapitres du livre ?
let count = 0;
for (let i = 0 ; i<book.chaptersList.length; i++){
    for (let j = 0; j<book.chaptersList[i].length; j++){
        if (book.chaptersList[i][j] === "e"){
            count++;
        }
    }
};
console.log(count);

// Exercice 7 :
// Créer un deuxième livre (de votre choix) en se basant sur le même modèle.
const book2 = {
    title: "le nouveau Harry Potter",
    publicationYear: 2021,
    chaptersList: ["La survivante", "Une vitre apparait", "Les lettres de partout", "Le gardien des portes", "Le Chemin de côté", "Rendez-vous sur la rue 9¾", "Le Chapeau moigique", "Le disciple des potions", "Duel à midi", "Helloween", "Le dernier match de Quidditch", "Le tableau du Riséd"],
    mainCharacters: []
};
// Exercice 8 :
// Créer une variable qui contient le titre du livre qui a le plus de chapitres (en utilisant les deux variable représentant les livres).
let mostChaptersTitle = book.chaptersList.length > book2.chaptersList.length ? book.title : book2.title;
console.log(mostChaptersTitle);
// Exercice 9 :
// Écrire une fonction qui reçoit un livre et qui ajoute un attribut "eyesColor" à tous les personnages du livre qui n'en ont pas déjà un. La valeur par défaut sera "Inconnue".
function eyesColor(book){
    for ( let i = 0; i < book.mainCharacters.length; i++){
    if (!("eyesColor" in book.mainCharacters[i])) {
        book.mainCharacters[i].eyesColor = "Unknown";  
    }
    }      
};
eyesColor(book);
console.log(book);