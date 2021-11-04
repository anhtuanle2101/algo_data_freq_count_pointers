const freqCounter = require("./freqCounter");

// add whatever parameters you deem necessary
function constructNote(msg, letters) {
    if (letters.length < msg.length) return false;
    const freqMsg = freqCounter(msg);
    const freqLetters = freqCounter(letters);
    for (let char of freqMsg.keys()){
        if (freqMsg.get(char) > freqLetters.get(char))
            return false;
    }
    return true;
}
