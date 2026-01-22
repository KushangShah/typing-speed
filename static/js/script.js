const targetText = document.getElementById("target-text").innerText;
const typingArea = document.getElementById("typing-area");

let startTime = null;
let endTime = null;


typingArea.addEventListener("input", () => {
    const userInput = typingArea.value;

    // Start timer on first input
    if (!startTime) {
        startTime = Date.now();
    }

    // Check if finished
    if (userInput === targetText) {
        endTime = Date.now();
        const totalTime = (endTime - startTime) / 1000; // seconds
        const totalChars = targetText.length;
        const minutes = totalTime / 60;

        const wpm = Math.round((totalChars / 5) / minutes);
        const cpm = Math.round(totalChars / minutes);
        const accuracy = 100;

        // Hide typing UI and show results
        typingArea.style.display = "none";
        const resultsDiv = document.getElementById("results");
        resultsDiv.style.display = "block";
        document.getElementById("time").innerText = `Time: ${totalTime.toFixed(2)} seconds`;
        document.getElementById("wpm").innerText = `WPM: ${wpm}`;
        document.getElementById("cpm").innerText = `CPM: ${cpm}`;
        document.getElementById("accuracy").innerText = `Accuracy: ${accuracy}%`;

        // === PUT YOUR FETCH CODE HERE ↓ ===

        const resultsData = {
            time: totalTime.toFixed(2),
            wpm: wpm,
            cpm: cpm,
            accuracy: accuracy
        };

        fetch("/submit_results", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(resultsData)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Server response:", data);
        })
        .catch(error => {
            console.error("Error sending results:", error);
        });

        // === END OF FETCH CODE ===
    }
});































































