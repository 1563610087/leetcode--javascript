//删除排序数组中的重复项
var removeDuplicates = function(nums) {
    for(let i=0;i<nums.length;i++){
        if(nums[i]==nums[i+1]){
            nums.splice(i,1)
            i--
        }
    }
    return nums
};
var a=[0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(a))