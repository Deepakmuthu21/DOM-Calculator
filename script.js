function element(tagname, content, attrname, attrval, id) {
  let ele = document.createElement(tagname);

  ele.innerText = content;
  ele.setAttribute(attrname, attrval);
  ele.id = id;
  return ele;
}
let title = element("h1", "CALCULATOR", "class", "title", "title");
let paragraph = element("p", "DOM CALCULATOR", "class", "para", "description");

let input = element("textarea", "", "class", "input", "result");
input.setAttribute("type", "text");
input.setAttribute("readonly", "readonly");
input.setAttribute("placeholder", "0");

let clearAll = element("button", "C", "class", "clrAll", "clear");
clearAll.addEventListener("click", () => {
  let value = document.getElementById("result").value;
  input.innerText =  "";
});

let back = element("button", "←", "class", "btn", "back");
back.addEventListener("click", () => {
  let value = document.getElementById("result");

  result.value = result.value.slice(0, -1);
});
let dot = element("button", ".", "class", "btn", "dot");
dot.addEventListener("click", () => {
  let value = document.getElementById("result").value;
  input.innerText = value += ".";
});

let cross = element("button", "*", "class", "symbol", "cross");
cross.addEventListener("click", () => {
  let value = document.getElementById("result").value;
  input.innerText = value += "*";
});

let plus = element("button", "+", "class", "symbol", "add");
plus.addEventListener("click", () => {
  let value = document.getElementById("result").value;
  input.innerText = value += "+";
});

let minus = element("button", "-", "class", "symbol", "subtract");
minus.addEventListener("click", () => {
  let value = document.getElementById("result").value;
  input.innerText = value += "-";
});

let divison = element("button", "/", "class", "symbol", "division");
divison.addEventListener("click", () => {
  let value = document.getElementById("result").value;
  input.innerText = value += "/";
});

let dblzero = element("button", "00", "class", "btn", "dblzero");
dblzero.addEventListener("click", () => {
  let value = document.getElementById("result").value;
  input.innerText = value += "00";
});



let seven = element("button", "7", "class", "btn", "7");

seven.addEventListener("click", () => {
  let value = document.getElementById("result").value;
  input.innerText = value += "7";
});
seven.addEventListener("", () => {
  let value = document.getElementById("result").value;
  input.innerText = value += "7";
});

let eight = element("button", "8", "class", "btn", "8");
eight.addEventListener("click", () => {
  let value = document.getElementById("result").value;
  input.innerText = value += "8";
});

let nine = element("button", "9", "class", "btn", "9");
nine.addEventListener("click", () => {
  let value = document.getElementById("result").value;
  input.innerText = value += "9";
});

let four = element("button", "4", "class", "btn", "4");
four.addEventListener("click", () => {
  let value = document.getElementById("result").value;
  input.innerText = value += "4";
});


let five = element("button", "5", "class", "btn", "5");
five.addEventListener("click", () => {
  let value = document.getElementById("result").value;
  input.innerText = value += "5";
});

let six = element("button", "6", "class", "btn", "6");
six.addEventListener("click", () => {
  let value = document.getElementById("result").value;
  input.innerText = value += "6";
});


let one = element("button", "1", "class", "btn", "1");
one.addEventListener("click", () => {
  let value = document.getElementById("result").value;
  input.innerText = value += "1";
});


let two = element("button", "2", "class", "btn", "2");
two.addEventListener("click", () => {
  let value = document.getElementById("result").value;
  input.innerText = value += "2";
});


let three = element("button", "3", "class", "btn", "3");
three.addEventListener("click", () => {
  let value = document.getElementById("result").value;
  input.innerText = value += "3";
});


let zero = element("button", "0", "class", "btn", "0");
zero.addEventListener("click", () => {
  let value = document.getElementById("result").value;
  input.innerText = value += "0";
});


let equal = element("button", "=", "class", "equal", "equal");
equal.addEventListener("click", () => {
  let value = document.getElementById("result").value;
  
  input.innerText=eval(value)
  
});
 // Function to append a number to the display
 function appendNumber(number) {
  let value = document.getElementById("result").value;
  
  
  let num= number
  
  
  
  input.innerText = value += num
}

// Function to remove the last character from the display
function backspace() {
  let value = document.getElementById("result");

  result.value = result.value.slice(0, -1);
}

// Function to clear the display
function clearDisplay() {
  let value = document.getElementById("result").value;
  input.innerText =  "";
}
function arith(){
  let value = document.getElementById("result").value;
  
  input.innerText=eval(value)
  

}










// Function to handle keyboard input
document.addEventListener('keydown', function(event) {
  const key = event.key;
  if ((key >= '0' && key <= '9') || key==="."|| key==="+"|| key==="-" || key==="*"|| key==="/"   ) {
      // If the key is a number, append it to the display
      appendNumber(key);
  } else if (key === 'Backspace') {
      // If the key is Backspace, remove the last character
      backspace();
  } else if (key === 'Escape') {
      // If the key is Escape, clear the display
      clearDisplay();

  }
  else if (key === '='|| key==="Enter") {
    // If the key is equal, do arith program
    arith();
  }
  else{
    alert("press only numbers")
  }
});



let div = element("div", "", "class", "container", "container");
div.append(
  input,
  clearAll,
  back,
  dot,
  cross,
  seven,
  eight,
  nine,
  plus,
  four,
  five,
  six,
  minus,
  one,
  two,
  three,
  divison,
  zero,
  dblzero,
  equal
);


document.body.append(div);
document.body.append(title);
document.body.append(paragraph);
