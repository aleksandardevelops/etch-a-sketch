const flexContainer = document.querySelector('.flex-container');

let slider = document.getElementById('myRange');
let output = document.querySelector('.density-output');
let containerWidth = flexContainer.clientWidth;
let containerHeight = flexContainer.clientHeight;

slider.addEventListener('input', function () {
  output.innerHTML = this.value;
  createGrid(this.value);
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
  allTiles.forEach((tile) =>
    tile.addEventListener('mouseover', () => {
      tile.style.backgroundColor = '#00343D';
    })
  );
}

output.innerHTML = slider.value;
createGrid(slider.value);
