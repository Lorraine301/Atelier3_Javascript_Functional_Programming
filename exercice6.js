document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("productList");
    const categoryFilter = document.getElementById("categoryFilter");
    const searchBar = document.getElementById("searchBar");
    const sortOption = document.getElementById("sortOption");
    const totalPriceDisplay = document.getElementById("totalPrice");

    let products = [];

    fetch("products.json")
        .then(response => response.json())
        .then(data => {
            products = data;
            populateCategories();
            displayProducts(products);
        })
        .catch(error => console.error("Erreur de chargement des produits :", error));

    function populateCategories() {
        const categories = [...new Set(products.map(p => p.category))];
        categoryFilter.innerHTML = '<option value="">Toutes les catégories</option>';
        categories.forEach(category => {
            let option = document.createElement("option");
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });
    }

    function displayProducts(filteredProducts) {
        productList.innerHTML = "";
        filteredProducts.forEach(product => {
            let productCard = document.createElement("div");
            productCard.classList.add("product-item");
            
            let img = document.createElement("img");
            img.src = product.image;
            img.alt = product.name;
            img.classList.add("product-image");

            if (product.stock < 5) {
                let badge = document.createElement("div");
                badge.classList.add("low-stock-badge");
                badge.textContent = "⚠️Faible en stock";
                productCard.appendChild(badge);
            }
    
            let info = document.createElement("div");
            info.classList.add("product-info");
            info.innerHTML = `
                <div class="product-name">${product.name}</div>
                <div class="product-price">${product.price}DH</div>
                <div class="product-stock">Stock: ${product.stock}</div>
                <button class="info-button">Voir plus ➡</button>
            `;
    
            productCard.appendChild(img);
            productCard.appendChild(info);
            productList.appendChild(productCard);
        });
    }

    function filterProducts() {
        let filtered = products;
        if (categoryFilter.value) {
            filtered = filtered.filter(p => p.category === categoryFilter.value);
        }
        if (searchBar.value) {
            filtered = filtered.filter(p => p.name.toLowerCase().includes(searchBar.value.toLowerCase()));
        }
        if (sortOption.value === "price") {
            filtered.sort((a, b) => a.price - b.price);
        } else {
            filtered.sort((a, b) => a.stock - b.stock);
        }
        displayProducts(filtered);
    }

    function calculateTotalPrice() {
        const total = products.reduce((sum, p) => sum + p.price * p.stock, 0);
        totalPriceDisplay.textContent = `Prix total des produits: ${total}€`;
    }

    categoryFilter.addEventListener("change", filterProducts);
    searchBar.addEventListener("input", filterProducts);
    sortOption.addEventListener("change", filterProducts);
    document.getElementById("calculateTotal").addEventListener("click", calculateTotalPrice);
});
