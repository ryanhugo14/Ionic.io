// navbar Menu
const amazing = document.querySelectorAll('.amazing');
const amazingItem = document.querySelectorAll('.amazing-item');
const icons = document.querySelectorAll('.icon');
const showMmobildMenuBox = document.querySelector('.show-mobild-menu-box');
// const menuIcon = document.querySelector(".menu-icon");

amazing.forEach((ee, index) => {
    ee.addEventListener('click', () => {
        amazingItem[index].classList.toggle('hidden');
        amazingItem[index].classList.toggle('opacity-0');
        ee.classList.toggle('bg-slate-100');
        icons[index].classList.toggle('rotate-180');
    });
});

const menuIcon = () => {
    showMmobildMenuBox.classList.toggle('hidden');
};

//accdorin
const accordionBrain = document.querySelectorAll('.accordion-brain');
const accordionContent = document.querySelector('.accordion-content');
const downButton = document.querySelector('.downButton');
const upButton = document.querySelector('.upButton');

accordionBrain.forEach((accordionBrain) => {
    accordionBrain.addEventListener('click', (event) => {
        accordionBrain.classList.toggle('active-brain');
        const downButton = accordionBrain.nextElementSibling;
        const upButton = accordionBrain.nextElementSibling;
        const accordionContent = accordionBrain.nextElementSibling;

        if (accordionBrain.classList.contains('active-brain')) {
            downButton.classList.remove('hidden');
            upButton.classList.add('hidden');
            accordionContent.classList.add('hidden');
        } else {
            downButton.classList.add('hidden');
            upButton.classList.remove('hidden');
            accordionContent.classList.remove('hidden');
        }
    });
});

// Navbar Fixed and Animation
const fixedNav = document.getElementById('fixedNav');
var waypoint = new Waypoint({
    element: document.getElementById('main'),
    handler: function(direction) {
        if (direction === 'down') {
            fixedNav.classList.add(
                'fixed',
                'top-0',
                'animate__fadeInDown',
                'shadow-lg',
                'w-full',
                'left-0',
                'opacity-95'
            );
            fixedNav.classList.remove(
                'relative'
            );
        } else {
            fixedNav.classList.remove(
                'fixed',
                'top-0',
                'animate__fadeInDown',
                'shadow-lg',
                'w-full',
                'left-0',
                'opacity-95'
            );
            fixedNav.classList.add('relative');
        }
    },
    offset: '20%',
});