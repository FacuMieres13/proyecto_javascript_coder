
async function fetchData() {
    try {
        const response = await fetch("../api/db_api.json");            
        const data = await response.json();
        
        console.log(data);
        
        window.peliculas = data.movies;
        console.log(window.peliculas);
        showPageContent();
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}

fetchData();
    
