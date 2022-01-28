//MEDIUM 4
// // Create a car object with the items: Make, Model, Year, Milage, and Color. Then create 3 methods in the object; A driveToWork method, driveAroundTheWorld method, and runErrands method. Each of these methods should affect the car’s mileage adding to it each time and console logging the old mileage and the new mileage.
// driveToWork = 33 miles
// driveAroundTheWorld = 24,000 miles
// runErrands = 30 miles
// Example 1:
// car.driveToWork();
// Output: old mileage: 2000 | new mileagea: 2033
// Explanation: 2000 + 33 = 2033
// Example 2:
// car.driveAroundTheWorld();
// Output: old mileage: 2033 | new mileagea: 26033
// Example 2:
// car.runErrands();
// Output: old mileage: 26033 | new mileagea: 26063
const car = {
  Make: "Nissan",
  Model: "Maxima",
  Year: 2017,
  Mileage: 30000,
  Color: "Pearl White",

  driveToWork: function () {
     const oldMileage = this.Mileage;
          this.Mileage += 33
        
    r = `Old mileage: ${oldMileage} | New mileage: ${car.Mileage}`;
      return r;
      },
  driveAroundTheWorld: function () {
      const oldMileage = this.Mileage;
       this.Mileage += 24000
     r = `Old Mileage: ${oldMileage} | New Mileage: ${car.Mileage}`;
     return r;
      },
  runErrands: function () {
      const oldMileage = this.Mileage;
      this.Mileage += 30
     r =  `Old Mileage: ${oldMileage} | New Mileage: ${car.Mileage}`;
     return r;
      }
  };
  console.log(car.driveToWork());
  console.log(car.driveAroundTheWorld());
  console.log(car.runErrands());

 
