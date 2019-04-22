//最近的请求次数

//ping方法：
//1  t值范围要在[t-3000,t]范围内才会计算ping，
//2  返回3000毫秒前到现在的ping数




var RecentCounter = function() {
   this.queue=[] 
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    if(t===null)return null
    this.queue.push(t)
    while(this.queue[0]<t-3000){
        this.queue.shift()
    }
    return this.queue.length
};
