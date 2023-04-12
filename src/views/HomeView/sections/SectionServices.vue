<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';
</script>

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
        <AppButton>Fazer orçamento</AppButton>
      </article>
      <article>
        <h3>Social Media</h3>
        <p>
          Este serviço é a solução perfeita para empresas que desejam construir e expandir sua
          presença nas redes sociais de maneira profissional e eficiente. Ele inclui a criação de
          conteúdo exclusivo e relevante para cada plataforma de mídia social e de acordo com o
          público-alvo. Nós também nos certificamos de que cada conteúdo esteja alinhado com a
          identidade visual da marca, para garantir consistência e fortalecimento da marca.
        </p>
        <AppButton>Fazer orçamento</AppButton>
      </article>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: #f2e5ff;
}

.container {
  display: flex;
  gap: 20px;
}

article {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.144);
}

h3 {
  font-size: 1.4em;
  font-weight: 500;
  color: darkmagenta;
  margin-bottom: 5px;
}

p {
  flex: 1;
  font-size: 0.9em;
  margin-bottom: 15px;
}

@media (max-width: 800px) {
  .container {
    flex-direction: column;
  }
}
</style>
