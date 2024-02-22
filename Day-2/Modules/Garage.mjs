// this is the same as "sensor" but i named it "isEmpty" for code readability purposes
let isEmpty = true;

class Garage {
  constructor(carPlateNumber) {
    this.carPlateNumber = carPlateNumber;
  }

  enterGarage() {
    if (isEmpty === true) {
      console.log(
        `Car with ${this.carPlateNumber} plate number can park here.`
      );
      isEmpty = false;
    } else {
      console.log("Their is a car already parked here.");
    }
  }

  exitGarage() {
    if (isEmpty === true) {
      console.log("The garage is Empty.");
    } else {
      console.log(
        `The car with the plate number: ${this.carPlateNumber} is leaving the garage.`
      );
    }
  }
}

export default Garage;
