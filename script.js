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
// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }


// Dad Jokes API
// https://wesbos.com/javascript/13-ajax-and-fetching-data/76-dad-jokes
const jokeButton = document.querySelector(".getJoke");
const jokeHolder = document.querySelector(".joke");

const buttonText = [
  "Ugh.",
  "OMG...",
  "Seriously?!",
  "Please stop!",
];

async function fetchJoke() {
  const response = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });

  const data = await response.json();
  return data;
}

async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke;
}

console.log(document.querySelector(".getJoke"));
console.log(jokeHolder);

jokeButton.addEventListener("click", handleClick);




// Language scale animation when in viewport

// let options = {
//   root: document.getElementsByClassName('language-bar'),
//   rootMargin: '0px',
//   threshold: 1.0
// }

// let callback = (entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.className.add('language-bar-display');
//     } else {
//       entry.className.remove('language-bar-display');
//     }
//   });
// };

// let observer = new IntersectionObserver(callback, options);



const elements = document.querySelectorAll(".language-bar div");

window.addEventListener("scroll", function () {
  for (const element of elements) {
    const bounding = element.getBoundingClientRect();
    if (
        bounding.top >= 0 && bounding.bottom <= window.innerHeight
    ) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  }
})