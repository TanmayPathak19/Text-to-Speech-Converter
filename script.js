const speech = new SpeechSynthesisUtterance();
const voiceSelect = document.querySelector("select");
const textarea = document.querySelector("textarea");
const button = document.querySelector("button");

let voices = [];

function loadVoices() {
    voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = "";
    voices.forEach((v, i) => voiceSelect.add(new Option(`${v.name} (${v.lang})`, i)));
    speech.voice = voices[0];
}

voiceSelect.onchange = () => speech.voice = voices[voiceSelect.value];
button.onclick = () => {
    speech.text = textarea.value;
    speechSynthesis.speak(speech);
};

speechSynthesis.onvoiceschanged = loadVoices;
loadVoices();
