/*
- If a word begins with a vowel, just add way at the end.


- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

*/
function translatePigLatin(str) {
  const vowels = "aeiou";
  const vowelFirst = "way";
  const consonantFirst = "ay";

  let placeHolder = "";
  let index = 0;
  let length = str.length;
  if (vowels.includes(str[0])) {
    return str + vowelFirst;
  } else {
    while (!vowels.includes(str[index]) && index < length) {
      console.log();
      placeHolder += str[index];
      index++;
    }

    return str.slice(index) + placeHolder + consonantFirst;
  }
}

console.log(translatePigLatin("rhythm"));
/*
Failed:Should handle words without vowels. translatePigLatin("rhythm") should return the string rhythmay.
*/
