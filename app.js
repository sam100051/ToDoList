function ajouter() {
  const input = document.getElementById('tache');
  const texte = input.value.trim();
  if (texte === '') return;
  const liste = document.getElementById('liste');
  const li = document.createElement('li');
  li.textContent = texte;
  li.onclick = function() {
    li.classList.toggle('done');
  };
  liste.appendChild(li);
  input.value = '';
}
document.getElementById('tache')
  .addEventListener('keypress', function(e) {
    if (e.key === 'Enter') ajouter();
  });