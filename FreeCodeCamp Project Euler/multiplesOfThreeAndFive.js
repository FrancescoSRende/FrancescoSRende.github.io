function multiplesOf3and5(number) {

    var mult_Three = [];
    var mult_Five = [];
    
    var i;
    for (i = 3; i < number; i++) {
      if (i % 3 == 0) {
        mult_Three.push(i)
      } else if (i % 5 == 0 && i % 3 != 0) {
        mult_Five.push(i)
      }
    }
    
    var sum = 0;
    for (i = 0; i < mult_Three.length; i++) {
      sum = sum + mult_Three[i]
    }
    
    for (i = 0; i < mult_Five.length; i++) {
      sum = sum + mult_Five[i]
    }
    
    
      return sum;
    }
    
multiplesOf3and5(10);




function multiplesOf3and5Version2(number) {
    var sum = 0
    for (var i = 3; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        sum = sum + i
      }
    }
    
      return sum;
    }
    
    multiplesOf3and5Version2(1000);