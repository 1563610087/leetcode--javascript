//重复的子字符串
export default (str) => {
  var reg = /^(\w+)\1+$/
  return reg.test(str)
}