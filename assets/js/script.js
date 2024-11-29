import { postersFetch } from "./model/posters.model.js";
import { buildFrontPage } from "./view/frontpage.view.js";
import { fetchGenres } from "./model/genre.model.js";
import { fetchGenrePosterRel } from "./model/genre_poster_rel.model.js";
import { buildPostersPage } from "./view/posters_page.view.js";

export const app = document.getElementById('app');
export const posters = await postersFetch();
// postersFetch('15')

buildFrontPage(posters);
// buildPostersPage(posters);
fetchGenres();
fetchGenrePosterRel();


