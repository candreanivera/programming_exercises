function isPalindrome (word) {
    const cleanWord = word.toLowerCase().replace(/\s/g, '');
    const reverseWord = cleanWord.split('').reverse().join('');
    console.log(cleanWord);
    console.log(reverseWord);
    return cleanWord == reverseWord;
}

//const resultado = isPalindrome("Dábale arroz a la zorra el abad");
const resultado = isPalindrome("Abalaba");
console.log(resultado);
if (resultado) {
    console.log("Es palíndromo");
}
else {
    console.log("No es palíndromo");
}


function esPalindromo(str) {
    const cleanStr = str.toLowerCase().replace(/\s/g, '');
    const reversedStr = cleanStr.split('').reverse().join('');
    console.log(cleanStr);
    console.log(reversedStr)
    return cleanStr === reversedStr;
  }
  
  console.log(esPalindromo("arroz")); // Debería imprimir true