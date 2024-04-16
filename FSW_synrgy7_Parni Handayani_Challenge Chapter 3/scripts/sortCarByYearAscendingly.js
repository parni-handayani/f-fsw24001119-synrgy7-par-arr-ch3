function sortCarByYearAscendingly(cars) {
  for (let i = 0; i < cars.length - 1; i++) {
    for (let j = 0; j < cars.length - i - 1; j++) {
      if (cars[j].year > cars[j + 1].year) {
        let temp = cars[j];
        cars[j] = cars[j + 1];
        cars[j + 1] = temp;
      }
    }
  }
  return cars;
}

