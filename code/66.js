//加一
// 此题用字符串拼接会超过js最大值，需要模拟数字的计算过程，从最后一位开始相加
var plusOne = function(digits) {
    var carry = 1;
    for(var i=digits.length-1; i>=0; i--){
        // 判断最后一位相加结果

        digits[i] = digits[i] + carry;

        // 最后一位相加为10和不为10的情况，为10，最后一位为0，不为10 ，为相加结果
        digits[i] = (digits[i]==10)?(carry=1, 0):(carry=0, digits[i]);
    }
    // 循环结束时，carry都为1，则说明需要加1，这是数组为[9,9,9]这种情况
    if(carry){ digits.unshift(1); } // note
    return digits;
};