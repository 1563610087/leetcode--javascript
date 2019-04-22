// 斐波那契数

// 方法一
// 采用迭代的方法，将每次的迭代的值存入数组，返回第N次迭代的结果
var fib = function(N) {
    let arr = [0, 1];
    
    for (let i = 2; i <= N; i++) {
        arr.push(arr[i-2] + arr[i-1]);
    }
    
    return arr[N];
    
    
};

//方法二 还是迭代，采用对象保存数据
var fib = function(N) {
    const memo = {};
    for (let i = 0; i <= N; i++) {
        if (i < 2)   memo[i] = i;
        else memo[i] = memo[i-2] + memo[i-1];
    }
    return memo[N];
    
};
// 方法三 递归
var fib = function(N) {
    return (N < 2) 
        ? N 
        : fib(N-2) + fib(N-1);
    
    
};
// 方法四 动态规划
var fib = function(N) {
       
    const fibRec = (N, memo) => {
      if (memo[N])   return memo[N];
      else {
        if (N < 2)   return N;
        else {
            memo[N] = fibRec(N-1, memo) + fibRec(N-2, memo);
            return memo[N];
        }
      }
    } ;
    const memo = {};
    return fibRec(N, memo);
    
};
// 动态规划简化
var fib = function(N,memo) {
   memo = memo || {};
    
    if (memo[N])   return memo[N];
    if (N < 2)   return N;
  
    return memo[N] = fib(N-1, memo) + fib(N-2, memo); 
    

    
    
};
//动态规划，使用map()数据结构
var fib = function(N,memo) {
   memo = memo || new Map();
    
    if (memo.has(N))   return memo.get(N);
    if (N < 2)   return N;
        
    memo.set(N, fib(N-1, memo) + fib(N-2, memo));
    return memo.get(N);

    
    
};