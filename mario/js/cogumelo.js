// Seleciona o elemento Mario na página
const mario = document.querySelector('.mario'); // Corrigido: agora seleciona corretamente a classe
// Seleciona o elemento do pipe (cano) na página
const pipe = document.querySelector('.pipe'); // Corrigido: agora seleciona corretamente a classe

// Função para simular o pulo do Mario
const jump = () => {
    // Adiciona a classe 'jump' ao Mario, ativando a animação do pulo
    mario.classList.add('jump');
    
    // Remove a classe 'jump' após 500ms (tempo do pulo)
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

// Cria um intervalo para verificar continuamente as posições do Mario e do Pipe
const loop = setInterval(() => {
    console.log('loop rodando'); // Apenas para depuração, mostra que o loop está ativo

    // Obtém a posição do pipe a partir da distância da esquerda
    const pipePosition = pipe.offsetLeft;

    // Obtém a posição do Mario, convertendo o valor da propriedade 'bottom' para número
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    console.log(`Posição do Mario: ${marioPosition}px`); // Exibe a posição do Mario para depuração

    // Verifica se o pipe está dentro de uma distância específica e se o Mario está muito baixo (não pulando)
    if (pipePosition < 120 && pipePosition > 0 && marioPosition < 80) {
        
        // Para a animação do pipe e mantém sua posição atual
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        // Para a animação do Mario e mantém sua posição atual
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        // Altera a imagem do Mario para 'game-over.png' e ajusta suas dimensões
        mario.src = 'img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px'; // Corrigido erro de sintaxe

        // Para o loop, pois o jogo acabou
        clearInterval(loop);
    }
}, 10); // Intervalo de 10ms para o loop de verificação

// Adiciona um ouvinte de evento para quando uma tecla for pressionada, chamando a função de pulo
document.addEventListener('keydown', jump);
