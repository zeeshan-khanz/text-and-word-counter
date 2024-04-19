const usertext = document.getElementById('inputtext');
const characteras = document.getElementById('char');
const totalwords = document.getElementById('words');

usertext.addEventListener('input', function() {
  characteras.textContent = usertext.value.length + ' characters';
  totalwords.textContent = usertext.value.trim().split(' ').length + ' words';
});