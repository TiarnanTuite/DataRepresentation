class bmi
{
    // constructor to initialise data in the class
    constructor(height, weight)
    {
        this.height = height;
        this.weight = weight;
    }

    //functon to calculate bmi
    calculateBMI()
    {
        //bmi calculation
        let Bmi = this.weight/(this.height**2);
        return Bmi;
    }
}

//instance of class
let myBMI = new bmi(2,100);

//output
console.log(myBMI.calculateBMI());