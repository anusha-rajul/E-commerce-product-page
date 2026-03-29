let currentIndex = 1;



function change_image(img, index) {
    currentIndex = index;
    let main_image = document.querySelector('.main_image');
    main_image.src = `images/image-product-${index}.jpg`;

    document.querySelectorAll('.thumb').forEach((t) => {
        t.classList.remove('active');
    });
    img.classList.add('active')

}

function openModal() {
    let modalImage = document.querySelector('#modalImage');
    modalImage.src = `images/image-product-${currentIndex}.jpg`;

    let myModal = new bootstrap.Modal(document.querySelector('#imageModal'));
    myModal.show();
}

function next_image() {
    currentIndex = currentIndex === 4 ? 1 : currentIndex + 1;
    updateModalImage();
}

function previous_image() {
    currentIndex = currentIndex === 1 ? 4 : currentIndex - 1;
    updateModalImage()
}

function updateModalImage() {
    let main_image = document.querySelector('.main_image');
    main_image.src = `images/image-product-${currentIndex}.jpg`;
    
    let modalImage = document.querySelector('#modalImage');
    modalImage.src = `images/image-product-${currentIndex}.jpg`;
}

let number = 0;
function increase_number() {
    number += 1;
    writeInnerHtml(number)
}

function decrease_number() {
    number = number === 0 ? 0 : number -= 1;
    writeInnerHtml(number)
}

function writeInnerHtml(num) {
    let number_span = document.querySelector('#number_span');
    number_span.innerHTML = num;
}


let menu = document.querySelector('#menu');
let navItems = document.querySelector('.list-items')

menu.addEventListener('click', () => {
    navItems.classList.add('show-menu');
    navItems.classList.remove('d-none');
})

let closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
    navItems.classList.remove('show-menu');
   
})