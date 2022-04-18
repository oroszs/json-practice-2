window.onload = () => init();
const init = () => {
    getJSON().then(obj => logOBJ(obj));
}
const logOBJ = (obj) => {
    let nameH1 = document.createElement('h1');
    let string = '';
    obj.results.forEach(index => {
       string  += `${index.name}, `;
    });
    let newString = string.slice(0, string.length - 2);
    nameH1.textContent = newString;
    document.body.appendChild(nameH1);
}