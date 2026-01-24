let timer = null;
let duration = 15;
let timeLeft = duration;
let started = false;
let ended = false;

let targetText = "";
const typingArea = document.getElementById("typing-area");
const timerDisplay = document.getElementById("timer-display");
const durationSelect = document.getElementById("test-duration");
const resultsDiv = document.getElementById("results");
const textDisplay = document.getElementById("text-display");

// -----------------------------------
// STEP 1: GENERATE RANDOM TEXT
// -----------------------------------
function generateRandomText(wordCount = 30) {
    let text = "";
    for (let i = 0; i < wordCount; i++) {
        text += WORDS[Math.floor(Math.random() * WORDS.length)] + " ";
    }
    return text.trim();
}

// -----------------------------------
// STEP 2: RENDER SPANS
// -----------------------------------
function renderText() {
    textDisplay.innerHTML = "";
    targetText.split("").forEach((char) => {
        const span = document.createElement("span");
        span.innerText = char;
        textDisplay.appendChild(span);
    });
}

// -----------------------------------
// TIMER MECHANICS
// -----------------------------------
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            endTest();
        }
    }, 1000);
}

function updateTimerDisplay() {
    timerDisplay.innerText = timeLeft + "s";
}

// -----------------------------------
// END TEST
// -----------------------------------
function endTest() {
    if (ended) return;
    ended = true;
    clearInterval(timer);
    typingArea.disabled = true;

    const typedText = typingArea.value;
    const totalChars = typedText.length;
    const minutes = duration / 60;

    const wpm = Math.round((totalChars / 5) / minutes) || 0;
    const cpm = Math.round(totalChars / minutes) || 0;

    const accuracy = calculateAccuracy(targetText, typedText);

    displayResults(wpm, cpm, accuracy, totalChars);
}

function calculateAccuracy(target, typed) {
    let correct = 0;
    for (let i = 0; i < typed.length; i++) {
        if (typed[i] === target[i]) correct++;
    }
    return Math.round((correct / typed.length) * 100) || 0;
}

function displayResults(wpm, cpm, accuracy, totalChars) {
    resultsDiv.style.display = "block";
    resultsDiv.innerHTML = `
        <h2>Results</h2>
        <p>WPM: ${wpm}</p>
        <p>CPM: ${cpm}</p>
        <p>Accuracy: ${accuracy}%</p>
        <p>Total Chars Typed: ${totalChars}</p>
        <p>Duration: ${duration}s</p>
    `;
}

// -----------------------------------
// STEP 3: HANDLE TYPING + HIGHLIGHTING
// -----------------------------------
typingArea.addEventListener("input", () => {
    if (!started) {
        started = true;
        duration = parseInt(durationSelect.value);
        timeLeft = duration;
        updateTimerDisplay();
        startTimer();
    }

    const typed = typingArea.value.split("");
    const spans = textDisplay.children;

    for (let i = 0; i < spans.length; i++) {
        let char = typed[i];

        if (char == null) {
            spans[i].classList.remove("correct", "incorrect", "current");
        } else if (char === targetText[i]) {
            spans[i].classList.add("correct");
            spans[i].classList.remove("incorrect", "current");
        } else {
            spans[i].classList.add("incorrect");
            spans[i].classList.remove("correct", "current");
        }
    }

    // CARET (CURRENT POSITION)
    let currentIndex = typed.length;
    if (currentIndex < spans.length) {
        spans[currentIndex].classList.add("current");
    }
});

// -----------------------------------
// INIT TEST
// -----------------------------------
function initTest() {
    started = false;
    ended = false;
    typingArea.disabled = false;
    typingArea.value = "";
    resultsDiv.style.display = "none";

    targetText = generateRandomText();
    renderText();

    duration = parseInt(durationSelect.value);
    timeLeft = duration;
    updateTimerDisplay();
}

window.onload = initTest;

// auto focus
window.onload = () => {
    initTest();
    typingArea.focus();
};

// actuvate text when clicked
textDisplay.addEventListener("click", () => {
    typingArea.focus();
});
