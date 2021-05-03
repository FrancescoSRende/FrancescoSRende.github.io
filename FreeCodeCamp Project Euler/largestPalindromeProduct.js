function largestPalindromeProduct(n) {

  var halfPal = '';

  for (var i = 0; i < n; i ++) {
    halfPal = halfPal.concat('9');
  }

  //console.log(halfPal)

  var minPow10 = 10 ** (n * 2 - 1)

  //console.log(minPow10)

  var halfPalRev = halfPal;
  var pal = "";

  pal = halfPal.concat(halfPalRev)
  pal = parseInt(pal)
  //console.log(pal)


  while (pal > minPow10) {
    
    for (var i = halfPal.length - 1; i >= 0; i--) {
      halfPalRev += halfPal[i];
    }

    //console.log('h')
    //console.log(halfPal)

    pal = halfPal.concat(halfPalRev)
    pal = parseInt(pal)

    for (var i = parseInt(halfPal); i >= 10 ** n; i--) {
      if (pal % i == 0 && 10 ** n <= (pal / i) < 10 ** (n+1)) {
        return pal
      }
    }

    halfPal = String(parseInt(halfPal) - 1)
  }

}

largestPalindromeProduct(3);