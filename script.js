"use strict";
(function() {
window.addEventListener("load", init1);

//setTimeout Example
function init1() {
  let demobtn1 = document.getElementById("demo-btn1");
  demobtn1.addEventListener("click", delayedMessage);
}

function delayedMessage() {
  let outputtext1 = document.getElementById("output-text1");
  outputtext1.textContent = "Wait for it...";
  setTimeout(sayHello1, 5000);
}

function sayHello1() { // called when the timer goes off
  let outputtext1 = document.getElementById("output-text1");
  outputtext1.textContent = "Hello1!";
}


//setInterval Example
  window.addEventListener("load", init2);
  
  function init2() {
    let demobtn2 = document.getElementById("demo-btn2");
    demobtn2.addEventListener("click", repeatedMessage);
  }
  
  let timerId2 = null; // stores ID of interval timer
  function repeatedMessage() {
    timerId2 = setInterval(sayHello2, 1000);
  }
  function sayHello2() {
    let outputtext2 = document.getElementById("output-text2");
    outputtext2.textContent += "Hello2!";
  }

//“Toggling” Animation w/ clearInterval
  window.addEventListener("load", init3);
  let timerId3 = null; // stores ID of interval timer
  function init3() {
    let togglebtn = document.getElementById("toggle-btn");
    togglebtn.addEventListener("click", toggleMessageInterval);
  }
  
  function toggleMessageInterval() {
    if (timerId3 === null) {
      timerId3 = setInterval(sayHello3, 1000);
    } else {
      clearInterval(timerId3);
      timerId3 = null; // 2. Why is this line important?
// 3. What happens if you swap the two lines above?
    }
  }
  
  function sayHello3() {
    let outputtext3 = document.getElementById("output-text3");
    outputtext3.textContent += "Hello3!";
  }
  
})();