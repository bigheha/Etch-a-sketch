const container = document.querySelector('.container');

function deleteGrid() {
    const rows = document.querySelectorAll('div.row');
    rows.forEach(row => container.removeChild(row));
}

function drawGrid(gridSize) {
    for (i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (j = 0; j < gridSize; j++) {
            const box = document.createElement('div');
            box.addEventListener('mouseover', () => changeColor(box));
            box.classList.add('box');
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

function changeColor(a) {
    a.style.backgroundColor = 'red';
}

let size = 16;

function setSize() {
    deleteGrid();
    do {
        size = prompt('Input size of grid (less than 100)');
    }while(size > 100 || size < 1);
    drawGrid(size);

}

document.querySelector('button').addEventListener('click', () => setSize());

drawGrid(size);
