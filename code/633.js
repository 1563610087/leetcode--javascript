//平方数之和
// 采用双指针

// i=0是防止c=1，j的最大值不会超过c的开方
var judgeSquareSum = function(c) {
    var i=0,j=Math.floor(Math.sqrt(c))
    
    while(i<=j){
        if(i*i+j*j==c){
            return true
        }else if(i*i+j*j>c){
            j--
        }else{
            i++
        }
    }
    return false
};
//方法二
var judgeSquareSum = function(c) {
    for(var i=Math.floor(Math.sqrt(c));i>=0;i--){
        if(Number.isInteger(Math.sqrt(c-i*i)))
            return true        
    }
    return false
};