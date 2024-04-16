function filterCarByAvailability(cars) {
  const result = [];
  for (let i = 0; i < cars.length; i++){
    let availableTemp = cars[i].available;
    if (availableTemp === true){
      let objCars = {
        available: cars[i].available,
        id: cars[i].id,
        manufacture: cars[i].manufacture,
        model: cars[i].model,
        options: cars[i].options,
        plate: cars[i].plate,
        specs: cars[i].specs,
        transmission: cars[i].transmission,
        type: cars[i].type,
        year: cars[i].year
      }
      result.push(objCars);
    }
  }

  return result;
}
