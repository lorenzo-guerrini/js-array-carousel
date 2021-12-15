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

// Inserisce le immagini nell'images-list laterale
for (let i = 0; i < items.length; i++) {
    const image = document.createElement("div");
    image.classList.add("selector-image-" + i);

    if (i == 0) {
        image.classList.add("selected")
    } else {
        image.classList.add("unselected")
    }

    image.style.backgroundImage = "url(" + items[i] + ")";
    document.querySelector(".images-list").append(image);
}

document.querySelector(".showing-image").style.backgroundImage = "url(" + items[0] + ")";

let currentItem = 0; //indica l'elemento attualmente mostrato


document.querySelector(".arrow.up").addEventListener("click", function() {
    
})