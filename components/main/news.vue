<script setup lang="ts">
import type { NewsCard } from '~/types/main';
import { newsCards } from '~/data/news';
</script>
<template>
  <div class="section-wrapper">
    <section>
      <header>
        <div class="left-column">
          <h2 class="font-text-4xl-b">Последние новости</h2>
          <p class="font-text-base">
            Будьте в курсе последних событий и обновлений.
          </p>
        </div>
        <nuxt-link to="/news" class="btn-text font-text-sm-b"
          ><span>Все новости</span><icon name="icons:arrow-right" size="16px"
        /></nuxt-link>
      </header>
      <div class="cards">
        <base-card
          v-for="(card, index) in newsCards"
          :key="card.id"
          :id="card.id"
          :title="card.title"
          :subtitle="card.subtitle"
          :tag="card.tag"
          :image="card.image"
          :link="card.link"
          :date="card.date"
          :gradient="card.gradient"
        />
      </div>
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

  /* overflow: hidden; */
}

header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
}

header .left-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

.left-column p {
  color: var(--zinc-400);
}

.btn-text {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--brand-400);
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

.btn-text:hover {
  color: var(--brand-300);
}

.cards {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
}

@media (max-width: 1000px) {
  section {
    padding: 56px 16px;
  }

  header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 32px;
  }

  .cards {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
}
}

  @media (max-width: 1000px) {
    .cards {
      grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
    }
  }

  @media (max-width: 500px) {
    .cards {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }


</style>
