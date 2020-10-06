function palindrome() {
  let str = document.getElementById("str-input").value.toLowerCase();
  if (str == "") { 
    document.getElementById("str-display").innerHTML = "";
    document.getElementById("result-display").innerHTML = "";
  } else {
    let regex = /\W|_/gi;
    let strReverse = str.split('').reverse().join('');
    document.getElementById("str-display").innerHTML = str + " ---> " + strReverse;
    document.getElementById("result-display").innerHTML = "The string " + (str == strReverse ? "IS" : "IS NOT") + " a palindrome!";
  }
}