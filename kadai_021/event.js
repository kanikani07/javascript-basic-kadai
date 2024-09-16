const changeTextBtn=document.getElementById('btn');
const text=document.getElementById('text')
changeTextBtn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent='ボタンをクリックしました';
  }, 2000);
});