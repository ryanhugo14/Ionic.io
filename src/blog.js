// dropDown
const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdownMenu')
dropdownButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden')
})

const dropdownButton1 = document.getElementById('dropdownButton1');
const dropdownMenu1 = document.getElementById('dropdownMenu1');
dropdownButton1.addEventListener('click', () => {
    dropdownMenu1.classList.toggle('hidden');
});

// mobile Menu open and close
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');

openMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    openMenu.classList.toggle('hidden');
    mobileMenu.classList.add('animate__zoomIn');
})

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    openMenu.classList.toggle('hidden');
    mobileMenu.classList.remove('animate__zoomIn');
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