const flexContainer = document.querySelector('.flex-container');

for (i = 0; i < 16; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  flexContainer.appendChild(row);

  for (k = 0; k < 16; k++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    row.appendChild(tile);

    tile.style.width = '2em';
    tile.style.height = '2em';
  }
}
