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