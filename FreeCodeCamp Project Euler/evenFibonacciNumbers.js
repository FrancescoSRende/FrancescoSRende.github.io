function fiboEvenSum(n) {

    var fibo = []
  
    var i = 2;
    var j = 1;
    while (i <= n) {
      fibo.push(i)
      var temp = i
      i = i + j
      j = temp
    }
  
    var sum = 0
  
    for (i = 0; i < fibo.length; i++) {
      if (fibo[i] % 2 == 0) {
        sum = sum + fibo[i]
      }
    }
    console.log(fibo)
    return sum;
  }
  
  fiboEvenSum(10)