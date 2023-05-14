// JavaScript code
function createButton() {
    // Get the input text
    var inputText = document.getElementById("textInput").value;

    // Create a new button
    var newButton = document.createElement("button");
    newButton.innerHTML = inputText;

    // Add the new button to the button board div
    var buttonBoard = document.getElementById("buttonBoard");
    buttonBoard.appendChild(newButton);

    // Say the text using speech synthesis
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(inputText);

    // Get the selected voice
    var voiceSelect = document.getElementById("voiceSelect");
    var selectedVoice = voiceSelect.options[voiceSelect.selectedIndex].value;

    // Set the selected voice
    var voices = synth.getVoices();
    for (var i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedVoice) {
            utterThis.voice = voices[i];
        }
    }

    
    
    synth.speak(utterThis);

    // Add event listener to the new button
    newButton.addEventListener("click", function () {
        synth.speak(new SpeechSynthesisUtterance(inputText));
    });
}
