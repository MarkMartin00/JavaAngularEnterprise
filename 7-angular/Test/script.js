
function d6 () {
    var d6 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    return d6;
   }
 const str = strength();  
   function strength() {
    let str = [d6(), d6(), d6(), d6()];
    str.sort();
    console.log(str);
    str.splice(0,1);
    console.log(str);
    const sum = str.reduce((partial_sum, a) => partial_sum + a,0);
    console.log(sum);
    console.log(typeof(sum));
    return sum;
  }
  const mod = (x) => {
    switch (x) {
      case 0 : case 1:
          return -5;
      case 2: case 3:
          return -4;
      case 4: case 5:
        return -3;
      case 6: case 7:
        return -2;
      case 8: case 9:
        return -1;
      case 10: case 11:
        return 0;
      case 12: case 13:
          return 1;
      case 14: case 15:
        return 2;
      case 16: case 17:
        return 3;
      case 18: case 19:
        return 4;
      case 20: case 21:
        return 5;
      default:
        return null;
    }
  }
console.log(mod(str));