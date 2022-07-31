// Basic JS program to rearrange letters in alphabetical order and log the result.
function alphabeticalOrder(str) {
    var strArray = str.split("");
    var sortedArray = strArray.sort();
    var sortedString = sortedArray.join("");
    return sortedString;
}
console.log(alphabeticalOrder("aycdefbghijklmnopqrstuvwxaz"));
