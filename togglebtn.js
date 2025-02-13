const togglebutton = document.getElementById('togglebutton');
const navlinks = document.getElementById('navlinks');
const remove = document.getElementsByClassName('toggle__cross__icon') [0];


togglebutton.addEventListener('click', () => {
    navlinks.classList.toggle('active');
});
remove.addEventListener('click', () => {
    navlinks.classList.remove('active')
});

