import Notiflix from "notiflix";

const inputDelay = document.querySelector("[name=delay]");
const inputStep = document.querySelector("[name=step]");
const inputAmount = document.querySelector("[name=amount]");
const form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const delay = Number(inputDelay.value);
  const step = Number(inputStep.value);
  const amount = Number(inputAmount.value);

   for (let i = 1; i <= amount; i++) {
    createPromise(i, delay + (i - 1) * step)
      .then(({ position, delay }) => {
        Notiflix.Notify.success('Promise Created', `Fulfilled promise ${position} in ${delay}ms`, 'OK');
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure('Promise Created', `Rejected promise ${position} in ${delay}ms`, 'OK');
      });
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}





































// import Notiflix from "notiflix";

// const inputDelay = document.querySelector("[name=delay]");
// const inputStep = document.querySelector("[name=step]");
// const inputAmount = document.querySelector("[name=amount]");
// const form = document.querySelector(".form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const delay = Number(inputDelay.value);
//   const step = Number(inputStep.value);
//   const amount = Number(inputAmount.value);

//   createPromises(amount, delay, step);
// });

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;

//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }

// function createPromises(amount, initialDelay, step) {
//   for (let i = 1; i <= amount; i++) {
//     createPromise(i, initialDelay + (i - 1) * step)
//       .then(({ position, delay }) => {
//         Notiflix.Report.success('Promise Created', `Fulfilled promise ${position} in ${delay}ms`, 'OK');
//       })
//       .catch(({ position, delay }) => {
//         Notiflix.Report.failure('Promise Created', `Rejected promise ${position} in ${delay}ms`, 'OK');
//       });
//   }
// }
