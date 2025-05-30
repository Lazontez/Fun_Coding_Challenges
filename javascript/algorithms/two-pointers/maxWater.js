// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start = 0
    let end = height.length - 1
    let maxArea = 0
    while(start < end){
        const maxi = Math.min(height[start],height[end]) * (end - start)
        if(maxi > maxArea){maxArea = maxi}
        (height[start] > height[end]?end--:start++)       
    }
    return maxArea
};
