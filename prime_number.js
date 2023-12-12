// //Regular function
// function prime_number(number){
//     var counter = 0;
//     for (i=1; i<=number; i++){
//         if (number % i == 0){
//             counter= counter + 1
//         }
//     }

//     if(number == 2){
//         console.log("Es primo")
//     }else{
//         if (counter <= 2){
//                 console.log("Es primo")
//         }else{
//                 console.log("No es primo")
//         }
//     }
// };

//Regular function
function prime_number(number) {
  var counter = 0;
  for (i = 2; i <= number; i++) {
    if (number % i == 0) {
      counter = counter + 1;
      if (counter >= 2) {
        console.log({ i });
        break;
      }
    }
  }

  if (counter > 1) {
    console.log("No es primo");
  } else {
    console.log("Es primo");
  }
}

prime_number(97);

/**
function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        console.log("i: ", i)
      if (num % i === 0) {
        return false;
      }
    }
    return true;
}

 **/

// console.log(Math.sqrt(3));
// console.log(esPrimo(3));
