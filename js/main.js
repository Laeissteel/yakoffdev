(function () {

  const heroTitle = document.querySelector('.hero__title')
  const heroInfo = document.querySelector('.hero__info')
  const heroPresent = document.querySelector('.hero__present-list')

  if(!heroTitle ||  !heroInfo || !heroPresent) return

  // Функция которая отслеживает положение относительно вьюпорта
  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { // проверка пересечения с viewport
            // console.log(`Элемент ${entry.target.classList} появился в зоне видимости`);
            setTimeout(function() {
            // Ваш код, который выполнится спустя установленное время
            entry.target.classList.add('visible')
            }, 700);
        }
    });
}, {
    rootMargin: '0px',
    threshold: 0.7 // процент перекрытия (от 0 до 1); можно настраивать чувствительность
});

observer.observe(heroTitle);
observer.observe(heroInfo);
observer.observe(heroPresent);


  // console.log(isElement)

})()