//Programme fonctionnel, calculle prix total de tous les produits TTC (25 % TVA ).
const products = [
    { name: "Shirt", price: 20 },
    { name: "Shoes", price: 50 },
    { name: "Hat", price: 15 }
  ];
  
  const totalTTC = products.reduce((total, product) => total + product.price * 1.25, 0);//reduce() qui additionne le prix TTC (prix * 1.25) 
  console.log(totalTTC.toFixed(2));//toFixed(2) formate le résultat à deux chiffres après virgule
  
