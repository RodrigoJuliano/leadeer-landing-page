<script setup lang="ts">
import AppSection from '@/components/AppSection.vue';
import SectionTitle from '@/components/SectionTitle.vue';
</script>

<template>
  <AppSection id="about">
    <SectionTitle>Quem somos?</SectionTitle>
    <div class="container">
      <div class="img-container">
        <picture>
          <source media="(max-width: 599px)" srcset="@/assets/images/team_w500.jpg" />
          <source media="(min-width: 600px)" srcset="@/assets/images/team.jpg" />
          <img
            src="@/assets/images/team.jpg"
            alt="Equipe formada por 7 pessoas, sendo 3 homens e 4 mulheres. Todos estão posando para foto de pé e sorrindo."
            loading="lazy"
          />
        </picture>
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
  </AppSection>
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

@media (max-width: 750px) {
  .container {
    flex-direction: column;
    align-items: center;
  }
}

img {
  display: block;
  width: 100%;
  aspect-ratio: 1000/633;
  border-radius: 20px;
  box-shadow: var(--elevation-1);
  background-color: var(--color-bg-secundary);
}

.img-container {
  display: flex;
  align-items: center;
}
</style>
