const cardsBtn = document.querySelectorAll(".card-btn");


for (let i = 0; i < cardsBtn.length; i++) {
    const cardBtn = cardsBtn[i];
    cardBtn.addEventListener('click',
        function () {
            alert("Board Updated Successfully");
            cardBtn.disabled = true;
            cardBtn.classList.add("bg-gray-200", "text-gray-400");
            const historyContainer = document.getElementById("history-container");
            const completeTaskContent = document.createElement("div");
            completeTaskContent.innerHTML = `
            <p class="p-3 bg-bcground rounded-2xl mb-8">You have completed the task ${headerText()} at ${setTime()}</p>
            `
            historyContainer.appendChild(completeTaskContent);

        })
};
document.getElementById("clear-history").addEventListener('click', function () {
    const historyContainer = document.getElementById("history-container");
    historyContainer.innerHTML = "";
});




