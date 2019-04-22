//反转字符串
var reverseString = function(s) {
    var len=s.length
    
    var n=Math.floor(len/2)
    for(var i=0 ,j=len-1;i<n;i++){
        var tmp=s[i]

                s[i]=s[j]

                s[j]=tmp
                j--
        
    }
};