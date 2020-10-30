const checkbox = document.querySelector('#checkbox');

checkbox.addEventListener('change', () => {
  // grab the class and insert toggle function
  document.body.classList.toggle('dark');
});