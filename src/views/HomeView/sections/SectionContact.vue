<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import AppButton from '@/components/AppButton.vue';
import AppInput from '@/components/AppInput.vue';
import LinkIcon from '@/components/LinkIcon.vue';
import AppSection from '@/components/AppSection.vue';
import SectionTitle from '@/components/SectionTitle.vue';

const IconWhats = defineAsyncComponent(() => import('@/components/icons/IconWhatsapp.vue'));
const IconEmail = defineAsyncComponent(() => import('@/components/icons/IconEmail.vue'));
</script>

<template>
  <AppSection id="contact">
    <SectionTitle>Contato</SectionTitle>
    <div class="layout">
      <div>
        <p>
          Se você tiver alguma dúvida sobre nossos serviços de design ou quiser solicitar um
          orçamento, por favor, preencha o formulário. Se preferir, use as outras formas de contato
          abaixo. Nossa equipe de atendimento ao cliente irá responder o mais breve possível.
        </p>
        <LinkIcon href="#undefined" target="_blank" rel="external noreferrer">
          <IconWhats aria-label="Whatsapp" />
          (99) 99999-9999
        </LinkIcon>
        <br />
        <LinkIcon href="email:">
          <IconEmail aria-label="Email" />
          contato@email.com
        </LinkIcon>
      </div>
      <form>
        <AppInput id="form-name" name="name" label="Nome" required />
        <AppInput id="form-email" name="email" label="Email" required />
        <AppInput id="form-subject" name="subject" label="Assunto" required />
        <AppInput id="form-message" name="message" label="Mensagem" required multiline rows="2" />
        <AppButton type="submit">Enviar</AppButton>
      </form>
    </div>
  </AppSection>
</template>

<style scoped>
.app-section {
  background: var(--color-bg-secundary);
}

.layout {
  display: flex;
  max-width: 1024px;
  margin: auto;
  gap: 40px;
}

@media (max-width: 800px) {
  .layout {
    flex-direction: column;
  }
}

.layout > * {
  width: 100%;
  justify-content: center;
}

.app-input {
  margin-bottom: 10px;
}

.app-button {
  display: block;
  margin: auto;
}

p {
  margin-bottom: 20px;
}
</style>
