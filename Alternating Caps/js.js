// a funtion that capitalizes every other letter in an alternating pattern and returns the result
function alternatingCaps(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (i % 2 == 0) {
            result += str[i].toUpperCase();
        } else {
            result += str[i].toLowerCase();
        }
    }
    return result;
}
console.log(alternatingCaps("hello world"));
// Returns HeLlO WoRlD
