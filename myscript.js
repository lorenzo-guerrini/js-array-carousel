const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

// Inserisce le immagini nell'images-list a dx
for (let i = 0; i < items.length; i++) {
    const image = document.createElement("div");
    image.classList.add("selector-image-" + i);

    if (i == 0) {
        image.classList.add("selected");
    } else {
        image.classList.add("unselected");
    }

    image.style.backgroundImage = "url(" + items[i] + ")";
    document.querySelector(".images-list").append(image);
}

// Imposta immagine, titolo e descrizione iniziali a sx
document.querySelector(".showing-image").style.backgroundImage = "url(" + items[0] + ")";

document.querySelector(".showing-image-title").innerHTML = title[0];

document.querySelector(".showing-image-text").innerHTML = text[0];

//Contatore item
let currentItem = 0;

// Funzionamento arrow up
document.querySelector(".arrow.up").addEventListener("click", function () {

    //Gestisce l'item da deselezionare a dx
    const oldItem = document.querySelector(".selector-image-" + currentItem);

    oldItem.classList.remove("selected");
    oldItem.classList.add("unselected");

    //Gestisce il contatore diminuendolo
    currentItem--;
    if (currentItem < 0) {
        currentItem = items.length - 1;
    }

    //Gestisce l'item da selezionare a dx
    const newItem = document.querySelector(".selector-image-" + currentItem);

    newItem.classList.remove("unselected");
    newItem.classList.add("selected");

    //Gestisce il comportamento degli elementi a sx
    document.querySelector(".showing-image").style.backgroundImage = "url(" + items[currentItem] + ")";

    document.querySelector(".showing-image-title").innerHTML = title[currentItem];

    document.querySelector(".showing-image-text").innerHTML = text[currentItem];
});

// Funzionamento arrow down
document.querySelector(".arrow.down").addEventListener("click", function () {

    //Gestisce l'item da deselezionare a dx
    const oldItem = document.querySelector(".selector-image-" + currentItem);

    oldItem.classList.remove("selected");
    oldItem.classList.add("unselected");

    //Gestisce il contatore aumentandolo
    currentItem++;
    if (currentItem > items.length - 1) {
        currentItem = 0;
    }

    //Gestisce l'item da selezionare a dx
    const newItem = document.querySelector(".selector-image-" + currentItem);

    newItem.classList.remove("unselected");
    newItem.classList.add("selected");

    //Gestisce il comportamento degli elementi a sx
    document.querySelector(".showing-image").style.backgroundImage = "url(" + items[currentItem] + ")";

    document.querySelector(".showing-image-title").innerHTML = title[currentItem];

    document.querySelector(".showing-image-text").innerHTML = text[currentItem];
});