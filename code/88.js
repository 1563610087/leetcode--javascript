//合并两个有序数组
var merge = function(nums1, m, nums2, n) {
    for(var a=m+n-1,i=m-1,j=n-1;a>=0&&j>=0;a--){
        
        if(i>=0&&nums1[i]>=nums2[j]){
            nums1[a]=nums1[i]
            i--
        }else {
            nums1[a]=nums2[j]
            j--
            
        }
    }
};