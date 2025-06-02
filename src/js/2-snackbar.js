// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener('submit', onPromiseCreate);

function createPromise(delay, resolveResult) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (resolveResult) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

function onPromiseCreate(e) {
  e.preventDefault();
  let inputDelay = Number(e.currentTarget.elements.delay.value);
  let resolveResult = (e.currentTarget.elements.state.value === "fulfilled");
  createPromise(inputDelay, resolveResult)
    .then(value => iziToast.success({position: 'topRight', message: `✅ Fulfilled promise in ${inputDelay}ms`}))
    .catch(error => iziToast.error({position: 'topRight', message: `❌ Rejected promise in ${inputDelay}ms`}));
  e.currentTarget.reset(); 
}