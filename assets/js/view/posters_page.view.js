import { app } from '../script.js';
import { buildNav } from './nav.view.js';
import { fetchGenres } from '../model/genre.model.js';
import { buildFooter } from './footer.view.js';
import { findPostersByGenreId } from '../model/genre_poster_rel.model.js';
import { postersFetch } from '../model/posters.model.js';
import { posters } from '../script.js';


export const buildPostersPage = async (posters) => {
    app.innerHTML = '';
    buildNav();
    
    if (!document.getElementById('posterspage')) {
        const postersPageElement = document.createElement('div');
        postersPageElement.id = 'posterspage';
        app.appendChild(postersPageElement);
    }
    const postersPage = document.getElementById('posterspage');
    postersPage.innerHTML = '';

    const postersAside = document.createElement('aside');
    postersAside.id = 'postersAside';
    postersPage.appendChild(postersAside);

    const postersAsideHeader = document.createElement('h2');
    postersAsideHeader.textContent = 'Genre';
    postersAside.appendChild(postersAsideHeader);

    const postersAsideList = document.createElement('ul');
    postersAside.appendChild(postersAsideList);
    const genres = await fetchGenres();
    for (const genre of genres) {
        const genreLi = document.createElement('li');
        genreLi.textContent = genre.title;
        genreLi.addEventListener('click', async () => {
            const posters = await findPostersByGenreId(genre.id);
            const genrePosters = []

            for (const poster of posters) {
                if (genrePosters.length <= 10) {

                    genrePosters.push(await postersFetch(poster.poster_id));


                }

            }

            buildPostersByGenre(genrePosters);

        });

        postersAsideList.appendChild(genreLi);
    }



    const postersPagePosters = document.createElement('div');
    postersPagePosters.id = 'posters';
    postersPage.appendChild(postersPagePosters);




    const postersPagePostersHeader = document.createElement('h2');
    postersPagePostersHeader.textContent = 'Alle plakater';
    postersPagePostersHeader.id = 'postersHeader';
    postersPagePosters.appendChild(postersPagePostersHeader);

    const limit = 6;
    const randomPosters = await posters.sort(() => 0.5 - Math.random()).slice(0, limit);

    const posterPagePosterDiv = document.createElement('div');
    posterPagePosterDiv.id = 'postersDiv';
    postersPagePosters.appendChild(posterPagePosterDiv);

    for (const poster of randomPosters) {
        const postersPagePoster = document.createElement('div');
        postersPagePoster.className = 'poster';
        posterPagePosterDiv.appendChild(postersPagePoster);

        const postersPagePosterImg = document.createElement('img');
        postersPagePosterImg.src = poster.image;
        postersPagePosterImg.alt = poster.title;
        postersPagePosterImg.addEventListener('click', async () => {
            buildSinglePoster(poster);
        });
        posterPagePosterDiv.appendChild(postersPagePosterImg);

        const postersPagePosterTitle = document.createElement('h3');
        postersPagePosterTitle.textContent = poster.title;
        posterPagePosterDiv.appendChild(postersPagePosterTitle);


        const postersPagePrice = document.createElement('p');
        postersPagePrice.textContent = + poster.price + ' kr.';
        posterPagePosterDiv.appendChild(postersPagePrice);

        const postersPagePosterAddToBasketButton = document.createElement('button');
        postersPagePosterAddToBasketButton.textContent = 'Læg i kurv';
        posterPagePosterDiv.appendChild(postersPagePosterAddToBasketButton);

        const posterPageLikeButton = document.createElement('button');
        const buttonImage = document.createElement('img');
        buttonImage.src = 'assets/images/like.svg';
        buttonImage.alt = 'Like';
        posterPageLikeButton.appendChild(buttonImage);
        posterPagePosterDiv.appendChild(posterPageLikeButton);


    }
    buildFooter();
}


export const buildPostersByGenre = async (posters) => {
    const postersPageDiv = document.getElementById('postersDiv');
    postersPageDiv.innerHTML = '';

    const limit = 6;
    const randomPosters = await posters.sort(() => 0.5 - Math.random()).slice(0, limit);

    // console.log(randomPosters);


    for (const poster of randomPosters) {
        // console.log(poster);

        const postersPagePoster = document.createElement('div');
        postersPagePoster.className = 'poster';
        postersPageDiv.appendChild(postersPagePoster);

        const postersPagePosterImg = document.createElement('img');
        postersPagePosterImg.src = poster.image;
        postersPagePosterImg.alt = poster.title;
        postersPagePosterImg.addEventListener('click', async () => {
            buildSinglePoster(poster);
        });
        postersPagePoster.appendChild(postersPagePosterImg);

        const postersPagePosterTitle = document.createElement('h3');
        postersPagePosterTitle.textContent = poster.title;
        postersPagePoster.appendChild(postersPagePosterTitle);

        const postersPagePrice = document.createElement('p');
        postersPagePrice.textContent = + poster.price + ' kr.';
        postersPagePoster.appendChild(postersPagePrice);

        const postersPagePosterAddToBasketButton = document.createElement('button');
        postersPagePosterAddToBasketButton.textContent = 'Læg i kurv';
        postersPagePoster.appendChild(postersPagePosterAddToBasketButton);

        const posterPageLikeButton = document.createElement('button');
        const buttonImage = document.createElement('img');
        buttonImage.src = 'assets/images/like.svg';
        buttonImage.alt = 'Like';
        posterPageLikeButton.appendChild(buttonImage);
        postersPagePoster.appendChild(posterPageLikeButton);

    }
}

export const buildSinglePoster = async (poster) => {

    if (!document.getElementById('postersDiv')) {
        
        await buildPostersPage(posters)
        
    }



    const postersPageDiv = document.getElementById('postersDiv');
    postersPageDiv.innerHTML = '';

    const postersPageHeader = document.getElementById('postersHeader');
    postersPageHeader.innerHTML = '';

    const postersPagePoster = document.createElement('div');
    postersPagePoster.className = 'poster';
    postersPageDiv.appendChild(postersPagePoster);



    const postersPagePosterTitle = document.createElement('h3');
    postersPagePosterTitle.textContent = poster.name;
    postersPagePoster.appendChild(postersPagePosterTitle);

    const postersPagePosterDescription = document.createElement('p');
    postersPagePosterDescription.innerHTML = poster.description;
    postersPagePoster.appendChild(postersPagePosterDescription);

    const postersPageSize = document.createElement('p');
    postersPageSize.textContent = poster.width + ' x ' + poster.height + ' cm.';
    postersPagePoster.appendChild(postersPageSize);

    const postersPagePrice = document.createElement('p');
    postersPagePrice.textContent = + poster.price + ' kr.';
    postersPagePoster.appendChild(postersPagePrice);

    const postersPagePosterAddToBasketButton = document.createElement('button');
    postersPagePosterAddToBasketButton.textContent = 'Læg i kurv';
    postersPagePoster.appendChild(postersPagePosterAddToBasketButton);

    const posterPageLikeButton = document.createElement('button');
    const buttonImage = document.createElement('img');
    buttonImage.src = 'assets/images/like.svg';
    buttonImage.alt = 'Like';
    posterPageLikeButton.appendChild(buttonImage);
    postersPagePoster.appendChild(posterPageLikeButton);

    const postersPagePosterImg = document.createElement('img');
    postersPagePosterImg.src = poster.image;
    postersPagePosterImg.alt = poster.title;
    postersPagePoster.appendChild(postersPagePosterImg);

}

