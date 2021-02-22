import "./styles.scss";

const openMenu = document.querySelector('#nav-top-right-open');
const closeMenu = document.querySelector('#nav-top-right-close');

openMenu.addEventListener('click', () => { 
    document.body.classList.add('menu-open');
})

closeMenu.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
})


const links = document.querySelectorAll('#menu-inner-right-container a');
const images = document.querySelectorAll('.menu-inner-left-img');

let currentZIndex = 3;
let currentImage = images[0];

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        const image = [...images].find(image => {
            return image.dataset.id === link.dataset.id
        })

        if(currentImage === link) return

        image.style.transition = "null";
        image.style.opacity = 0;
        image.style.zIndex = currentZIndex++;

        setTimeout(() => {
            image.style.opacity = 1;
            image.style.transition = "opacity 700ms ease";
        }, 1);

        currentImage = link;
    })
})