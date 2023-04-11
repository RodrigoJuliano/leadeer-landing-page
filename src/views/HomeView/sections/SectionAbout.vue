<template>
  <section class="site-width" id="about">
    <h2>Quem somos?</h2>
    <div class="container">
      <div class="img-container">
        <img src="@/assets/images/1000_F_498729118_RiwWjhYDF4LgfnfEL0WCh6Ls4oh0cHPV.jpg" />
      </div>
      <p>
        Somos uma empresa de design inovadora e apaixonada por criar soluções criativas e
        personalizadas. Fundada em 2010 por um grupo de amigos que compartilham um amor pela
        criatividade e inovação. Nosso time é composto por designers talentosos e experientes, que
        estão sempre buscando novas formas de surpreender e superar as expectativas dos nossos
        clientes. Nosso objetivo é fornecer um serviço completo de design, desde a concepção até a
        implementação. Nós trabalhamos em estreita colaboração com nossos clientes para entender
        suas necessidades e objetivos, e transformar suas ideias em realidade.
      </p>
    </div>
  </section>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.container > * {
  flex: 1;
}

@media screen and (max-width: 750px) {
  .container {
    flex-direction: column;
    align-items: center;
  }
}

img {
  border-radius: 20px;
  width: 100%;
  aspect-ratio: 1000/633;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.144);
}

.img-container {
  display: flex;
  align-items: center;
}

p {
  /* max-width: 530px; */
}
</style>
