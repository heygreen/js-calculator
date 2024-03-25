const out = document.getElementById("output");
const themeToggle = document.getElementById("switch-theme");

// set saved theme from localstorage
if (localStorage.getItem("darkmode") == "true") {
    themeToggle.checked = true;
    changeTheme();
}

//calculating
function calc(value) {
    try {
        calculatedValue = eval(value.replace(/^0+/, "") || null);
        out.value = Number(calculatedValue).toFixed(10).replace(/\.0+$/, '').replace(/0+$/, '');
    } catch (error) {
        alert("There is a syntax error. Sorry.")
    }
}

// handeling button presses
function addToScreen(enteredValue) {
    out.value += enteredValue;
}
function allClear() {
    out.value = "";
}
function rmChar() {
    out.value = out.value.slice(0, -1);
}

//handeling keyboard
document.addEventListener("keydown", keyPressed)

function keyPressed(e) {
    if (e.key == "1") {
        out.value += "1";
    } if (e.key == "2") {
        out.value += "2";
    } if (e.key == "3") {
        out.value += "3";
    } if (e.key == "4") {
        out.value += "4";
    } if (e.key == "5") {
        out.value += "5";
    } if (e.key == "6") {
        out.value += "6";
    } if (e.key == "7") {
        out.value += "7";
    } if (e.key == "8") {
        out.value += "8";
    } if (e.key == "9") {
        out.value += "9";
    } if (e.key == "0") {
        out.value += "0";
    } if (e.key == "*") {
        out.value += "*";
    } if (e.key == "/") {
        out.value += "/";
    } if (e.key == "+") {
        out.value += "+";
    } if (e.key == "-") {
        out.value += "-";
    } if (e.key == "Backspace") {
        rmChar();
    } if (e.key == "Delete") {
        allClear();
    } if (e.key == ",") {
        out.value += ".";
    } if (e.key == ".") {
        out.value += ".";
    } if (e.key == "=") {
        calc(out.value);
    } if (e.key == "Enter") {
        calc(out.value);
    }
}


//handeling darkmode
function changeTheme() {
    if (themeToggle.checked == true) {
        document.body.style.backgroundColor = "#1B1A55";
        document.getElementById("content").style.backgroundColor = "#070F2B";
        document.getElementById("content").style.boxShadow = "4px 4px 12px #0d1a4c";
        localStorage.setItem("darkmode", "true");
    } else {
        document.body.style.backgroundColor = "rgb(230, 230, 230)";
        document.getElementById("content").style.backgroundColor = "white";
        document.getElementById("content").style.boxShadow = "4px 4px 12px #b5b5b5";
        localStorage.setItem("darkmode", "false");
    }
}