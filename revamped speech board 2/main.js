// Define variables
const textInput = document.getElementById('text-input');
const addButton = document.getElementById('add-button');
const buttonContainer = document.getElementById('button-container');
let voices = [];

// Get the available voices and populate the voices array
function populateVoices() {
    voices = window.speechSynthesis.getVoices();
}

// Speak the text using the selected voice and speed
function speak(text, voice, speed) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    utterance.rate = speed;
    window.speechSynthesis.speak(utterance);
}

// Create a new button with the entered text
function createButton() {
    const buttonText = textInput.value;
    if (buttonText) {
        const button = document.createElement('button');
        button.innerText = buttonText;
        button.addEventListener('click', () => {
            speak(buttonText, voices[voiceSelect.value], speedInput.value);
        });
        buttonContainer.appendChild(button);
    }
    textInput.value = '';
}

// Populate the voices array when the voices are loaded
window.speechSynthesis.onvoiceschanged = () => {
    populateVoices();
};

// Call the createButton function when the add button is clicked
addButton.addEventListener('click', createButton);

// Populate the voice select box with the available voices
const voiceSelect = document.createElement('select');
voices.forEach((voice, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.innerText = voice.name;
    voiceSelect.appendChild(option);
});
document.body.appendChild(voiceSelect);

// Create a speed input box
const speedInput = document.createElement('input');
speedInput.type = 'number';
speedInput.value = .8;
document.body.appendChild(speedInput);
