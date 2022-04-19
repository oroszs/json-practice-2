window.onload = () => init();
const init = () => {
    getJSON().then(obj => logOBJ(obj));
}
const logOBJ = (obj) => {
    const selectList = document.querySelector('#pokemon');
    obj.results.forEach(index => {
        const nameOption = document.createElement('option');
        nameOption.textContent = index.name;
        selectList.appendChild(nameOption);
    });

}