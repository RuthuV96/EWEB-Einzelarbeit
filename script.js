// Typer function in head
var i = 0;
var j = 0;
var txt1 = 'Hello, my name is Ruthu!';
var txt2 = 'Nice to meet you :)';
var speed = 50;

async function typeWriterHeader() {
  for (let character of txt1) {
    document.getElementById("header1").innerHTML += character;
    await new Promise(resolve=>setTimeout(resolve, speed));
  }
  for (let character of txt2) {
    document.getElementById("header2").innerHTML += character;
    await new Promise(resolve=>setTimeout(resolve, speed));
  }
}

function showNumber() {
  document.getElementById("number").innerHTML = txt2.charAt(0);
}

// Topbar stuff
// Source: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// Language scale animation when in viewport

let options = {
  root: document.getElementsByClassName('language-bar'),
  rootMargin: '0px',
  threshold: 1.0
}

let callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.className.add('language-bar-display');
    } else {
      entry.className.remove('language-bar-display');
    }
  });
};

let observer = new IntersectionObserver(callback, options);
