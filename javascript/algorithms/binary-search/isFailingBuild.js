/**
 * 🧪 Problem: First Failing Build (Binary Search)
 * 
 * You're given a function `isFailingBuild(buildNumber)` which returns a boolean:
 * - true if the build is failing
 * - false if the build is passing
 * 
 * Once a build fails, all subsequent builds also fail.
 * 
 * Your task is to implement a function that returns the build number
 * of the **first failing build**.
 * 
 * 📥 Input:
 * - n: total number of builds (an integer)
 * - isFailingBuild(buildNumber) is already defined.
 * 
 * 🧾 Output:
 * - Return the build number of the first failing build.
 * - It is guaranteed that at least one build is failing.
 * 
 * 🧠 Example:
 * isFailingBuild(3) → false  
 * isFailingBuild(4) → true  
 * isFailingBuild(5) → true  
 * 
 * Input: n = 5  
 * Output: 4  
 */

/**
 * @param {number} n - total number of builds
 * @return {number} - first failing build number
 */
var findFirstFailingBuild = function(n) {

    let left = 1
    let right = n
    while(left < right){
        let mid = Math.floor((right + left) / 2)
        if(isFailingBuild(mid) === false){
            left = mid + 1
        }
        else{
            right = mid
        }
    }
    return left
};

// Example mock function for testing (uncomment if testing locally)
let failingBuildStart = 10;
function isFailingBuild(buildNumber) {
    return buildNumber >= failingBuildStart;
}

findFirstFailingBuild(250000000000000000000000000000000*23000)