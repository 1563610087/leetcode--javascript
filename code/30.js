// 串联所有子串

//该题的思路是先找出words的所有排列组合情况，然后用words的元素与str进行匹配
//难点在于用递归实现数组的全排列
//数组元素有重复元素的全排列====数组元素没有重复元素的全排列
//这里的数组是有重复元素的全排列

// function a(words){
//   var result=[]
//     //执行函数
//   return result 

//   //递归函数体
//   function perm(){




//   }

// }
const findSubstring = (s, words) => {
    
    if (!words || words.length === 0) return [];

    const m = words.length, n = words[0].length, len = m * n, result = [];
    
    
    const map = {};
    for (word of words) map[word] = ~~map[word] + 1;

   
    for (let i = 0; i < s.length - len + 1; i++) {
       
        const temp = Object.assign({}, map);

        for (let j = i; j < i + len; j += n) {
            const str = s.substr(j, n);
           
            if (!(str in temp)) break;
            
            if (--temp[str] === 0) delete temp[str];
        }
        
        
        if (Object.keys(temp).length === 0) result.push(i);
    }
    
    return result;
};








