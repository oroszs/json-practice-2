window.onload = () => init();
const init = () => {
    let dropdown = document.querySelector('#pokemon');
    dropdown.addEventListener('change', (event) => {
        getSpecificJSON(event.target).then((obj) => {
            createDisplayDiv(obj);
        });
    });
    getJSON().then(obj => logOBJ(obj, dropdown));
}
const logOBJ = (obj, dropdown) => {
    obj.results.forEach(index => {
        const nameOption = document.createElement('option');
        nameOption.textContent = index.name;
        dropdown.appendChild(nameOption);
    });

}
const createDisplayDiv = (obj) => {
    console.log(obj);
    let mainTile = document.createElement('div');
    mainTile.className += 'tile-div';
    let imgTag = document.createElement('img');
    imgTag.className += 'tile-img';
    imgTag.src = obj.sprites.versions["generation-v"]["black-white"].animated.front_default;
    mainTile.appendChild(imgTag);
    let display = document.querySelector('#display-div');
    display.prepend(mainTile);
}