function findLongestWord(string) {
  const words = string.split(" ");
  let max;
  if (words.length === 0) {
    return "";
  } else {
    max = words[0];
  }
  for (const word of words) {
    if (word.length > max.length) {
      max = word;
    }
  }
  return max;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'

console.log(findLongestWord(""));
