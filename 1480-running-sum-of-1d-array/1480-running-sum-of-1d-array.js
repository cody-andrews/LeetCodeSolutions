/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
   
    let currentSum = 0;
     
    for(i = 0; i < nums.length; i++){
        currentSum = currentSum + nums[i];
        nums[i]= currentSum;
    }
    return nums;
};