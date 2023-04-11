<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const IconWhats = defineAsyncComponent(() => import('@/components/icons/IconWhatsapp.vue'));
const IconEmail = defineAsyncComponent(() => import('@/components/icons/IconEmail.vue'));
</script>

<template>
  <section class="site-width" id="contact">
    <h2>Contato</h2>
    <div class="layout">
      <div>
        <p>
          Se você tiver alguma dúvida sobre nossos serviços de design ou quiser solicitar um
          orçamento, por favor, preencha o formulário. Se preferir, use as outras formas de contato
          abaixo. Nossa equipe de atendimento ao cliente irá responder o mais breve possível.
        </p>
        <p>
          <a href="#undefined" target="_blank" rel="external noreferrer">
            <IconWhats />
            <span> (99) 99999-9999</span>
          </a>
          <br />
          <a href="email:">
            <IconEmail />
            <span> contato@email.com</span>
          </a>
        </p>
      </div>
      <form>
        <label for="form-name">Nome</label>
        <input class="input" id="form-name" type="text" name="name" required />
        <label for="form-email">Email</label>
        <input id="form-email" type="email" name="email" required />
        <label for="form-subject">Assunto</label>
        <input id="form-subject" type="text" name="subject" required />
        <label for="form-message">Mensagem</label>
        <textarea id="form-message" name="message" rows="2" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.input {
  color: black;
}

section {
  background: #e0beff;
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

label {
  padding-left: 5px;
  font-size: 1em;
}

form > input,
form > textarea {
  margin-bottom: 10px;
}

input,
textarea {
  font-size: 1em;
  font-family: inherit;
  /* line-height: 1rem; */
  display: block;
  width: 100%;
  /* height: 2.8rem; */
  padding: 0.7rem;
  border: solid 2px white;
  border-radius: 10px;
  background-color: white;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.144);
}

textarea {
  resize: vertical;
  /* padding: calc(calc(2.8rem - 1rem) / 2) 0.9rem; */
  /* height: calc(3.8rem+4px); */
}

/* input:hover,
textarea:hover {
  border-color: #9f75c5;
} */

input:focus,
textarea:focus {
  border-color: purple;
  outline: none;
  /* box-shadow: 3px 3px 8px rgb(0, 0, 0, 0.144); */
}

button {
  display: block;
  margin: auto;
}

a {
  /* font-weight: 400; */
  text-decoration: none;
  /* padding: 1px 2px; */
  border-bottom: 1px solid transparent;
  color: darkmagenta;
  /* line-height: 5em; */
  /* vertical-align: middle; */
  display: inline-block;
}

a * {
  vertical-align: middle;
}

a:hover,
a.link-active {
  border-color: currentColor;
}

p + p {
  margin-top: 20px;
}

svg {
  height: 1em;
  width: 1em;
}
</style>
