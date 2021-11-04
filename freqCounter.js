const freqCounter =  (param)=>{
    const result = new Map();
    for (let element of param){
        const count = result.get(element) || 0;
        result.set(element, count + 1);
    }
    return result;
}

module.exports = freqCounter;