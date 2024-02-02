document.addEventListener("DOMContentLoaded", function () {
  // Aguarda o DOM ser completamente carregado antes de executar o código

  const slider = document.querySelector(".slider");
  // Obtém a referência do elemento HTML com a classe "slider"

  let slideIndex = 0;
  // Inicializa uma variável para rastrear o índice do slide atual

  function showSlides() {
    // Função que avança para o próximo slide e atualiza a exibição

    slideIndex++;
    // Incrementa o índice do slide

    if (slideIndex >= slider.children.length) {
      // Se o índice ultrapassar o número total de slides,
      // retorna para o primeiro slide (loop)
      slideIndex = 0;
    }

    slider.style.transform = `translateX(${-slideIndex * 100}%)`;
    // Atualiza a propriedade de transformação do estilo CSS do elemento "slider"
    // para mover os slides horizontalmente. O valor é calculado multiplicando
    // o índice do slide pelo tamanho do slider (100% por slide).
  }

  setInterval(showSlides, 5000);
  // Chama a função showSlides a cada 5000 milissegundos (5 segundos) usando setInterval,
  // criando um efeito de slider automático.
});
