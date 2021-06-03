var $car = document.querySelector('#car');

window.addEventListener('keydown', turnCar);
window.addEventListener('keydown', startCar);

var car = {
  carLeftX: 0,
  carTopY: 0,
  moving: false,
  movingID: 0
};

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

function startCar(event) {
  if (event.keyCode === 32) {
    if (car.moving === false) {
      var IntervalID = setInterval(moveCar, 16);
      car.movingID = IntervalID;
      car.moving = true;
    } else {
      clearInterval(car.movingID);
      car.moving = false;
    }
  }
}

function carLocation() {
  car.carLeftX = $car.getBoundingClientRect().x;
  car.carTopY = $car.getBoundingClientRect().y;
  return car;
}

function moveCar() {
  var currentLocationX = carLocation().carLeftX;
  // var currentLocationY = carLocation().carTopY;
  var nextLocationX = currentLocationX + 5 + 'px';
  // var nextLocationY = currentLocationY + 1 + 'px';
  $car.style.left = nextLocationX.toString();
  // $car.style.top = nextLocationY.toString();
}
