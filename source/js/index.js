const myObserver = new IntersectionObserver((entries) => {
  entries.forEach( (entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }

  })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => myObserver.observe(element))

const buttonCards = document.querySelectorAll('.card-image'); // Corrigido o nome para plural

// Iterar sobre cada card-image
buttonCards.forEach((buttonCard) => {
    const button = buttonCard.querySelector('.card-button');

    buttonCard.addEventListener('mouseover', function () {
        button.style.display = 'block'; // Mostra o botão ao passar o mouse
    });

    buttonCard.addEventListener('mouseout', function () {
        button.style.display = 'none'; // Oculta o botão ao remover o mouse
    });
});