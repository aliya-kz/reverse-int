module.exports = function reverse (n) {
 var a=n.toString().split("").reverse().join("");
 return parseInt(a);
}
