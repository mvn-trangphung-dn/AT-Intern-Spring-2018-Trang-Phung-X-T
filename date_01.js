function myFunction01() {
  let x = document.getElementById("x").value;
  let y =document.getElementById("y").value;
  let z = 0;
  if (x !== y) {
    z = +x + +y;
  } else {
    z = (+x + +y) * 3;
  }
  document.getElementById("ex01").innerHTML = "The value of z is: " + z;
}
function myFunction02() {
  let a = document.getElementById("a").value;
  let z = 0;
  const x =19;
  if (a <= x) {
    z = x - +a;
  } else {
    z = (+a - x) * 3;
  }
  document.getElementById("ex02").innerHTML = "The value of z is: " + z;
}
function myFunction03() {
  let s = document.getElementById("s").value;
  let arr = new Array();
  for (var i = 0 ; i < s.length; i++) {
    if ( s[i] === '*') {
      for (let j = 0; j <= 9; j++) {
        let d = s.replace(s[i], j)
        if (d % 3 === 0) {
          arr.push(d);
        }
      }
    }
  }
  document.getElementById("ex03").innerHTML = "The value of arr is: " + arr;
}
function myFunction04() {
  let s = document.getElementById("ch").value;
  let arr = new Array();
  for (var i = 0 ; i < s.length; i++) {
    if ( s[i] === '*') {
      for (let j = 0; j <= 9; j++) {
        let d = s.replace(s[i], j)
        if (d % 3 === 0 && d % 2 === 0) {
          arr.push(d);
        }
      }
    }
  }
  document.getElementById("ex04").innerHTML = "The value of arr is: " + arr;
}
