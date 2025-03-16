/*divise le texte en lignes, convertit chaque ligne en majuscules
filtre les lignes contenant la lettre "I", puis les imprime.*/
const text = `
Bonjour
Immutable
Programme
Iteration
Fonction
`;
console.log(text);

const result = text
  .split('\n')//divise le texte en lignes
  .map(line => line.toUpperCase())//transforme chaque ligne en majuscules
  .filter(line => line.includes('I'));//filtre  les lignes contenant la lettre"I"

console.log(result.join('\n'));//Affiche en majuscules les lignes filtrées