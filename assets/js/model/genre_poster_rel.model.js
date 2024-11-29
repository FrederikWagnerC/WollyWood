import { fetchGenres } from "./genre.model.js";

export const fetchGenrePosterRel = async () => {
    try {
        const response = await fetch('http://localhost:3838/genre_poster_rel');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.error('Failed to fetch genre_poster_rel:', error);
        return [];
    } 
}

export const findGenreByPosterId = async (id) => {
    const genrePosterRel = await fetchGenrePosterRel();
    const genreRel = genrePosterRel.find(rel => rel.poster_id === id);
    console.log(id);
    
    console.log('genreRel:', genreRel);
    
    
    if (!genreRel) {
        console.warn('No genre found for poster with id:', id);
        
        return 'Ukendt';
    }

    const genres = await fetchGenres();
    const genreName = genres.find(genre => genre.id === genreRel.genre_id)?.title;
    return genreName ? genreName : 'Ukendt';
}

export const findPostersByGenreId = async (id) => {
    const genrePosterRel = await fetchGenrePosterRel();
    const posters = genrePosterRel.filter(rel => rel.genre_id === id);
    
    return posters;
}
