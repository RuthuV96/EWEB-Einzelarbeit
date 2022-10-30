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
