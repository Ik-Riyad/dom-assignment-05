// Background Color change randomly
document.getElementById("Background-btn").addEventListener('click', function () {
    document.getElementsByTagName("body")[0].style.background =
    "#" + bgColor();
})

// get the card button into a variable
const cardsBtn = document.querySelectorAll(".card-btn");
// set realtime day name using created function 
document.getElementById("day").innerText = `${dayName()},`;

// set realtime month date and year name using created function 
document.getElementById("date").innerText = currentDate();

// completed task alert var
let clickedCount = 0;

for (let i = 0; i < cardsBtn.length; i++) {
    const cardBtn = cardsBtn[i];
    cardBtn.addEventListener('click',
        function (event) {
            alert("Board Updated Successfully");

            // disable the card with disabled true in button
            cardBtn.disabled = true;
            cardBtn.classList.add("bg-gray-200", "text-gray-400");

            // called the history Container to append the created child div element
            const historyContainer = document.getElementById("history-container");
            const completeTaskContent = document.createElement("div");

            // Retrieve the inner text by manually navigating the DOM tree using parentNode and firstChild.nextElementSibling.
            let headerName = event.target.parentNode.parentNode.parentNode.firstChild.nextElementSibling.nextElementSibling.innerText;
            completeTaskContent.innerHTML = `
            <p class="p-3 bg-bcground rounded-2xl mb-8">You have completed the task ${headerName} at ${setTime()}</p>
            `
            historyContainer.appendChild(completeTaskContent);

            // Increase the number with Sum after clicked the button
            const convertedSum = checkBoxSum("check-Box");
            let sum = convertedSum + 1;
            document.getElementById("check-Box").innerText = sum;

            //Decrease the number with subtraction after clicked the button
            const convertedSubs = checkBoxSum("substraction-num");
            let substraction = convertedSubs - 1;
            document.getElementById("substraction-num").innerText = substraction;

            // completed task alert varName increase by clicked
            clickedCount++;
            // completed task alert condition
            if (clickedCount === cardsBtn.length) {
                 {
                    alert("Congrates!!! You have completed all the current task");
                };
            }
        })
};
// Clear history button
document.getElementById("clear-history").addEventListener('click', function () {
    const historyContainer = document.getElementById("history-container");
    historyContainer.innerHTML = "";
});






