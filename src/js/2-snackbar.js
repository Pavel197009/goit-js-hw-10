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
  console.lpg(e);
  console.log(Number(e.currentTarget.elements.delay.value), e.currentTarget.elements.state.value === "fulfilled");
  createPromise(Number(e.currentTarget.elements.delay.value), e.currentTarget.elements.state.value === "fulfilled")
    .then(value => iziToast.success({position: 'topRight', message: `✅ Fulfilled promise in ${Number(e.currentTarget.elements.delay.value)}ms`}))
    .catch(error => iziToast.error({position: 'topRight', message: `❌ Rejected promise in ${Number(e.currentTarget.elements.delay.value)}ms`}));
  e.currentTarget.reset(); 
}
