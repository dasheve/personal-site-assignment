function showReverse() {

    if (document.querySelector(".input-1").value === "") {
        alert("Enter a value!");
    }
    const input1 = document.querySelector(".input-1").value;
    var splitString = input1.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    document.querySelector(".input-2").value = joinArray;
    document.querySelector(".result").innerHTML = "<-------->";

}


function checkEquality() {
    if (document.querySelector(".input-1").value === "") {
        alert("Enter values");
    } else {
        const input1 = document.querySelector(".input-1").value;
        const input2 = document.querySelector(".input-2").value;
        if (input1 === input2) {
            document.querySelector(".result").innerHTML = "Both values are equal";
        } else if (input1 != input2) {
            document.querySelector(".result").innerHTML = "Values are not equal";
        }
    }
}

function clean() {
    document.querySelector(".result").innerHTML = "<-------->";
    document.querySelector(".input-1").value = "";
    document.querySelector(".input-2").value = "";
}

function showForm() {
    document.querySelector(".form-content").classList.add("for-content");
    document.querySelector(".res").classList.add("for-content");
}

function checkZodiac() {
    const name = document.getElementById("name").value;
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    if (name == "" || day == "" || month == "") {
        alert("Please enter all values");
    } else {
        let sign = "";
        switch (month) {
            case "1":
                sign = "Sirius";
                break;
            case "2":
                sign = "Betelgeuse";
                break;
            case "3":
                sign = "Proxima Centauri";
                break;
            case "4":
                sign = "Rigel";
                break;
            case "5":
                sign = "Vega";
                break;
            case "6":
                sign = "Aldebaran";
                break;
            case "7":
                sign = "Pollux";
                break;
            case "8":
                sign = "Acrux";
                break;
            case "9":
                sign = "Algol";
                break;
            case "10":
                sign = "Deneb";
                break;
            case "11":
                sign = "Altair";
                break;
            case "12":
                sign = "Lynx";
                break;
        }
        document.querySelector(".zodiac-result").classList.add("for-content");
        document.querySelector(".zodiac-result").innerHTML = sign;
    }
}

function validateDay() {
    const day = document.getElementById("day").value;
    if (day < 1 || day > 31) {
        alert("Day should from 1 to 31");
        document.getElementById("day").focus();
        document.getElementById("day").select();
    }
}

function validateMonth() {
    const day = document.getElementById("month").value;
    if (day < 1 || day > 12) {
        alert("Month should from 1 to 31");
        document.getElementById("month").focus();
        document.getElementById("month").select();
    }
}