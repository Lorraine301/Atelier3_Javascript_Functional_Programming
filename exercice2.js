//Programme fonctionnel const numbers = [1,3 , 4]; —> [1, 6, 24]
const numbers = [1, 3, 4];
console.log(numbers);

const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);//Expression conditionnelle qui vérifie si n<=1 alors le factoriel=1 sinon il applique la formule

const factorialList = numbers.map(factorial);//pour appliquer la fonction pour chaque élément du tableau

console.log(factorialList); //affiche le nouveau tableau