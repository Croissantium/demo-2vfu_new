import 'https://esm.run/@material/web/all.js';

const dialog = document.getElementById('dialog');
const openBtn = document.getElementById('openBtn');

// --- Кастомное открытие диалога ---
function openDialog() {
  dialog.setAttribute('openDialog', 'dialog'); // просто "dialog"
  dialog.open = true; // M3 открывает диалог
}

// --- Кнопка открытия ---
openBtn.addEventListener('click', openDialog);

// --- Событие после полной анимации открытия ---
dialog.addEventListener('opened', () => {
  console.log('Диалог открыт:', dialog.getAttribute('openDialog'));
});

// --- Событие закрытия ---
dialog.addEventListener('close', () => {
  const cancelClicked = dialog.returnValue === 'cancel';
  const okClicked = dialog.returnValue === 'ok';

  console.log('Диалог закрыт, что нажали:', dialog.returnValue);

  if (okClicked) {
    console.log('Нажата кнопка Ок');
  } 
  if (cancelClicked) {
    console.log('Нажата кнопка Отмена');
  }
});






/// Тема (светлая/тёмная)
const html = document.documentElement;

function applyTheme(theme) {
  html.classList.toggle("dark", theme === "dark");
}

function systemPrefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

// Светлая
document.getElementById("themeLight").addEventListener("click", () => {
  localStorage.setItem("theme", "light");
  applyTheme("light");
});

// Тёмная
document.getElementById("themeDark").addEventListener("click", () => {
  localStorage.setItem("theme", "dark");
  applyTheme("dark");
});

// Авто
document.getElementById("themeAuto").addEventListener("click", () => {
  localStorage.setItem("theme", "auto");
  applyTheme(systemPrefersDark() ? "dark" : "light");
});

// Реакция на изменение системной темы
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  const saved = localStorage.getItem("theme");
  
  if (saved === "auto" || !saved) {
    applyTheme(e.matches ? "dark" : "light");
  }
});