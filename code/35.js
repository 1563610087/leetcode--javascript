//搜索插入的位置
// var searchInsert = function(nums, target) {
   
//     var l = -1, r = nums.length-1;
//     //寻找小于target的最大索引
    
//         while( l < r ){
//             // 使用向上取整避免死循环
//             var mid = Math.ceil((l+r)/2)
//             if( nums[mid]>=target)
//                 {r = mid - 1;}
//             else
//                 {l = mid;}
//         }
//         return l+1    
// };

var searchInsert = function(nums, target) {
   
    var l = 0, r = nums.length;
    //寻找大于target的最小索引
    
        while( l < r ){
            // 使用向上取整避免死循环
            var mid = Math.ceil((l+r)/2)
            if( nums[mid]<=target)
                {l = mid+1;}
            else{
              r=mid
            }
                
        }
        return r-1    
};

var a=[1,3,4,7]
console.log(searchInsert(a,8))