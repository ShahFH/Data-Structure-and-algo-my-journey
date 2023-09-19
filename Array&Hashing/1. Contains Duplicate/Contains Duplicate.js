
// Time Complexity and Space Complexity is of course O(n)

var containsDuplicate = function(nums) {
    const duplicate = {};
  
    for (let i = 0; i < nums.length; i++) {
      const currentNum = nums[i];
  
      // If the current number has already been seen, it's a duplicate
      if (duplicate[currentNum]) {
        return true;
      }
  
      // Otherwise, mark it as duplicate
      duplicate[currentNum] = true;
    }
  
    // If the loop completes without finding duplicates, return false
    return false;
  };

