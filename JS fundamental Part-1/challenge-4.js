const bill=275
// const bill=40
// const bill=430

const tip = (bill>=50 && bill<=300) ? bill*(15/100) : bill*(20/100);
console.log("payable amount " + (tip+bill))