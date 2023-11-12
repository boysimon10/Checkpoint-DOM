// Fonction pour mettre à jour la quantité d'un produit dans le panier
function CaisseMAJ(produit, prix, nombreProduit) {
    // Récupère l'élément d'entrée pour la quantité du produit
    const produitInput = document.getElementById(produit + '-nombre');
    let NombreInput = parseInt(produitInput.value); 

    // Incrémente ou décrémente la quantité en fonction de "nombreProduit"
    if (nombreProduit) {
        NombreInput = NombreInput + 1;
    } else if (NombreInput > 0) {
        NombreInput = NombreInput - 1;
    }
    
    // Met à jour la valeur de l'entrée de quantité
    produitInput.value = NombreInput;

    // Met à jour le total
    const totalInput = document.getElementById(produit + '-total');
    totalInput.innerText = NombreInput * prix;
    calculateTotal(); // Appelle la fonction pour mettre à jour le total général
}

// Fonction pour récupérer la valeur de l'entrée de quantité d'un produit
function getInputvalue(produit) {
    const Input = document.getElementById(produit + '-nombre');
    if (Input) {
        const Number = parseInt(Input.value);
        return Number;
    }
    return 0; 
}

// Fonction pour récupérer le prix d'un produit
function getPriceValue(produit) {
    const prixElement = document.getElementById(produit + '-unit');
    if (prixElement) {
        const prixText = prixElement.textContent;
        const priceNumber = parseInt(prixText);
        return priceNumber;
    }
    return 0; 
}

// Fonction pour calculer le total général
function calculateTotal() {
    // Calcule le total pour chaque article et le total général
    const art1Total = getInputvalue('art1') * getPriceValue('art1');
    const art2Total = getInputvalue('art2') * getPriceValue('art2');
    const subTotal = art1Total + art2Total;

    // Met à jour les éléments d'affichage du total
    if (document.getElementById('art1-total')) {
        document.getElementById('art1-total').innerText = art1Total;
    }
    if (document.getElementById('art2-total')) {
        document.getElementById('art2-total').innerText = art2Total;
    }
    if (document.getElementById('sub-total')) {
        document.getElementById('sub-total').innerText = subTotal;
    }
}

// Fonction pour supprimer un article du panier
function removeArticle(articleId, prix, detail) {
    const articleContainer = document.getElementById(articleId);
    articleContainer.remove();

    // Met à jour le total général après la suppression de l'article
    const subTotalElement = document.getElementById('sub-total');
    const currentSubTotal = parseInt(subTotalElement.textContent);
    subTotalElement.textContent = currentSubTotal - (prix * detail);
    calculateTotal(); // Appelle la fonction pour mettre à jour le total général
}

// Ajoute un écouteur d'événement pour le bouton "Supprimer" de l'article 1
document.getElementById('art1-remove').addEventListener('click', function (e) {
    e.preventDefault();
    removeArticle('article1', getPriceValue('art1'), getInputvalue('art1'));
});

// Ajoute un écouteur d'événement pour le bouton "Supprimer" de l'article 2
document.getElementById('art2-remove').addEventListener('click', function (e) {
    e.preventDefault();
    removeArticle('article2', getPriceValue('art2'), getInputvalue('art2'));
});

// Ajoute des écouteurs d'événements pour les boutons "Plus" et "Moins" des articles
document.getElementById('art1-plus').addEventListener('click', function () {
    CaisseMAJ('art1', 400, true);
});
document.getElementById('art1-moins').addEventListener('click', function () {
    CaisseMAJ('art1', 400, false);
});

document.getElementById('art2-plus').addEventListener('click', function () {
    CaisseMAJ('art2', 400, true);
});
document.getElementById('art2-moins').addEventListener('click', function () {
    CaisseMAJ('art2', 400, false);
});

// Fonction pour gérer le changement d'icône sur le bouton "J'aime"
function isLikeButton(buttonId) {
    const likeButton = document.getElementById(buttonId);
    let isLiked = false;

    likeButton.addEventListener('click', function () {
        isLiked = !isLiked;

        // Change l'icône en fonction de l'état "aimé" ou "non aimé"
        if (isLiked) {
            // Affiche l'icône "j'aime"
            likeButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    // ... code SVG pour l'icône "j'aime"
                `;
        } else {
            // Affiche l'icône "non aimé"
            likeButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    // ... code SVG pour l'icône "non aimé"
                `;
        }
    });
}

// Appelle la fonction pour gérer le bouton "J'aime" pour les articles 1 et 2
isLikeButton('art1-like');
isLikeButton('art2-like');
