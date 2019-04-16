//-数组拆分
//思路 先排序 然后计算每组的第一个数相加，即数组下标为偶数的值相加
var arrayPairSum = function(nums) {
        nums.sort(function(a,b){
            return a-b
        })
        var sum=0;
        
        for(i=0;i<nums.length;i+=2){
            
            sum+=nums[i]
        }
        return sum
    };