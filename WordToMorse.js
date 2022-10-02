function convert() {
  Mlist = [];
  var word = document.getElementById("word").value;
  Mlist.push(word + ":");
  for (i = 0; i < word.length; i++) {
    if (word[i] == "a" || word[i] == "A") {
      Mlist.push(".-");
    } else if (word[i] == "b" || word[i] == "B") {
      Mlist.push("-...");
    } else if (word[i] == "c" || word[i] == "C") {
      Mlist.push("-.-.");
    } else if (word[i] == "d" || word[i] == "D") {
      Mlist.push("-..");
    } else if (word[i] == "e" || word[i] == "E") {
      Mlist.push(".");
    } else if (word[i] == "f" || word[i] == "F") {
      Mlist.push("..-.");
    } else if (word[i] == "g" || word[i] == "G") {
      Mlist.push("--.");
    } else if (word[i] == "h" || word[i] == "H") {
      Mlist.push("....");
    } else if (word[i] == "i" || word[i] == "I") {
      Mlist.push("..");
    } else if (word[i] == "j" || word[i] == "J") {
      Mlist.push(".---");
    } else if (word[i] == "k" || word[i] == "K") {
      Mlist.push("-.-");
    } else if (word[i] == "l" || word[i] == "L") {
      Mlist.push(".-..");
    } else if (word[i] == "m" || word[i] == "M") {
      Mlist.push("--");
    } else if (word[i] == "n" || word[i] == "N") {
      Mlist.push("-.");
    } else if (word[i] == "o" || word[i] == "O") {
      Mlist.push("---");
    } else if (word[i] == "p" || word[i] == "P") {
      Mlist.push(".--.");
    } else if (word[i] == "q" || word[i] == "Q") {
      Mlist.push("--.-");
    } else if (word[i] == "r" || word[i] == "R") {
      Mlist.push(".-.");
    } else if (word[i] == "s" || word[i] == "S") {
      Mlist.push("...");
    } else if (word[i] == "t" || word[i] == "T") {
      Mlist.push("-");
    } else if (word[i] == "u" || word[i] == "U") {
      Mlist.push("..-");
    } else if (word[i] == "v" || word[i] == "V") {
      Mlist.push("...-");
    } else if (word[i] == "w" || word[i] == "W") {
      Mlist.push(".--");
    } else if (word[i] == "x" || word[i] == "X") {
      Mlist.push("-..-");
    } else if (word[i] == "y" || word[i] == "Y") {
      Mlist.push("-.--");
    } else if (word[i] == "z" || word[i] == "Z") {
      Mlist.push("--..");
    } else if (word[i] == "1") {
      Mlist.push(".----");
    } else if (word[i] == "2") {
      Mlist.push("..---");
    } else if (word[i] == "3") {
      Mlist.push("...--");
    } else if (word[i] == "4") {
      Mlist.push("....-");
    } else if (word[i] == "5") {
      Mlist.push(".....");
    } else if (word[i] == "6") {
      Mlist.push("-....");
    } else if (word[i] == "7") {
      Mlist.push("--...");
    } else if (word[i] == "8") {
      Mlist.push("---..");
    } else if (word[i] == "9") {
      Mlist.push("----.");
    } else if (word[i] == "0") {
      Mlist.push("-----");
    }
  }
  alert(arrayToString(Mlist));
}
function arrayToString(arr) {
  let str = "";
  arr.forEach(function (i, index) {
    str += i;
    if (index != arr.length - 1) {
      str += "  ";
    }
  });
  return str;
}
