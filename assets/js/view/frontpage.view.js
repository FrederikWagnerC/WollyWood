import { app } from '../script.js';
import { buildNav } from './nav.view.js';
import { findGenreByPosterId } from '../model/genre_poster_rel.model.js';
import { buildFooter } from './footer.view.js';
import { buildSinglePoster } from './posters_page.view.js';




export const buildFrontPage = async (posters) => {
    app.innerHTML = '';
    buildNav();    
    if (!document.getElementById('frontpage')) {
        const frontPageElement = document.createElement('div');
        frontPageElement.id = 'frontpage';
        app.appendChild(frontPageElement);
    } 
    const frontPage = document.getElementById('frontpage');
    frontPage.innerHTML = '';

    const frontPageHeader = document.createElement('img');
    frontPageHeader.src = 'assets/images/header.png';
    frontPageHeader.alt = 'header';
    frontPageHeader.id = 'header';
    frontPage.appendChild(frontPageHeader);

    const frontpageLatest = document.createElement('div');
    frontpageLatest.id = 'latest';
    frontPage.appendChild(frontpageLatest);

    const frontpageLatestHeader = document.createElement('h2');
    frontpageLatestHeader.textContent = 'Fire tilfældige...';
    frontpageLatest.appendChild(frontpageLatestHeader);
    
    const randomPosters = await posters.sort(() => 0.5 - Math.random()).slice(0, 4);
    
    for (const poster of randomPosters) {
        
        const frontpageLatestPoster = document.createElement('div');
        frontpageLatestPoster.className = 'poster';
        frontpageLatest.appendChild(frontpageLatestPoster);
    
        const frontpageLatestPosterImg = document.createElement('img');
        frontpageLatestPosterImg.src = poster.image;
        frontpageLatestPosterImg.alt = poster.title;
        frontpageLatestPoster.appendChild(frontpageLatestPosterImg);
    
        const frontpageLatestPosterTitle = document.createElement('h3');
        frontpageLatestPosterTitle.textContent = poster.name;
        frontpageLatestPoster.appendChild(frontpageLatestPosterTitle);
    
        const frontpageLatestPosterDescription = document.createElement('pre');
        frontpageLatestPosterDescription.innerHTML = poster.description;
        frontpageLatestPoster.appendChild(frontpageLatestPosterDescription);
    
        const frontpageLatestPosterGenre = document.createElement('p');
        const genre = await findGenreByPosterId(poster.id);
        frontpageLatestPosterGenre.textContent = 'Genre:' + ` ` + genre; 
        frontpageLatestPoster.appendChild(frontpageLatestPosterGenre);
    
        const frontpageReadMore = document.createElement('button');
        frontpageReadMore.textContent = 'Læs mere';
        frontpageReadMore.addEventListener('click', async () => {
            buildSinglePoster(poster);
        });
        frontpageLatestPoster.appendChild(frontpageReadMore);
    
        const frontpageLatestPosterButton = document.createElement('button');
        const buttonImage = document.createElement('img');
        buttonImage.src = 'assets/images/like.svg';
        buttonImage.alt = 'Like';
        frontpageLatestPosterButton.appendChild(buttonImage);
        frontpageLatestPoster.appendChild(frontpageLatestPosterButton);
    }


    buildFooter();
    

}