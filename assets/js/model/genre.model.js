export const fetchGenres = async () => {
    try {
        const response = await fetch('http://localhost:3838/genres');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.error('Failed to fetch genres:', error);
        return [];
    }
}