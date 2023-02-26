// // Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body>
//  на випадкове значення, використовуючи інлайн стиль.Натисканням на кнопку «Stop» зміна кольору фону повинна
// зупинятися.

// // УВАГА
// // Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. Зроби так,
//  щоб доки зміна теми запущена, кнопка «Start» була неактивною(disabled).

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

colorInterval = null;
startBtn.disabled = false;

startBtn.addEventListener('click', changeColor);
stopBtn.addEventListener('click', ClearChangeColor);

function changeColor() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  colorInterval = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
}

function ClearChangeColor() {
  stopBtn.disabled = true;
  startBtn.disabled = false;
  clearInterval(colorInterval);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
