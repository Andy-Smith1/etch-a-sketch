let gridContainer = document.querySelector('#grid-container');
const div = document.querySelectorAll('div')
let newdiv;
const clearBtn = document.getElementById('clear');
const rainbowBtn = document.getElementById('rainbow');
const blackBtn = document.getElementById('black');
const smallGrid = document.querySelector('.grid16');
const mediumGrid = document.querySelector('.grid32');
const largeGrid = document.querySelector('.grid64');
let gridArea;


//CHANGE GRID SIZE
function changeGridSize (gridNumber) {
        gridArea = gridNumber * gridNumber;
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

// SEPERATE FUNCTION FOR BLACK PEN
function blackPen () {
    let gridDiv = document.querySelectorAll('.gridDiv');
    gridDiv.forEach(gridDiv => gridDiv.addEventListener('mouseover', () => {
        gridDiv.style.backgroundColor = 'black';
    }));
}


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

//CLEAR BUTTON FUNCTION
function clearAll () {
    let gridDiv = gridContainer.querySelectorAll('div')
    gridDiv.forEach(gridDiv => gridDiv.style.backgroundColor = 'white');
}

// CHOOSE GRID SIZE 
function gridSize16 () {
    let currentGrid = document.querySelectorAll('.gridDiv')
    currentGrid.forEach((div) => {
        return div.remove();
    })
    changeGridSize(16);
};

function gridSize32 () {
    let currentGrid = document.querySelectorAll('.gridDiv')
    currentGrid.forEach((div) => {
        return div.remove();
    })
    changeGridSize(32);
};

function gridSize64 () {
    let currentGrid = document.querySelectorAll('.gridDiv')
    currentGrid.forEach((div) => {
        return div.remove();
    })
    changeGridSize(64);
};

//DEFAULT GRID SIZE
changeGridSize(32);

//BUTTON EVENT LISTENERS
clearBtn.addEventListener('click', clearAll);
rainbowBtn.addEventListener('click', rainbowPen);
blackBtn.addEventListener('click', blackPen)
smallGrid.addEventListener('click', gridSize16);
mediumGrid.addEventListener('click', gridSize32);
largeGrid.addEventListener('click', gridSize64);


