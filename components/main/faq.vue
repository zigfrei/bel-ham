<script setup lang="ts">
import { mainFaq } from '~/data/faq';
import { useFaqSchema } from '~/composables/useFaqSchema';

useFaqSchema(mainFaq ?? []);
</script>
<template>
  <div class="section-wrapper">
    <section>
      <header>
        <h2 class="font-text-4xl-b">Часто задаваемые вопросы</h2>
        <p class="font-text-base">
          Получите ответы на ключевые вопросы о сервисе.
        </p>
      </header>
      <ul class="faq-list">
        <li v-for="(item, index) in mainFaq" :key="index" class="faq-item">
          <base-faq :question="item.question" :answer="item.answer" />
        </li>
      </ul>
    </section>
  </div>
</template>
<style scoped>
.section-wrapper {
  width: 100%;
  background-color: var(--zinc-900);
}

section {
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  padding: 128px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 48px;
}

.faq-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;
}

@media (max-width: 1000px) {
  section {
    padding: 56px 16px;
  }
}
</style>
