function findDifference(a, b) {
    let result1 = a.reduce((total,num) => total * num, 1);
    let result2 = b.reduce((total,num) => total * num, 1);
    
    return Math.abs(result1 - result2);
  }
  findDifference([2,2,3], [5,4,1]);
  findDifference([3,2,5], [1,4,4]);