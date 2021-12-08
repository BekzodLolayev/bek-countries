const elSiteThemeToggler = document.querySelector('.header-dark-mode');

elSiteThemeToggler.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});