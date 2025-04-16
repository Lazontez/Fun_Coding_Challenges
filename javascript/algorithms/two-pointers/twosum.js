/**
 * Two Sum (Two Pointer Version)
 * 
 * You are given a **sorted** array of integers `nums` and a target integer `target`.
 * Return the indices of the two numbers such that they add up to `target`.
 * 
 * You may assume that each input would have exactly one solution, and you may not use 
 * the same element twice.
 * 
 * You must solve it using the **two-pointer technique**, not a hash map.
 * 
 * Example:
 * Input: nums = [1, 2, 4, 6, 10], target = 8
 * Output: [2, 4] // because nums[1] + nums[3] == 8
 * 
 * Note: The array is sorted in non-decreasing order, and the indices are 1-based.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    // Your two-pointer logic goes here: 
    let start = 0 
    let end = nums.length - 1

    while(start < end){
        let sum = nums[start] + nums[end]
        if(sum == target){
            return [start + 1, end + 1]
        }
        else if(sum < target){
            start++
        }
        else if(sum > target){
            end--
        }  
    }

}
console.log(twoSum( [1,2, 4, 6, 10] , 8))