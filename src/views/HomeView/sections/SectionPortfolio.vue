<script setup lang="ts">
import AppSection from '@/components/AppSection.vue';
import SectionTitle from '@/components/SectionTitle.vue';

import img1 from '@/assets/images/business-cards-mockup_dreampix.jpg';
import img2 from '@/assets/images/business-cards-mockup_dreampix_w330.jpg';
import img3 from '@/assets/images/business-cards-mockup-mark.jpg';
import img4 from '@/assets/images/business-cards-mockup-mark_w330.jpg';
import img5 from '@/assets/images/business-cards-mockup_john.jpg';
import img6 from '@/assets/images/business-cards-mockup_john_w330.jpg';
import img7 from '@/assets/images/business-cards-mockup_michael.jpg';
import img8 from '@/assets/images/business-cards-mockup_michael_w330.jpg';

const items = [
  {
    src: img1,
    src_small: img2,
    alt: 'Cartão de visita da DreamPix. O cartão apresenta uma imagem de uma cidade em preto e branco, faixas em azul e informações sobre a empresa'
  },
  {
    src: img3,
    src_small: img4,
    alt: 'Cartão de visita do Mark Smith. Apresenta as cores laranja e preto, uma forma em exagono e informações da pessoa.'
  },
  {
    src: img5,
    src_small: img6,
    alt: 'Cartão de visita de John A. Powell. Design minimalista, de um lado preto e branco do outro, ícone formado por um quadrado sobreposto por três linhas curvas.'
  },
  {
    src: img7,
    src_small: img8,
    alt: 'Cartão de visita de Michael Johns. Design formado por um mosaico de quadrados suaves, em tons de preto e branco.'
  },
  {
    src: img3,
    src_small: img4,
    alt: 'Cartão de visita do Mark Smith. Apresenta as cores laranja e preto, uma forma em exagono e informações da pessoa.'
  }
];
</script>

<template>
  <AppSection id="portfolio">
    <SectionTitle>Portfólio</SectionTitle>
    <div class="container">
      <a v-for="(item, index) in items" :key="item.src + index" href="#undefined">
        <picture>
          <source media="(max-width: 599px)" :srcset="item.src_small" />
          <source media="(min-width: 600px)" :srcset="item.src" />
          <img
            :src="item.src"
            alt="Equipe formada por 7 pessoas, sendo 3 homens e 4 mulheres. Todos estão posando para foto de pé e sorrindo."
            loading="lazy"
          />
        </picture>
      </a>
    </div>
  </AppSection>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

a {
  color: white;
  text-decoration: none;
  line-height: 0; /* remove a weird bottom border */
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--elevation-1);
  transition: all 0.2s;
}

a:hover {
  box-shadow: var(--elevation-3);
  translate: 0 -10px;
}

img {
  display: inline-block;
  width: 330px;
  height: 330px;
  object-fit: cover;
  background-color: #f2e5ff;
  color: black;
  /* Reset the line-heigth to allow to read tha alt text */
  line-height: 1em;
}

@media (max-width: 450px) {
  .container {
    flex-direction: column;
  }
  a {
    width: 100%;
  }
  img {
    width: 100%;
    height: auto;
    aspect-ratio: 1/1;
  }
}
</style>
