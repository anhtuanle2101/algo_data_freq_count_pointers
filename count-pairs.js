// add whatever parameters you deem necessary
function countPairs(nums, target) {
    const map = new Map();
    let count = 0;
    for (let num of nums){
        if (map.get(target-num)) count++;
        const isPresent = map.get(num) || false;
        map.set(num, true);
    }
    return count;
}

module.exports = countPairs;
