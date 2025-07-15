
let input = `underscore_case 
 first_name
Some_Variable 
 calculate_AGE
delayed_departure`

for(const [index,word] of input.split('\n').entries()){
    const [w1,w2] =   word.trim().toLowerCase().split('_');
    output = `${w1}${w2.replace(w2[0],w2[0].toUpperCase())}`
    console.log(output.padEnd(20),'✅'.repeat(index+1))
}
        