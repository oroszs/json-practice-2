const getJSON = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=500/';
    const response = await fetch(url);
    return await response.json();
}
const getSpecificJSON = async (dropdown) => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${dropdown.value}`;
    const response = await fetch(URL);
    return await response.json();
}