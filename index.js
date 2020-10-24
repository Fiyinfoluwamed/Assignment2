
let sentence = prompt('What is the Sentence');

function longestWord(sentence) {
    newSentence = sentence.split(' ');

    let max = 0
    let lgWord = '';

    for (i in newSentence) {
        let word = newSentence[i];
        let wordSize = word.length;
        if (wordSize > max) {
            max = wordSize;
            lgWord = word;
        }
    }

    let pos = newSentence.indexOf(lgWord);
    return [lgWord, pos];
}

let result = longestWord(sentence);
alert('The longest word is "' + result[0] + '" at an index of ' + result[1]);