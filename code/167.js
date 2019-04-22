//双指针

/*使用双指针，一个指针指向值较小的元素，一个指针指向值较大的元素。指向较小元素的指针从头向尾遍历，指向较大元素的指针从尾向头遍历。

如果两个指针指向元素的和 sum == target，那么得到要求的结果；
如果 sum > target，移动较大的元素，使 sum 变小一些；
如果 sum < target，移动较小的元素，使 sum 变大一些。*/
var twoSum = function(numbers, target) {
    var i = 0, j = numbers.length - 1;
    while (i < j) {
        var sum = numbers[i] + numbers[j];
        if (sum == target) {
            return [i+1,j+1]
        } else if (sum < target) {
            i++;
        } else {
            j--;
        }
    }
    
};