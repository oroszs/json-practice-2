const getJSON = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100/';
    const response = await fetch(url);
    return await response.json();
}