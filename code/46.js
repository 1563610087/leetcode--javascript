//没有重复的元素的数组全排列

//递归方法
var permute = function(nums) {
     if (nums.length == 1){
          return [nums];
        }
        else if (nums.length == 2){
          return [[nums[0],nums[1]],[nums[1],nums[0]]];
        }
        else {
          var temp = [];
          for (var i = 0; i < nums.length; i++) {
            var save = nums[i];
            nums.splice(i, 1);//取出nums[i]
            var res = permute(nums);//递归排列nums[0],nums[1],...,nums[i-1],nums[i+1],...,nums[n]
            nums.splice(i, 0, save);//将nums[j]放入数组，保持原来的位置
            for (var j = 0; j < res.length; j++) {
              res[j].push(nums[i]);
              temp.push(res[j]);//将nums[j]组合起来
            }
          }
          return temp;
        }
};