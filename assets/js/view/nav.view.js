import { app } from "../script.js";
import { navClick } from "../controller/nav.controller.js";

export const buildNav = () => {
    if (!document.getElementById('nav')) {
        const navElement = document.createElement('nav');
        navElement.id = 'nav';
        app.appendChild(navElement);
    }
    const nav = document.getElementById('nav');
    nav.innerHTML = '';

    const navItems = ['Forside', 'Plakater', 'Om Os', 'Kontakt Os', 'Login'];
    const navLogo = document.createElement('img');
    navLogo.src = 'assets/images/logo.svg';
    navLogo.alt = 'logo';
    navLogo.id = 'logo';
    nav.appendChild(navLogo);

    const ul = document.createElement('ul');
    nav.appendChild(ul);
    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = item;
        a.addEventListener('click', (e) => {
            e.preventDefault();
            navClick(item);
        }
        );
        li.appendChild(a);
        ul.appendChild(li);
    });
    const basket = document.createElement('img');
    basket.src = 'assets/images/basket.svg';
    basket.alt = 'basket';
    basket.id = 'basket';
    ul.appendChild(basket);

}