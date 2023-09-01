const hamburgerCheckboxes = document.querySelectorAll('.hamburgerCheckbox');
const navBar = document.querySelector('#navBar');


checkAllHamburgers = () => {
    hamburgerCheckboxes.forEach(nav => {
        nav.checked = true;
    })
}

uncheckAllHamburgers = () => {
    hamburgerCheckboxes.forEach(nav => {
        nav.checked = false;
    })
}

openNav = () => {
    navBar.classList.add('nav_open');
}

closeNav = () => {
    navBar.classList.remove('nav_open');
}

hamburgerCheckboxes.forEach(nav => {
    nav.addEventListener('click', () => {
        console.log('Nav clicked!', nav.checked)
        if (nav.checked) {
            checkAllHamburgers();
            openNav();
        }
        if (!nav.checked) {
            uncheckAllHamburgers();
            closeNav();
        }
    })
})