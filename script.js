const flexContainer = document.querySelector('.flex-container');

let slider = document.getElementById('myRange');
let output = document.querySelector('.density-output');
let containerWidth = flexContainer.clientWidth;
let containerHeight = flexContainer.clientHeight;

slider.addEventListener('input', function () {
  output.innerHTML = this.value;
  createGrid(this.value);
});

let isPainting = false;

document.body.addEventListener('mousedown', () => {
  isPainting = true;
});
document.body.addEventListener('mouseup', () => {
  isPainting = false;
});

function createGrid(size) {
  flexContainer.innerHTML = '';

  let tileSize = Math.min(containerWidth, containerHeight) / size;
  for (let i = 0; i < size; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    flexContainer.appendChild(row);

    for (let k = 0; k < size; k++) {
      let tile = document.createElement('div');
      tile.classList.add('tile-class');
      row.appendChild(tile);
      tile.style.backgroundColor = '#F0F0C9';
      tile.style.width = tileSize + 'px';
      tile.style.height = tileSize + 'px';
    }
  }
  let allTiles = document.querySelectorAll('.tile-class');
  allTiles.forEach((tile) => {
    tile.addEventListener('mousedown', (e) => {
      if (e.button === 0) {
        tile.style.backgroundColor = '#00343D';
      } else if (e.button === 2) {
        tile.style.backgroundColor = '#F0F0C9';
      }
    });

    tile.addEventListener('mouseover', (e) => {
      if (isPainting && e.buttons === 1) {
        tile.style.backgroundColor = '#00343D';
      } else if (isPainting && e.buttons === 2) {
        tile.style.backgroundColor = '#F0F0C9';
      }
    });

    tile.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  });
}

output.innerHTML = slider.value;
createGrid(slider.value);
