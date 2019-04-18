// 复原ip地址

方法一：没看懂

function restoreIpAddresses(s) {
  const res = [];
  dfs([], 0);
  return res;
  
  function dfs(prefix, idx) {
    if (prefix.length === 4 && idx === s.length) {
      res.push(prefix.join('.'));
      return;
    }
    
    if (prefix.length === 4 || idx === s.length) {
      return;
    }
    
    for (let r = idx; r < s.length; r++) {
      if (r !== idx && s[idx] === '0') return;
      
      const num = parseInt(s.slice(idx, r+1));
      if (num > 255) {
        return;
      }
      prefix.push(num);
      dfs(prefix, r+1);
      prefix.pop();
    }
  }
}

方法二：
function restoreIpAddresses(s) {
        let r = []
        search([], s)
        return r


        let search = (cur, sub) => {
        //当数据超过12位，直接返回空
        if (sub.length>12) {
          return ;
        }
        //递归出去的条件 当数组保存的内容有四项，即ip地址的四项，例如cur=[12 23 34 12]
        //cur.join('')===s,即当前选出来的选项和原始的字符串的个数要相等，就保存到数组r中
        if (cur.length === 4 && cur.join('') === s) {
          r.push(cur.join('.'))
        } else {
 
          for (let i = 0, len = Math.min(3, sub.length), tmp; i < len; i++) {
            tmp = sub.substr(0, i + 1)
            if (tmp < 256&&(tmp=='0'||tmp[0]!=='0')) {
              search(cur.concat([tmp]), sub.substr(i + 1))
            }
          }
        }
      }
      
}