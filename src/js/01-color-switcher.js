// // Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body>
//  на випадкове значення, використовуючи інлайн стиль.Натисканням на кнопку «Stop» зміна кольору фону повинна
// зупинятися.

// // УВАГА
// // Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. Зроби так,
//  щоб доки зміна теми запущена, кнопка «Start» була неактивною(disabled).

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  setTimeout(() => {
    console.log('change color');
  }, delay);
}

const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
};
const delay = 1000;
colorInterval = null;
refs.start.disabled = false;

refs.start.addEventListener('click', changeColor);
function changeColor() {
  refs.start.disabled = true;
  refs.stop.disabled = false;
  colorInterval = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, delay);
}
refs.stop.addEventListener('click', ClearChangeColor);
function ClearChangeColor() {
  refs.stop.disabled = true;
  refs.start.disabled = false;
  clearInterval(colorInterval);
}