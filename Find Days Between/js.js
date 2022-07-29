// Find time between two dates in days and return result
function findTime(date1, date2) {
    var diff = date2.getTime() - date1.getTime();
    return diff / (1000 * 60 * 60 * 24);
}

// Year, Month, Day
var a = findTime(new Date(2007, 11, 12), new Date(2007, 11, 17));
console.log(a)
