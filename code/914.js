//卡牌分组
var hasGroupsSizeX = function(deck) {
    function getResult (numCount, min, s) {
        const r = numCount.every(item => item % s === 0)
        if (r || s === min) return r
        s++
        return getResult(numCount, min, s)
    }
    const hash = deck.reduce((pre, num) => {
        if (!pre[num]) {
           pre[num] = 1 
        } else {
           pre[num]++ 
        }
        return pre
    }, {})
    const numCount = Object.values(hash)
    const min = Math.min(...numCount)
    if (min < 2) return false
    return getResult(numCount, min, 2)
};
