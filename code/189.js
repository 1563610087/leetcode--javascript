//旋转数组
// 方法1
// 循环将最后一个数插入到最前面
var rotate = function(nums, k) {
    for(var i=0;i<k;i++){
        
        nums.unshift(nums.pop())
    }
};

// 方法2
// 使用额外空间---空间复杂度不是常数
