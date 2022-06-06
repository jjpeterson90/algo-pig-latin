exports.translate = function(str) {

    let vowels = "aeiou'";
    let sentences = [];
    // pushes each new line into its own array element
    sentences.push(...str.split("\n^'"));
    //console.log(sentences)

    // iterate through each phrase in the array
    for (let phrase = 0; phrase < sentences.length; phrase++) {
        sentences[phrase] = sentences[phrase].split(/\b/);  // splits words and non-words into individual elements
        for (let word = 0; word < sentences[phrase].length; word++) { // iterates through each element in this phrase
            if (/[a-zA-z]/.test(sentences[phrase][word])) { // only do this on elements with words
                if (sentences[phrase][word+1] !== "'") {
                    sentences[phrase][word] = translateWord(sentences[phrase][word]);
                }
            }
        }
        sentences[phrase] = sentences[phrase].join('')
    }
    sentences = sentences.join("\n");

    function translateWord(word) {
        word = word.split('');
        if (vowels.includes(word[0])) {
            word.push("ay");
        // } else if () {
        } else {
            let vowelMatch = word.join('').match(/[aeio]/g) || 0;
            let vowelIndex = word.indexOf(vowelMatch[0])
            for (let i = 0; i < vowelIndex; i++) {
                if (word[0] === word[0].toUpperCase()) {
                    word[0] = word[0].toLowerCase();
                    word[vowelIndex] = word[vowelIndex].toUpperCase();
                }
                word.push(word.shift())
            }
            word.push("ay");
        }
        word = word.join('');
        return word
    }

    return sentences


};


// "The quick, brown fox!") === "Ethay ickquay, ownbray oxfay!"