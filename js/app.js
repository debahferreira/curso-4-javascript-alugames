let listaDeAlugados = ['alugado'];

function alterarStatus(id) {
    let jogo = document.getElementById(`game-${id}`);
    let imagemJogo = jogo.querySelector('.dashboard__item__img');
    let botaoJogo = jogo.querySelector('.dashboard__item__button');
    let nomeJogo = jogo.querySelector('.dashboard__item__name');
    
    if(imagemJogo.classList.contains('dashboard__item__img--rented')) {
        if(confirm(`Você confirma a devolução do jogo ${nomeJogo.textContent}?`)) {
        imagemJogo.classList.remove('dashboard__item__img--rented');
        botaoJogo.classList.remove('dashboard__item__button--return');
        botaoJogo.innerHTML = 'Alugar';
        listaDeAlugados.pop();
        quantidadeDeAlugados();
        }
    } else {
        imagemJogo.classList.add('dashboard__item__img--rented');
        botaoJogo.classList.add('dashboard__item__button--return');
        botaoJogo.innerHTML = 'Devolver';
        listaDeAlugados.push('alugado');
        quantidadeDeAlugados();
    }
}

function quantidadeDeAlugados() {
    console.log(`A quantidade de jogos alugados é ${listaDeAlugados.length}.`);
}