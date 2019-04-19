//二分查找
var search = function(nums, target) {
    var left=0,right=nums.length-1,mid
    
    while(left<=right){
      mid=Math.ceil((left+right)/2)
        if(nums[mid]>target){
            right=mid-1
        }else if(nums[mid]<target){
            left=mid+1
        }else if(nums[mid]==target){
            return mid
        }
  }  
    return -1
};