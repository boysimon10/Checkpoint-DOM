function CaisseMAJ(produit, prix, nombreProduit) {
    const produitInput = document.getElementById(produit + '-nombre');
    let NombreInput = parseInt(produitInput.value); 

    if (nombreProduit) {
        NombreInput = NombreInput + 1;
    } else if (NombreInput > 0) {
        NombreInput = NombreInput - 1;
    }
    
    produitInput.value = NombreInput;

    // MAJ total 
    const totalInput = document.getElementById(produit + '-total');
    totalInput.innerText = NombreInput * prix;
    calculateTotal();
}

function getInputvalue(product) {
    const Input = document.getElementById(product + '-nombre');
    const Number = parseInt(Input.value);
    return Number;
}

function calculateTotal() {
    const art1Total = getInputvalue('art1') * 400;
    const art2Total = getInputvalue('art2') * 200;
    const subTotal = art1Total + art2Total;


    document.getElementById('art1-total').innerText = art1Total;
    document.getElementById('art2-total').innerText = art2Total;
    document.getElementById('sub-total').innerText = subTotal;

}

function like(produit) {

}


//article 1
document.getElementById('art1-plus').addEventListener('click', function () {
    CaisseMAJ('art1', 400, true);
});
document.getElementById('art1-moins').addEventListener('click', function () {
    CaisseMAJ('art1', 400, false);
});

//article 2
document.getElementById('art2-plus').addEventListener('click', function () {
    CaisseMAJ('art2', 400, true);
});
document.getElementById('art2-moins').addEventListener('click', function () {
    CaisseMAJ('art2', 400, false);
});


