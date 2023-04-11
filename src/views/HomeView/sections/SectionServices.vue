<template>
  <section class="site-width" id="services">
    <header>
      <h2>Serviços</h2>
    </header>
    <div class="container">
      <article>
        <h3>Idêntidade Visual</h3>
        <p>
          Este serviço inclui a criação de um conjunto de elementos visuais que representam a sua
          marca de forma única e memorável. Através de uma pesquisa aprofundada sobre a sua empresa,
          o mercado e o público-alvo, nossos designers desenvolvem um conjunto de elementos visuais,
          incluindo logotipo, cores, tipografia, imagens e outros elementos gráficos que juntos
          criam uma identidade visual inesquecível.
        </p>
        <button>Fazer orçamento</button>
      </article>
      <article>
        <h3>Social Media</h3>
        <p>
          <!-- O serviço de Social Media é a solução perfeita para empresas que desejam construir e expandir sua presença nas
          redes sociais de maneira profissional e eficiente. Nossa equipe de especialistas em mídia social será
          responsável por planejar, executar e gerenciar estratégias de mídia social personalizadas para sua empresa. -->

          Este serviço é a solução perfeita para empresas que desejam construir e expandir sua
          presença nas redes sociais de maneira profissional e eficiente. Ele inclui a criação de
          conteúdo exclusivo e relevante para cada plataforma de mídia social e de acordo com o
          público-alvo. Nós também nos certificamos de que cada conteúdo esteja alinhado com a
          identidade visual da marca, para garantir consistência e fortalecimento da marca.
        </p>
        <button>Fazer orçamento</button>
      </article>
    </div>
  </section>
</template>

<style scoped>
header {
  /* margin-bottom: 30px; */
}

.container {
  display: flex;
  /* justify-content: center; */
  gap: 20px;
}

article {
  border-radius: 20px;
  /* overflow: hidden; */
  /* margin: 10px; */
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.144);
  background: #e0beff;
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

h3 {
  font-size: 1.4em;
  font-weight: 500;
  margin-bottom: 5px;
  color: darkmagenta;
}

p {
  flex: 1;
  margin-bottom: 15px;
  font-size: 0.9em;
}

@media (max-width: 800px) {
  .container {
    flex-direction: column;
  }
}
</style>
