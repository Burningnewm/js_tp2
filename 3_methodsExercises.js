// Reprendre le livre de la série d'exercices précédente.
// Ajouter une méthode displayInfo à chacun des personnages principaux du livre (on peut donner une méthode "générique" pour tout le monde, ou faire des méthodes personnalisées ; au choix).
const displayInfo = function(){
    console.log("Bonjour je m'appelle " + this.firstName + " " + this.name);
};
for (let i = 0 ; i < book.mainCharacters.length; i++){
book.mainCharacters[i].displayInfo = displayInfo;
}
book.mainCharacters[0].displayInfo();

// Ajouter une méthode displayCharactersInfo à l'objet représentant le livre. Cette méthode va utiliser les méthodes de chacun des personnages, successivement.
const displayCharactersInfo = function(){
    for (let i = 0; i < this.mainCharacters.length; i++){
    console.log(this.mainCharacters[i].displayInfo());
    }
}
book.displayCharactersInfo = displayCharactersInfo;
book.displayCharactersInfo();
// Ajouter une méthode qui renvoie vrai ou faux pour indiquer si tous les titres des chapitres commencent bien par une majuscule ou non.
const bookChapters = function(){
    for (let i = 0; i < this.chaptersList.length; i++){
        if (!(this.chaptersList[i][0] === this.chaptersList[i][0].toUpperCase())){
            return false;
        }
    }
    return true;
};
book.bookChapters = bookChapters;
console.log(book.bookChapters());
// Bonus : ajouter une méthode copy qui retourne une copie du livre. Cette copie devra être séparée de l'original : en changeant quelque chose de l'un des deux, il ne faut pas que l'autre change.
const copy = function(){
    const copy2 = {};
    for (let x in this){
        if ( typeof this[x] !== "object"){
        copy2[x] = this[x];
        }
        else {
        copy2[x]=[];
            for (y of this[x]){
                copy2[x].push(y);
            }
        }
    }
    return copy2;
};
book.copy = copy;
const bookCopy = book.copy();
console.log(book.copy());
book.title = "super";
console.log(book);
console.log(bookCopy);