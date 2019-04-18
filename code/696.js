//计数二进制子串
var countBinarySubstrings = function(str) {
    var count=0
 
  // 建立数据结构，堆栈，保存数据
  let r = []
  // 给定任意子输入都返回第一个符合条件的子串
  let match = (str) => {
    let j = str.match(/^(0+|1+)/)[0]
    let o = (j[0] ^ 1).toString().repeat(j.length)
    let reg =j+o
    if (str.startsWith(reg)) {
     return true
      
    } else {
      return false
    }
  }
  // 通过for循环控制程序运行的流程
  for (let i = 0, len = str.length - 1; i < len; i++) {
    let sub = match(str.slice(i))
    if (sub) {
     count++
    }
  }
  return count
};