const flexContainer = document.querySelector('.flex-container');

for (i = 0; i < 256; i++) {
  const tile = document.createElement('div');
  flexContainer.appendChild(tile);
  tile.style.backgroundColor = 'blue';
  tile.style.width = '1em';
  tile.style.height = '1em';
}
