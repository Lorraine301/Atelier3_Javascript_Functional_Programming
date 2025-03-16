//le nombre maximum
const numbers = [1, 7, 10, 9, 8];
console.log(numbers);

const maxNumber = numbers.reduce((max, num) => num > max ? num : max, numbers[0]);//Expression conditionnelle qui vérifie si num>max alors maxNumbre=num ,sinon maxNumber=max

console.log("max:"+maxNumber); //affiche le maximum dans le tableau