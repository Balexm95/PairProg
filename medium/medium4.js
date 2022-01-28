class Car {
    //constructor
    constructor(Make, Model, Year, Milage, Color) {
      this.Make = Make;
      this.Model = Model;
      this.Year = Year;
      this.Milage = Milage;
      this.Color = Color;
    }
  
  
    driveToWork() {
      console.log(`Old milage: ${this.Milage}, New milage: ${this.Milage + 33}`);
      this.Milage += 33;
    }
  
    runErrands() {
      console.log(`Old milage: ${this.Milage}, New milage: ${this.Milage + 30}`);
      this.Milage += 30;
    }
  
    driveAroundTheWorld() {
      console.log(`Old milage: ${this.Milage}, New milage: ${this.Milage + 24000}`);
      this.Milage += 24000;
    }
  }
  
  const car = new Car("Toyota", "Camry", 2015, 29, "Red");
  car.driveToWork();
  car.runErrands();
  car.driveAroundTheWorld();

 
