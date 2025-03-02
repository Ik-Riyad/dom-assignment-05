const cardsBtn = document.querySelectorAll(".card-btn");
document.getElementById("day").innerText = `${dayName()},`;
document.getElementById("date").innerText = currentDate();

let clickedCount = 0;

for (let i = 0; i < cardsBtn.length; i++) {
    const cardBtn = cardsBtn[i];
    cardBtn.addEventListener('click',
        function (event) {
            alert("Board Updated Successfully");
            cardBtn.disabled = true;
            cardBtn.classList.add("bg-gray-200", "text-gray-400");
            const historyContainer = document.getElementById("history-container");
            const completeTaskContent = document.createElement("div");
            let headerName = event.target.parentNode.parentNode.parentNode.firstChild.nextElementSibling.nextElementSibling.innerText;
            completeTaskContent.innerHTML = `
            <p class="p-3 bg-bcground rounded-2xl mb-8">You have completed the task ${headerName} at ${setTime()}</p>
            `
            historyContainer.appendChild(completeTaskContent);
            const convertedSum = checkBoxSum("check-Box");
            let sum = convertedSum + 1;
            document.getElementById("check-Box").innerText = sum;

            const convertedSubs = checkBoxSum("substraction-num");
            let substraction = convertedSubs - 1;
            document.getElementById("substraction-num").innerText = substraction;

            clickedCount++;

            if (clickedCount === cardsBtn.length) {
                 {
                    alert("Congrates!!! You have completed all the current task");
                };
            }
        })
};
document.getElementById("clear-history").addEventListener('click', function () {
    const historyContainer = document.getElementById("history-container");
    historyContainer.innerHTML = "";
});




