function alterarStatus(id) {
    let jogo = document.getElementById(`game-${id}`);
    let imagemJogo = jogo.querySelector('.dashboard__item__img');
    let botaoJogo = jogo.querySelector('.dashboard__item__button');
    
    if(imagemJogo.classList.contains('dashboard__item__img--rented')) {
        imagemJogo.classList.remove('dashboard__item__img--rented');
        botaoJogo.classList.remove('dashboard__item__button--return');
        botaoJogo.innerHTML = 'Alugar';
    } else {
        imagemJogo.classList.add('dashboard__item__img--rented');
        botaoJogo.classList.add('dashboard__item__button--return');
        botaoJogo.innerHTML = 'Devolver';
    }
}