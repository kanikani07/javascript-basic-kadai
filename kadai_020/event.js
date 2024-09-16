const changeTextBtn=document.getElementById('btn');
const text=document.getElementById('text')
changeTextBtn.addEventListener('click', () => {
  text.textContent='ボタンをクリックしました';
});