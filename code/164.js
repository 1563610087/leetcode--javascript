//最大间距
var maximumGap = function(nums) {
   var b=nums.length
      var max=0
      if (b<2) {
        return max
      }
    nums.sort(function(a,b){
        return a-b
    })
      for (var i = 0; i < b-1; i++) {
       var re= Math.abs(nums[i]-nums[i+1])
       if (re>max) {
        max=re
       }
      }
      return max 
};