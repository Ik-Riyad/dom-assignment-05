// Real time function with AM and PM using toLocaleTimeString()
function setTime() {
    let times = new Date();
    return times.toLocaleTimeString();
}
// Created the real Time day using getDay()
function dayName() {
    let daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = new Date();
    let weekDay = daysName[day.getDay()];
    return weekDay;
}
// Current date 
function currentDate() {
    let daysName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = new Date();
    let monthName = daysName[month.getMonth()];
    let dateName = month.getDate();
    let yearName = month.getFullYear();

    return `${monthName} ${dateName} ${yearName}`;
}

// get the inner Text and converted to number data type and sum or subtraction with given number
function checkBoxSum(id) {
    const checkBox = document.getElementById(id).innerText;
    const number = parseInt(checkBox);
    return number;
}

// background color function using random number to created a Hex color code
function bgColor() {
    let hexNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F",];
    let hexColorCode = "";
    for (var i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * hexNumbers.length);
        hexColorCode += hexNumbers[randomIndex];
    }
    return hexColorCode;
}

