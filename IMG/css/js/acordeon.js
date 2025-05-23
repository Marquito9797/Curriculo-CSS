document.addEventListener('DOMContentLoaded', () => {
  const acordeonTriggers = document.querySelectorAll('.acordeon .trigger');

  acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const acordeon = trigger.parentElement;
      const content = acordeon.querySelector('.content');

      if (acordeon.classList.contains('open')) {
        content.style.maxHeight = content.scrollHeight + 'px';
        requestAnimationFrame(() => {
          content.style.maxHeight = '0';
        });
        acordeon.classList.remove('open');
      } else {
        content.style.maxHeight = '0'; 
        acordeon.classList.add('open');
        requestAnimationFrame(() => {
          content.style.maxHeight = content.scrollHeight + 'px';
        });
      }
    });
  });
});
