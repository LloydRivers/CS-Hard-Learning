/*  Index numbers of the alphabet: 
  0=a, 1=b, 2=c, 3=d, 4=e, 5=f, 6=g, 7=h, 
  8=i, 9=j, 10=k, 11=l, 12=m, 13=n, 14=o, 
  15=p, 16=q, 17=r, 18=s, 19=t, 20=u, 21=v, 
  22=w, 23=x, 24=y, 25=z
  */
function fearNotLetter(str = "stvwx") {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const first = str[0]; // logs s (correct)
  const last = str[str.length - 1]; // logs x (correct)
  let argIndex = 0;
  let index = alphabet.indexOf(first); // 18 (correct, we start at the letter s)
  while (alphabet[index] !== last) {
    const isEqual = alphabet[index] === str[argIndex];

    if (!isEqual) {
      return alphabet[index];
    }
    // Move to the next letter in the alphabet
    index++;
    // Move to the next letter in the arg string
    argIndex++;
  }

  return undefined; // If no missing letter is found
}

console.log(fearNotLetter("stvwx")); // should return the string u
console.log(fearNotLetter("bcdf")); // should return the string e.
