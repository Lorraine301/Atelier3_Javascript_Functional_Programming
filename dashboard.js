document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("stockChart").getContext("2d");

    fetch("products.json")
        .then(response => response.json())
        .then(products => {
            new Chart(ctx, {
                type: "bar",
                data: {
                    labels: products.map(p => p.name),
                    datasets: [{
                        label: "Stock disponible",
                        data: products.map(p => p.stock),
                        backgroundColor: "#66B2E4"
                    }]
                }
            });
        })
        .catch(error => console.error("Erreur de chargement des produits :", error));
});
