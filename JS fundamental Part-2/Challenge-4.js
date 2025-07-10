calctip = bill_amount => (bill_amount >= 50 && bill_amount <=300)
    ? bill_amount*0.15
    : bill_amount*0.2;

console.log(calctip(100));

const bills = [22,295,176,440,37,105,10,1100,86,52]

const tips = bills.map(calctip)
console.log(tips)

const total = []
for(let i=0;i<bills.length;i++)
    total.push(bills[i]+tips[i]);

console.log(total);

calcAverage= (arr)=>{
    sum = arr.reduce((x,y) => x+y)
    return sum / arr.length;
}
console.log("Average Bill:",calcAverage(total))
