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
  jokeHolder.classList.remove("animate__animated");
  jokeHolder.classList.remove("animate__fadeIn");
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke;
  jokeHolder.classList.add("animate__animated");
  jokeHolder.classList.add("animate__fadeIn");
}

console.log(document.querySelector(".getJoke"));
console.log(jokeHolder);

jokeButton.addEventListener("click", handleClick);



//animation for Language Skills bars
const elements = document.querySelectorAll(".language-bar div");

window.addEventListener("scroll",  function () {
  for (const element of elements) {
    const bounding = element.getBoundingClientRect();
    if (
        bounding.top >= 0 && bounding.bottom <= window.innerHeight
    ) {
       new Promise(resolve=>setTimeout(() => {
        element.classList.add("animate")
        resolve()
      }, 1000));
    } else {
      element.classList.remove("animate");
    }
  }
})


// //Twitter
// twttr.widgets.createTimeline(
//   {
//     sourceType: "profile",
//     screenName: "TwitterDev"
//   },
//   document.getElementById("container")
// );
