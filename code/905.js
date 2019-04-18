//按奇偶排序数组
方法1：
var sortArrayByParity = function(A) {
   var len=A.length;
      var arr1=[],arr2=[];
      for (var i = 0; i < len; i++) {
        
         if(A[i]%2===0){
           arr1.push(A[i])
         }else{
           arr2.push(A[i])
         }
      }
      return arr1.concat(arr2) ;
};
方法2：
var sortArrayByParity = function(A) {
    for (let i = 0; i < A.length-1; i++) {
        for (let j = i + 1; j <= A.length; j++) {
            if (A[i] % 2 != 0 && A[j] % 2 == 0) {
                let tmp = A[i];
                A[i] = A[j];
                A[j] = tmp;
            }
        }
    }
    return A;
};