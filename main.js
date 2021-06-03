var $car = document.querySelector('#car');

window.addEventListener('keydown', controlCar);

var car = {
  carLeftX: 0,
  carTopY: 0,
  moving: false,
  movingID: 0,
  direction: 'east'
};

function controlCar(event) {
  if (event.keyCode === 38) {
    $car.className = 'north';
    car.direction = 'north';
    if (car.moving === true) {
      movingCar();
    }
  }
  if (event.keyCode === 39) {
    $car.className = 'east';
    car.direction = 'east';
    if (car.moving === true) {
      movingCar();
    }
  }
  if (event.keyCode === 40) {
    $car.className = 'south';
    car.direction = 'south';
    if (car.moving === true) {
      movingCar();
    }
  }
  if (event.keyCode === 37) {
    $car.className = 'west';
    car.direction = 'west';
    if (car.moving === true) {
      movingCar();
    }
  }
  if (event.keyCode === 32) {
    if (car.moving === false) {
      if (car.direction === 'east') {
        movingCar();
      }
      if (car.direction === 'west') {
        movingCar();
      }
      if (car.direction === 'north') {
        movingCar();
      }
      if (car.direction === 'south') {
        movingCar();
      }
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
  if (car.direction === 'east') {
    var currentLocationX = carLocation().carLeftX;
    var nextLocationX = currentLocationX + 5 + 'px';
    $car.style.left = nextLocationX.toString();
  }
  if (car.direction === 'south') {
    var currentLocationY = carLocation().carTopY;
    var nextLocationY = currentLocationY + 5 + 'px';
    $car.style.top = nextLocationY.toString();
  }
  if (car.direction === 'west') {
    var currentLocationX = carLocation().carLeftX;
    var nextLocationX = currentLocationX - 5 + 'px';
    $car.style.left = nextLocationX.toString();
  }
  if (car.direction === 'north') {
    var currentLocationY = carLocation().carTopY;
    var nextLocationY = currentLocationY - 5 + 'px';
    $car.style.top = nextLocationY.toString();
  }
}

function movingCar() {
  clearInterval(car.movingID);
  var IntervalID = setInterval(moveCar, 16);
  car.movingID = IntervalID;
  car.moving = true;
}
