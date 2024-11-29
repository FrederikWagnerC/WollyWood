import { buildFrontPage } from "../view/frontpage.view.js";
import { buildPostersPage } from "../view/posters_page.view.js";
import { postersFetch } from "../model/posters.model.js";

export const navClick = async (item) => {
    const posters = await postersFetch();
    switch (item) {
        case 'Forside':
            buildFrontPage(posters);
            break;
        case 'Plakater':
            buildPostersPage(posters);
            break;
        case 'Om Os':
            console.log('Om Os');
            break;
        case 'Kontakt Os':
            console.log('Kontakt Os');
            break;
        case 'Login':
            console.log('Login');
            break;
    }
}