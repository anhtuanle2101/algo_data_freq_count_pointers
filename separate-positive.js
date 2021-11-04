// add whatever parameters you deem necessary
function separatePositive(nums) {
    if (nums.length <= 1) return nums;
    let left = 0;
    let right = nums.length-1;
    while (left < right){
        if (nums[left] > 0) left++;
        if (nums[right] < 0) right --;
        if (left < right){
            const temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
        }
    }
    return nums;
}

module.exports = separatePositive;