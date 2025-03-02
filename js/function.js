function setTime() {
    let times = new Date();
    return times.toLocaleTimeString();
}

function dayName() {
    let daysName = ["Sunday", "Monday", "Twesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = new Date();
    let weekDay = daysName[day.getDay()];
    return weekDay;
}
function currentDate() {
    let daysName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = new Date();
    let monthName = daysName[month.getMonth()];
    let dateName = month.getDate();
    let yearName = month.getFullYear();

    return `${monthName} ${dateName} ${yearName}`;
}

function checkBoxSum(id) {
    const checkBox = document.getElementById(id).innerText;
    const number = parseInt(checkBox);
    return number;
}

function bgColor() {
    let hexNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F",];
    let hexColorCode = "";
    for (var i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * hexNumbers.length);
        hexColorCode += hexNumbers[randomIndex];
    }
    return hexColorCode;
}

