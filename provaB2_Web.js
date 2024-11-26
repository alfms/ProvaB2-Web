//Questao 1:
// Função para ler todas as cores da página e inseri-las em um vetor
function obterCores() {
    const ColorElements = document.querySelectorAll('#colornamestable .colornamespan a');
    const cores = [];
    ColorElements.forEach(elemento => {
        const ColorName = elemento.textContent.trim().toLowerCase();
        if (ColorName && !cores.includes(ColorName)) {
            cores.push(ColorName);
        }
    });
    return cores;
}
//Questao 2:
// Função para escolher 10 cores aleatórias do vetor de cores
function escolherRandomColors(cores, num = 10) {
    const shuffled = cores.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}
//Questao 3:
// Função que escolhe cor aleatória dentre as 10 cores escolhidas e imprime no console
function PrintRandom(cores) {
    // Seleciona uma cor aleatória do array
    const RandomColor = cores[Math.floor(Math.random() * cores.length)];

    // Seleciona todos os elementos que contêm os dados das cores na tabela
    const ColorElements = document.querySelectorAll('#colornamestable .innerbox');
    let corHex = 'N/A';

    // Percorre os elementos para encontrar o hex correspondente à cor selecionada
    ColorElements.forEach(elemento => {
        const elementoColorName = elemento.querySelector('.colornamespan a');
        if (elementoColorName && elementoColorName.textContent.trim().toLowerCase() === RandomColor) {
            const elementoHex = elemento.querySelector('.colorhexspan a');
            if (elementoHex) {
                corHex = elementoHex.textContent.trim();
            }
        }
    });

    // Imprime a cor aleatória e seu código hexadecimal no console
    console.log(`Cor selecionada: ${RandomColor} (${corHex})`);
}

//Executando tudo

const AllColors = obterCores();
const RandomColors = escolherRandomColors(AllColors);
console.log('10 cores aleatórias:', RandomColors);
PrintRandom(RandomColors);