//按奇偶排序数组2
function arr(A){
      var a=[]
      // 创建两个计算器，分别计算奇偶的下标
      var con=0
      var con2=1
      
      var len=A.length
      for (var i = 0; i < len; i++) {
        if (A[i]%2===0) {
          a[con]=A[i]
          con=con+2

        }else {
          a[con2]=A[i]
          con2=con2+2
        }
      }
      return a
    }