function facture(){

    var a = document.getElementById("prix1").value;
    var b = document.getElementById("quantite1").value;
    var c = a * b;
    document.getElementById("resultat1").textContent = c || 0;  // Affiche 0 si vide


    var d = document.getElementById("prix2").value;
    var e = document.getElementById("quantite2").value;
    var f = d * e;
    document.getElementById("resultat2").textContent = f || 0;  


    var g = document.getElementById("prix3").value;
    var h = document.getElementById("quantite3").value;
    var i = g * h;
    document.getElementById("resultat3").textContent = i || 0;  


    var j = document.getElementById("prix4").value;
    var k = document.getElementById("quantite4").value;
    var l = j * k;
    document.getElementById("resultat4").textContent = l || 0;  

}


function somme() {
    var a = parseFloat(document.getElementById("resultat1").textContent) || 0;
    var b = parseFloat(document.getElementById("resultat2").textContent) || 0;
    var c = parseFloat(document.getElementById("resultat3").textContent) || 0;
    var d = parseFloat(document.getElementById("resultat4").textContent) || 0;

    var e = a + b+ c + d ;

    document.getElementById("resultat5").textContent = e.toFixed(2);
}
 
function reinitialiser() {
    // Réinitialisation de tous les champs de saisie
    document.querySelectorAll('input[type="text"], input[type="number"]').forEach(input => input.value = '');
    // Réinitialisation de tous les champs de résultat
    document.querySelectorAll('.result').forEach(cell => cell.textContent = '0');
}