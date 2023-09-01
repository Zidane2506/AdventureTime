// NAVBAR Toggle button

const ToggleButton = document.getElementsByClassName('toggle')[0];
const navbarItem = document.getElementsByClassName('navbar-item');
ToggleButton.addEventListener('click', function() {
    for(let i = 0; i < navbarItem.length; i++) {
        navbarItem[i].classList.toggle('active');
    }
});