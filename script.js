const container = document.querySelector('.container');

function changeColor(a) {
    a.style.backgroundColor = 'red';
}

for (i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (j = 0; j < 16; j++) {
        const box = document.createElement('div');
        box.addEventListener('mouseover', () => changeColor(box));
        box.classList.add('box');
        row.appendChild(box);
    }
    container.appendChild(row);
}
