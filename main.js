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
      clearInterval(car.movingID);
      var IntervalID = setInterval(moveCarNorth, 16);
      car.movingID = IntervalID;
      car.moving = true;
    }
  }
  if (event.keyCode === 39) {
    $car.className = 'east';
    car.direction = 'east';
    if (car.moving === true) {
      clearInterval(car.movingID);
      var IntervalID = setInterval(moveCarEast, 16);
      car.movingID = IntervalID;
      car.moving = true;
    }
  }
  if (event.keyCode === 40) {
    $car.className = 'south';
    car.direction = 'south';
    if (car.moving === true) {
      clearInterval(car.movingID);
      var IntervalID = setInterval(moveCarSouth, 16);
      car.movingID = IntervalID;
      car.moving = true;
    }
  }
  if (event.keyCode === 37) {
    $car.className = 'west';
    car.direction = 'west';
    if (car.moving === true) {
      clearInterval(car.movingID);
      var IntervalID = setInterval(moveCarWest, 16);
      car.movingID = IntervalID;
      car.moving = true;
    }
  }
  if (event.keyCode === 32) {
    if (car.moving === false) {
      if (car.direction === 'east') {
        var IntervalID = setInterval(moveCarEast, 16);
        car.movingID = IntervalID;
        car.moving = true;
      }
      if (car.direction === 'west') {
        var IntervalID = setInterval(moveCarWest, 16);
        car.movingID = IntervalID;
        car.moving = true;
      }
      if (car.direction === 'north') {
        var IntervalID = setInterval(moveCarNorth, 16);
        car.movingID = IntervalID;
        car.moving = true;
      }
      if (car.direction === 'south') {
        var IntervalID = setInterval(moveCarSouth, 16);
        car.movingID = IntervalID;
        car.moving = true;
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

function moveCarEast() {
  var currentLocationX = carLocation().carLeftX;
  var nextLocationX = currentLocationX + 5 + 'px';
  $car.style.left = nextLocationX.toString();
}

function moveCarWest() {
  var currentLocationX = carLocation().carLeftX;
  var nextLocationX = currentLocationX - 5 + 'px';
  $car.style.left = nextLocationX.toString();
}

function moveCarNorth() {
  var currentLocationY = carLocation().carTopY;
  var nextLocationY = currentLocationY - 5 + 'px';
  $car.style.top = nextLocationY.toString();
}

function moveCarSouth() {
  var currentLocationY = carLocation().carTopY;
  var nextLocationY = currentLocationY + 5 + 'px';
  $car.style.top = nextLocationY.toString();
}
