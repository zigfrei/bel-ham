<script setup lang="ts">
import { mainPartners } from '~/data/partners';
</script>
<template>
  <div class="section-wrapper">
    <section>
      <header>
        <h2 class="font-text-4xl-b">Наши партнеры</h2>
        <p class="font-text-base">
          Ключевые партнёры и их проекты
                </p>
      </header>
      <ul class="partners-list">
        <li v-for="(item, index) in mainPartners" :key="index" class="partner-item" :class="`partner${index + 1}`">
            <h3 class="title font-text-lg-mono-b">{{ item.name }}</h3>
            <p class="description font-text-xs">{{ item.description }}</p>
            <nuxt-img :src="item.image" :alt="item.name" class="partner-image" />
            
        </li>
      </ul>
    </section>
  </div>
</template>
<style scoped>
.section-wrapper {
  width: 100%;
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
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  margin-bottom: 48px;
}

.partners-list {
  width: 100%;
  display: grid;
    grid-template-areas: "card1 card1 card1 card2 card2 card2"
                         "card3 card3 card4 card4 card5 card5";
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.partner-item {
    width: 100%;
  display: flex;
  flex-direction: column;
align-items: flex-start;
justify-content: center;
padding: 16px;
background-color: var(--zinc-800);
border-radius: 16px;
}

.partner-image {
    width: 100%;
    height: 200px;
    margin-top: 12px;
    border-radius: 8px;
    object-fit: cover;
}

.partner1 {
    grid-area: card1;
}
.partner2 {
    grid-area: card2;
}
.partner3 {
    grid-area: card3;   
}
.partner4 {
    grid-area: card4;
}
.partner5 {
    grid-area: card5;
}

@media (max-width: 1000px) {
  section {
    padding: 56px 16px;
  }

  .partners-list {
  /* width: 100%;
  display: grid;
    grid-template-areas: "card1 card1 card1 card2 card2 card2"
                         "card3 card3 card4 card4 card5 card5";
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0; */
  grid-template-areas:
    "card1"
    "card2"
    "card3"
    "card4"
    "card5";
}
}
</style>
