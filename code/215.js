//数组中的第k个最大元素
//先从大到小排序--然后把k-1输出

var findKthLargest = function(nums, k) {
    //sort方法采用的是快速排序
    nums.sort(function(a,b){
    return b-a
  })

  return nums[k-1]
};
考的是排序算法，选择排序---冒泡排序
//冒泡
let len = nums.length - 1
  for (let i = len, tmp; i > len - k; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        tmp = nums[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = tmp
      }
    }
  }
  // nums[len+1-k]
  return nums[len - (k - 1)]
//选择排序
var len=nums.length
      for(var i=0;i<k; i++){
        for(var j=i+1; j<len; j++){
          
          if(nums[i]<nums[j]){
            var t
            t=nums[i]
            nums[i]=nums[j]
            nums[j]=t
          }
        }
      }
      console.log(nums)
      return nums[k-1]