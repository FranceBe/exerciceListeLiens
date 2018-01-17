/*
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];
document.title = "Activité 2";

function displayConfirmation (nomLien){
    var messageInformationElt = document.createElement("div");
    messageInformationElt.textContent = "Le lien \"" + nomLien + "\" a bien été ajouté";
    messageInformationElt.style.backgroundColor = "#D6ECF7";
    messageInformationElt.style.color = "#5B8B99";
    messageInformationElt.style.paddingTop = "10px";
    messageInformationElt.style.paddingBottom = "10px";
    messageInformationElt.style.paddingLeft = "10px";
    messageInformationElt.style.marginLeft = "40px";
    messageInformationElt.style.marginBottom = "10px";
    document.getElementById("contenu").replaceChild(messageInformationElt, document.getElementById("formulaire"));
    document.getElementById("contenu").insertBefore(buttonAjouterLienElt, listeElt);
    setTimeout(function () {
        var messageSupprime = document.getElementById("contenu").removeChild(messageInformationElt);
    },
    2000);
}

function onSubmitForm (event) {
    event.preventDefault();
    var form = event.target;
    var newAuteur = form.elements.formAuteur.value;
    var newNom = form.elements.formNom.value;
    var newUrl = form.elements.formUrl.value;
    if (!newUrl.includes("http")){
        var newUrl = "http://" + form.elements.formUrl.value;
    }

    // Ajout URL
    var newLienElt = displayLink(newAuteur, newUrl, newNom);
    var firstChild = listeElt.children[0];
    listeElt.insertBefore(newLienElt, firstChild);
    displayConfirmation(newNom);
}

function afficherLesFormulaire() {
    var formulairesElt = document.createElement("form");
    formulairesElt.id = "formulaire";
    formulairesElt.style.paddingLeft = "40px";
    formulairesElt.addEventListener("submit", onSubmitForm);

    var formNomElt = document.createElement("input");
    formNomElt.id = "formNom";
    formNomElt.placeholder = "Entrez le nom du site";
    formNomElt.required = "required";
    formNomElt.style.marginRight = "5px";

    var formUrlElt = document.createElement("input");
    formUrlElt.id = "formUrl";
    formUrlElt.placeholder = "Entrez l'url du site";
    formUrlElt.required = "required";
    formUrlElt.style.marginRight = "5px";

    var formAuteurElt = document.createElement("input");
    formAuteurElt.id = "formAuteur";
    formAuteurElt.required = "required";
    formAuteurElt.placeholder = "Entrez l'auteur du site";
    formAuteurElt.style.marginRight = "5px";

    var buttonConfirmerAjoutElt = document.createElement("input");
    buttonConfirmerAjoutElt.type = "submit";
    buttonConfirmerAjoutElt.textContent = "Ajouter";
    buttonConfirmerAjoutElt.style.marginRight = "5px";

    document.getElementById("contenu").replaceChild(formulairesElt, buttonAjouterLienElt);
    document.getElementById("formulaire").appendChild(formAuteurElt);
    document.getElementById("formulaire").appendChild(formNomElt);
    document.getElementById("formulaire").appendChild(formUrlElt);
    document.getElementById("formulaire").appendChild(buttonConfirmerAjoutElt);
};

function displayLink (auteur, url, nom) {
    var lienElt = document.createElement("li");
    lienElt.style.backgroundColor = "#ffffff";
    lienElt.style.marginBottom = "20px";
    lienElt.style.listStyle = "none";
    lienElt.style.paddingLeft = "10px";
    lienElt.style.paddingBottom = "10px";
    lienElt.style.paddingTop = "10px";

    var nomElt = document.createElement("a");
    nomElt.textContent = nom + " ";
    nomElt.href = url;
    lienElt.appendChild(nomElt);
    nomElt.style.color = "#428bca";
    nomElt.style.fontWeight = "bold";
    nomElt.style.fontSize = "20px";
    nomElt.style.textDecoration = "none";

    var urlElt = document.createElement("span");
    urlElt.textContent = url;
    urlElt.href = url;
    lienElt.appendChild(urlElt);
    urlElt.style.fontSize = "17px";
    urlElt.style.color = "black";
    urlElt.style.textDecoration = "none";

    var auteurElt = document.createElement("div");
    auteurElt.textContent = "Ajouté par " + auteur;
    lienElt.appendChild(auteurElt);
    auteurElt.style.fontSize = "15px";

    return lienElt;
}

var buttonAjouterLienElt = document.createElement("button");
buttonAjouterLienElt.textContent = "Ajouter un lien";
buttonAjouterLienElt.style.marginLeft = "40px";
buttonAjouterLienElt.addEventListener("click", afficherLesFormulaire);


var titreElt = document.querySelector("h1");
titreElt.id = "titre"
titreElt.textContent = "Activité 2";
titreElt.style.marginLeft = "40px";
var listeElt = document.createElement("ul"); // Création d'un élément ul
listeElt.id = "liste"; // Définition de son identifiant
//for (var i=0; i<listeLiens.length; i++)

listeLiens.forEach(
    function (lien) { // callback
        var lienElt = displayLink(lien.auteur, lien.url, lien.titre);
        listeElt.appendChild(lienElt);
    }
)
document.getElementById("contenu").appendChild(buttonAjouterLienElt);
document.getElementById("contenu").appendChild(listeElt); // Insertion du nouvel élément
