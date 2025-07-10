const mark={
    name:"Mark Miller",
    mass:78,
    height:1.69,
    calcBMI:function(){
        this.BMI = this.mass/ this.height**2;
        return this.BMI;
    }
}

const john = {
    name: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

if(mark.calcBMI() > john.calcBMI())
    console.log(`${mark.name.split(' ')[0]}'s BMI (${mark.BMI}) is higher than ${john.name.split(' ')[0]}'s (${john.BMI})!`);
else
    console.log(`${john.name.split(' ')[0]}'s BMI (${john.BMI}) is higher than ${mark.name.split(' ')[0]}'s (${mark.BMI})!`);