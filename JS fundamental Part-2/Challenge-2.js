calctip = bill_amount => (bill_amount >= 50 && bill_amount <=300)
    ? bill_amount*0.15
    : bill_amount*0.2;

console.log(calctip(100));

const bills = [125,555,44]

const tips = bills.map(calctip)
console.log(tips)

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(total);
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);