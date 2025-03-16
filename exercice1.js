//Programme fonctionnel const numbers = [1, 7, 10, 9, 8 , 2]; —> [2, 8 , 10]
const numbers = [1, 7, 10, 9, 8, 2];
console.log(numbers);
const evenNumbersSorted = numbers
  .filter(num => num % 2 === 0) // Filtre les nombres pairs
  .sort((a, b) => a - b); // Trie en ordre croissant

console.log(evenNumbersSorted); // affiche [2, 8, 10]
