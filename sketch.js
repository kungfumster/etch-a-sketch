const container = document.querySelector(`#container`);

let numColumns = 3;
let numRows = 3;

//create rows
for (let y = 0; y < numColumns; y++) {
    const row = document.createElement(`div`);
    row.className = `row ${y+1}`;
    container.appendChild(row);

}

//create columns in rows
const allRows = document.querySelectorAll(`.row`);

allRows.forEach((item) => {
    for (let y = 0; y < numColumns; y++) {
        const pixel = document.createElement('div');
        pixel.className = `pixel ${y+1}`;
        item.appendChild(pixel);
    }
})

const allPixels = document.SetElementsByClassName(`pixel`);
console.log(allPixels);
allPixels.forEach((item) => {
    item.addEventListener(`mouseover`, () => {
        item.setAttribute(`background-color: blue`);
    });
})


