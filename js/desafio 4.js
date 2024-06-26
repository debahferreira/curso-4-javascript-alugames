function ordemCrescente(numero1, numero2, numero3) {
    let listaOrdemCrescente = [numero1, numero2, numero3];
    listaOrdemCrescente.sort(function comparar(a, b) {
        return a - b;
    })
    console.log(listaOrdemCrescente);
}
ordemCrescente(1,7,5);