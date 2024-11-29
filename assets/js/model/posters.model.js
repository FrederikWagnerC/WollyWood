import { buildFrontPage } from "../view/frontpage.view.js";

export const postersFetch = async (id) => {
    try {
        const response = await fetch(id ? `http://localhost:3838/posters/${id}` : 'http://localhost:3838/posters');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.error('Failed to fetch posters:', error);
        return [];
    }
}






