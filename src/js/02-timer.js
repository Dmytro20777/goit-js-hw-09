import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    startCountdown(selectedDates[0]);
  },
};

const datePicker = flatpickr("#datetime-picker", options);

function updateTimer(endDate) {
  const now = new Date().getTime();
  const difference = endDate - now;

  if (difference <= 0) {
    clearInterval(timerInterval);
    Notiflix.Report.success('Countdown Timer', 'Time is up!', 'OK');
    return;
  }

  const timeValues = convertMs(difference);

  document.querySelector("[data-days]").textContent = addLeadingZero(timeValues.days);
  document.querySelector("[data-hours]").textContent = addLeadingZero(timeValues.hours);
  document.querySelector("[data-minutes]").textContent = addLeadingZero(timeValues.minutes);
  document.querySelector("[data-seconds]").textContent = addLeadingZero(timeValues.seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value < 10 ? `0${value}` : value;
}

let timerInterval;

function startCountdown(selectedDate) {
  const endDate = new Date(selectedDate).getTime();

  updateTimer(endDate);

  timerInterval = setInterval(() => {
    updateTimer(endDate);
  }, 1000);
}
