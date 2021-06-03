var $car = document.querySelector('#car');

window.addEventListener('keydown', turnCar);

function turnCar(event) {
  if (event.keyCode === 38) {
    $car.className = 'north';
  }
  if (event.keyCode === 39) {
    $car.className = '';
  }
  if (event.keyCode === 40) {
    $car.className = 'south';
  }
  if (event.keyCode === 37) {
    $car.className = 'west';
  }
}
