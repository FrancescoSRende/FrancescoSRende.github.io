function largestPrimeFactor(number) {

    var primes = []
    
    for (var k = 2; k < number + 1; k++) {
      var check = 0
      for (var i = 2; i < Math.floor(k/2) + 1; i++) {
        if (k % i == 0) {
          check = check + 1
        }
      }
      if (check == 0) {
        primes.push(k)
      }
    }
    
    console.log(primes)
    
    var primeFactors = []
    
    for (var i = 0; i < primes.length; i++){
      var test = number
      while (test % primes[i] == 0) {
        primeFactors.push(primes[i])
        test = Math.floor(test/primes[i])
      }
    
    }
    
    console.log(primeFactors)
    
      return primeFactors[primeFactors.length - 1];
    }
    
    largestPrimeFactor(13195);