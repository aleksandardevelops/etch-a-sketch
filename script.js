const flexContainer = document.querySelector('.flex-container');

let slider = document.getElementById('myRange');
let output = document.querySelector('.density-output');

slider.onchange = function () {
  output.innerHTML = this.value;
  createGrid(slider.value);
};

function createGrid(size) {
  flexContainer.innerHTML = '';
  for (let i = 0; i < size; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    flexContainer.appendChild(row);

    for (let k = 0; k < size; k++) {
      let tile = document.createElement('div');
      tile.classList.add('tile-class');
      row.appendChild(tile);
      tile.style.backgroundColor = 'aqua';
      if (size < 20) {
        tile.style.width = '3em';
        tile.style.height = '3em';
      } else {
        tile.style.width = '0.5em';
        tile.style.height = '0.5em';
      }
      tile.style.backgroundColor = 'aqua';
    }
  }
  let allTiles = document.querySelectorAll('.tile-class');
  allTiles.forEach((tile) =>
    tile.addEventListener('mouseover', () => {
      tile.style.backgroundColor = 'black';
    })
  );
}
