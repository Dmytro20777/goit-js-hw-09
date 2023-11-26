function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const startButton = document.querySelector("[data-start]");
const stopButton = document.querySelector("[data-stop]");

startButton.disabled = false; 
stopButton.disabled = true;

let intervalId;

startButton.addEventListener("click", handleStartClick);
stopButton.addEventListener("click", handleStopClick);

function handleStartClick() {
  startButton.disabled = true;
  stopButton.disabled = false;

  
  clearInterval(intervalId);

 
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function handleStopClick() {
  startButton.disabled = false;
  stopButton.disabled = true;

  
  clearInterval(intervalId);
}
