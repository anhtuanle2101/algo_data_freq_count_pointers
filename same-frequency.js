// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    if ((num1/num2)>10 || (num2/num1)>10) return false;
    const freqNum1 = freqCount2(num1);
    const freqNum2 = freqCount2(num2);
    for (let num of freqNum1.keys()){
        if (freqNum1.get(num) != freqNum2.get(num)) return false;
    }
    return true;
}

function freqCount2(num){
    const map = new Map();
    while (num > 0){
        const cur = num % 10;
        num = Math.floor(num / 10);
        const count = map.get(cur) || 0;
        map.set(cur, count + 1);
    }
    return map;
}

module.exports = sameFrequency;