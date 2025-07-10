// TestCase-1
// mark_mass=78
// mark_height = 1.69;
// john_mass = 92;
// john_height = 1.95;

// TestCase-2
mark_mass = 95
mark_height = 1.88;
john_mass = 85;
john_height = 1.76;

mark_BMI=mark_mass/mark_height**2;
john_BMI=john_mass/john_height**2;

markHigherBMI= mark_BMI>john_BMI
console.log(mark_BMI,john_BMI,markHigherBMI)

//chanllange-2
if (markHigherBMI)
    console.log(`Mark's BMI ${mark_BMI} is higher than John's BMI ${john_BMI}`)
else
    console.log(`John's BMI ${john_BMI} is higher than Mark's BMI ${mark_BMI}`)
