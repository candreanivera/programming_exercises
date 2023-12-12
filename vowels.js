function countVowels(word) {
  const vowels = "aeiouAEIOU";
  let cont = 0;
  for (let i of word) {
    if (vowels.includes(i)) {
      console.log(i);
      cont++;
    }
  }
  return cont;
}

console.log("Total de vocales en la palabra: ", countVowels("gatito"));
