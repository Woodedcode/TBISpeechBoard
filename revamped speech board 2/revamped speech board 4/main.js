// SpeechSynthesisUtterance object
let utterance = new SpeechSynthesisUtterance();

// DOM elements
const form = document.getElementById("speechForm");
const textInput = document.getElementById("textInput");
const submitBtn = document.getElementById("submitBtn");
const savedInputs = document.getElementById("savedInputs");
const recallBtn = document.getElementById("recallBtn");
const resetBtn = document.getElementById("resetBtn");
const buttonContainer = document.getElementById("buttonContainer");

// Saved inputs array
let savedInputsArr = [];

// Form submission
form.addEventListener("submit", (event) => {
    event.preventDefault();
    utterance.text = textInput.value;
    speechSynthesis;