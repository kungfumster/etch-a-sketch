/********************************** 
 *LOAD DEFAULT STATE
 **********************************/
let numRows = 16;

const container = document.querySelector(`#container`);
buildGrid();


/********************************** 
 *UPDATE DIMENSIONS
 **********************************/

const dimensionBtn = document.querySelector(`#dimension-button`);
const updateButton = document.querySelector(`#update-button`)
const heightInput = document.querySelector(`#height`);

//Toggle popup visibilty
function togglePopup() {
    const box = document.querySelector(`#popup`);

    if (box.style.visibility ===`hidden`){
        box.style.visibility = `visible`;
        dimensionBtn.setAttribute(`style`, `background-color: rgb(197 207 217); box-shadow: none; `);
    } else {
        box.style.visibility = `hidden`;
        dimensionBtn.setAttribute(`style`, `background-color: none;`);
    }   

    heightInput.value = numRows;
    heightInput.focus();

}

dimensionBtn.addEventListener(`click`, () => { togglePopup(); });

//Update dimensions in popup
function updateDimensions() {
    numRows = Math.min(100,heightInput.value);
    heightInput.value = numRows;
}

//Clear all child nodes
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

updateButton.addEventListener(`click`, () => { 
    updateDimensions();
    removeAllChildNodes(container);
    buildGrid();
    heightInput.focus();
 });
 

/********************************** 
 *BUILD ETCH-A-SKETCH GRID
 **********************************/

function buildGrid() {
    //create rows
    for (let y = 0; y < numRows; y++) {
        const row = document.createElement(`div`);
        row.className = `row ${y+1}`;
        container.appendChild(row);

    }

    //create columns in rows
    const allRows = document.querySelectorAll(`.row`);

    allRows.forEach((item) => {
        for (let y = 0; y < numRows; y++) {
            const pixel = document.createElement(`div`);
            pixel.className = `pixel ${y+1}`;
            item.appendChild(pixel);
        }
    })

    const allPixels = document.querySelectorAll(`.pixel`);

    //Draw on grid
    container.addEventListener(`click`,() => {
        allPixels.forEach((item) => {
            item.addEventListener(`mouseover`, () => {
                item.setAttribute(`style`, `background-color: lightslategrey`);
            });
        })
    });
}


 


