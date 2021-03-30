time = "09:01"

h = time.substring(0,2);
h = parseInt(h, 10)

m = time.substring(3,5);

x = "AM"

// if (h === 0) {
//     x = "AM"
//     h = "12"
// } else if (h >= 1 && h <= 11) {
//     x = "AM"
// } else if (h === 12) {
//     x = "PM"
// } else if (h >= 13 && h <= 23) {
//     x = "PM"
//     h = h - 12
// }

if (h >= 13 && h <= 23) {
    x = "PM"
    h = h - 12
} else if (h === 0) {
    h = 12
} else if (h === 12) {
    x = "PM"
}

h = h.toString();

console.log(h + ":" + m + x)