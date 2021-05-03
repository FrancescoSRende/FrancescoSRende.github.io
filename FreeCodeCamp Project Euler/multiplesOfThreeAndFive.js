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



function multiplesV3(number) {
  var sum = 0
  var mult3List = []
  var mult5List = []

  for (var i = 1; i < number; i = i + 1) {
    var mult3 = 3 * i
    var mult5 = 5 * i
    if (mult3 < number) {
      mult3List.push(mult3)
    }
    if (mult5 < number) {
      mult5List.push(mult5)
    }
  }

  for (var i = 0; i < mult5List.length; i = i + 1) {
    if (mult3List.includes(mult5List[i])) {
      mult5List.pop()
    }
  }
}




function multiplesV4(number) {
  var sum = 0
  var mult3List = []
  var mult5List = []

  for (var i = 1; i < number; i = i + 1) {
    var mult3 = 3 * i
    var mult5 = 5 * i
    var list = new Set()
    if (mult3 < number) {
      list.add(mult3)
    }
    if (mult5 < number) {
      list.add(mult5)
    }
  }

  //this 'for each' loop goes through each UNIQUE element of the list
  //as a result, duplicates are ignored
  for (let item of list) {
    sum = sum + item
  }
  return sum
}

multiplesV4(1000);