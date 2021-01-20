x1 = 2
y1 = 4
x2 = 4
y2 = 8

r = Math.pow( ((x2-x1) ** 2 + (y2-y1) ** 2) , 1/2);

a = (r ** 2) * 3.14159;

// a = a.toPrecision(5)
// rounds to 5 sigfigs

// a = a.toFixed(3)
// rounds to 3 decimal places


a = a*1000

a = Math.round(a)

a = a/1000

console.log(a)