// add whatever parameters you deem necessary
function averagePair(nums, target) {
    if (nums.length <= 1) return false;
    let left = 0;
    let right = nums.length-1;
    while (left < right){
        if ((nums[left]+nums[right])/2 === target) return true;
        if ((nums[left]+nums[right])/2 > target) right--;
        if ((nums[left]+nums[right])/2 < target) left++;
    }
    return false;
}

module.exports = averagePair;
