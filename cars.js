class Vehicle
{
    //constructor forcar
    constructor(make, model, year)
    {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    //information function to output to console
    Information()
    {
        console.log(`Make: ${this.make}.`);
        console.log(`Model: ${this.model}.`);
        console.log(`Year: ${this.year}'`);
    }
}

// let car = new Vehicle("ford", "focus", 2000);
// car.Information();

//child class
class Cars extends Vehicle
{
    constructor(make, model, year, doors)
    {
        //super inherits from parent
        super(make, model, year);
        this.doors = doors;
    }

    //info method using parent class and new parameter 'doors'
    Information()
    {
        super.Information();
        console.log(`Doors: ${this.doors},`)
    }
}

//instance of class and call
let myCar = new Cars('VW', 'Golf', 2010, 5);
myCar.Information();

