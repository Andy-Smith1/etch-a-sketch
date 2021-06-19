let gridContainer = document.querySelector('#grid-container');
const div = document.querySelectorAll('div')
let newdiv;
const clearBtn = document.getElementById('clear');
const rainbowBtn = document.getElementById('rainbow');
const smallGrid = document.querySelector('.grid16');
const mediumGrid = document.querySelector('.grid32');
const largeGrid = document.querySelector('.grid64');


//CHANGE GRID SIZE

function changeGridSize (gridNumber) {
    let gridArea = gridNumber * gridNumber;
    for (i = 0; i <= gridArea; i++) {
        newDiv = document.createElement('div')
        newDiv.classList.add('gridDiv');
        gridContainer.appendChild(newDiv);
        gridContainer.style.gridTemplateRows = `repeat(${gridNumber},1fr)`
        gridContainer.style.gridTemplateColumns = `repeat(${gridNumber},1fr)`
    }
    let gridDiv = document.querySelectorAll('.gridDiv');
    gridDiv.forEach(gridDiv => gridDiv.addEventListener('mouseover', () => {
        gridDiv.style.backgroundColor = 'black';
    }));
}

let gridSize16 = changeGridSize;

//FUNCTION FOR RAINBOW BUTTON

function rainbowPen () {
    let gridDiv = gridContainer.querySelectorAll('div')
    gridDiv.forEach(gridDiv => gridDiv.addEventListener('mouseover', () => {
        gridDiv.style.backgroundColor = getRandomColor();
    }));
}

//RANDOW COLOR GENERATOR FOR RAINBOW EFFECT

function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);
	return `rgb(${red}, ${green}, ${blue})`;
}

//CLEAR BUTTON

function clearAll () {
    let gridDiv = gridContainer.querySelectorAll('div')
    gridDiv.forEach(gridDiv => gridDiv.style.backgroundColor = 'white');
}

// CHOOSE GRID SIZE 

// function chooseGridSize () {
//     const buttons = document.querySelectorAll('button');
//     if (buttons.classList.contains('grid16')) {
//         changeGridSize(16);
//     }

// }

// changeGridSize(64);

//BUTTON EVENT LISTENERS

clearBtn.addEventListener('click', clearAll);
rainbowBtn.addEventListener('click', rainbowPen);
// smallGrid.addEventListener('click', (e));
// mediumGrid.addEventListener('click', (e));


