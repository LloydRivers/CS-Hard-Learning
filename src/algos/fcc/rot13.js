/**
 * Applies the ROT13 cipher to the input string.
 * @param {string} str - The input string to be ciphered.
 * @returns {string} - The ciphered string.
 */
function rot13(string) {
  let result = "";
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabetLength = alphabet.length;
  const shift = 13;

  for (let index = 0; index < string.length; index++) {
    let letter = string[index];

    if (!alphabet.includes(letter)) {
      result += letter;
      continue;
    }

    let position = alphabet.indexOf(letter);
    let newPosition = (position + shift) % alphabetLength;

    result += alphabet[newPosition];
  }

  return result;
}

console.log(rot13("X"));

rot13("SERR PBQR PNZC");
