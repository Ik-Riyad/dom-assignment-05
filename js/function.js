function setTime() {
    let times = new Date();
    return times.toLocaleTimeString();
}

function checkBoxSum() {
    const checkBox = document.getElementById("check-Box").innerText;
    const number = parseInt(checkBox);
    return number+1;
}

function headerText() {
    let textStore = [];
    const headerElements = document.querySelectorAll(".header-element");
    for (const headerElement of headerElements) {
        textStore.push(headerElement.innerText);
    }
    return textStore;
}


