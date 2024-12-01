function gerarAleatorios(quantidade) {
    // Criar um array com todos os números possíveis
    let numeros = Array.from({ length: 60 }, (_, i) => i + 1);

    // Embaralhar o array de números usando o algoritmo de Fisher-Yates
    for (let i = numeros.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numeros[i], numeros[j]] = [numeros[j], numeros[i]]; // Troca de posição
    }

    // Retorna os primeiros 'quantidade' números do array embaralhado
    return numeros.slice(0, quantidade);
}

// Testando a função para gerar 6 números
console.log(gerarAleatorios(6));
