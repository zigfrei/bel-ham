<script setup lang="ts">
const startYear = 2025;
const currYear = new Date().getFullYear();
const copyrightYears =
  currYear > startYear ? `${startYear}–${currYear}` : `${startYear}`;
</script>

<template>
  <footer class="footer">
    <div class="main-content">
      <div class="left-section">
        <nuxt-link class="logo" to="/">
          <div class="logo-icon-wrapper">
            <icon size="20px" name="icons:logo" class="logo-icon" />
          </div>
          <span class="logo-icon logo-text font-text-xl-mono">частота</span>
        </nuxt-link>
        <p class="motto font-text-sm">
          Сохраняем искусство радиоинженерии. От кристаллических приёмников до
          SDR — мы создаём будущее связи.
        </p>
      </div>
      <nav class="right-section">
        <div class="links-column">
          <h3 class="font-text-sb">Ресурсы</h3>
          <ul>
            <li>
              <nuxt-link to="/#" class="font-text-sm"
                >База схемотехники</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/#" class="font-text-sm"
                >Справочник по радиолампам</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/#" class="font-text-sm"
                >Калькулятор антенн</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/#" class="font-text-sm"
                >Карта репитеров</nuxt-link
              >
            </li>
          </ul>
        </div>
        <div class="links-column">
          <h3 class="font-text-sb">Сообщество</h3>
          <ul>
            <li><nuxt-link to="/#" class="font-text-sm">Форумы</nuxt-link></li>
            <li>
              <nuxt-link to="/#" class="font-text-sm">Местные клубы</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/#" class="font-text-sm"
                >Радиолюбительские ярмарки</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/#" class="font-text-sm">Соревнования</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="links-column">
          <h3 class="font-text-sb">Юридическая информация</h3>
          <ul>
            <li>
              <nuxt-link to="/#" class="font-text-sm"
                >Правила ФКС (FCC)</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/#" class="font-text-sm"
                >Условия использования</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/#" class="font-text-sm"
                >Политика конфиденциальности</nuxt-link
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="bottom-content">
      <p class="copyright font-text-sm">
        &copy; {{ copyrightYears }} Частота. Все права защищены.🐈‍⬛
      </p>
      <ul class="socials">
        <li>
          <a href="#" aria-label="Twitter">
            <icon name="icons:twitter" size="20px" />
          </a>
        </li>
        <li>
          <a href="#" aria-label="Github">
            <icon name="icons:github" size="20px" />
          </a>
        </li>
        <li>
          <a href="#" aria-label="Radio">
            <icon name="icons:radio" size="20px" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped lang="css">
.footer {
  width: 100%;
  max-width: 1280px;
  padding: 64px 32px 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.main-content {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 48px;
}

.left-section {
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
}

.logo {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
}

.logo-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  background-color: var(--zinc-800);
  border: 1px solid var(--zinc-700);
  border-radius: var(--radius-s);
}

.logo-icon {
  cursor: pointer;
  flex-shrink: 0;
}

.logo-text {
  text-transform: uppercase;
  color: var(--white);
}

.motto {
  color: var(--zinc-500);
}

.right-section {
  display: flex;
  align-items: flex-start;
  justify-self: flex-start;
  gap: 48px;
}

.links-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.links-column h3 {
  margin-bottom: 16px;
  color: var(--white);
}

.links-column ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.links-column a {
  text-decoration: none;
  color: var(--zinc-500);
  transition: color 0.3s ease;
}

.links-column a:hover {
  color: var(--brand-400);
}

.bottom-content {
  margin-top: 64px;
  width: 100%;
  border-top: 1px solid var(--zinc-900);
  padding-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.copyright {
  color: var(--zinc-600);
}

.socials {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.socials a {
  color: var(--zinc-500);
  transition: color 0.3s ease;
}

.socials a:hover {
  color: var(--brand-400);
}

@media (max-width: 1000px) {
  .footer {
    padding: 64px 24px 128px;
  }

  .main-content {
    flex-wrap: wrap;
    gap: 32px;
  }

  .right-section {
    gap: 32px;
    flex-wrap: wrap;
  }

  .bottom-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
}
</style>
