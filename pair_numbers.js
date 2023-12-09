/**
 * Function that receives a number and returns the sum of all the pair numbers
 * from 1 util that number
 */

//Regular function
function sum_pairs (number) {
    sum = 0;
    for(i = 1; i <= number; i++){
        pair = i % 2 == 0;
        if (pair){
            sum = i + sum;
        }
    }
    console.log("Tu número fue: ", number)
    return sum;
}
console.log(sum_pairs(10)); 


//Arrow function
const sum_pairs2 = (number) => {
    sum = 0;
    for (i = 2; i <= number; i += 2){
        sum = i + sum;
        }
    console.log("Tu número fue: ", this.number)
    return sum;

};

console.log(sum_pairs2(10)); 