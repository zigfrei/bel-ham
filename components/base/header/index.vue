<script setup lang="ts">
const isOpen = ref(false);
const isAtTop = ref(true);

const mobileMenu = ref<HTMLElement>();

function closeMenu() {
  if (mobileMenu.value) {
    mobileMenu.value.hidePopover();
  }
}

let onScroll: (() => void) | null = null;
let onPopoverToggle: ((e: Event) => void) | null = null;

onMounted(() => {
  onScroll = () => {
    isAtTop.value = window.scrollY <= 0;
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Sync Vue state with actual popover state
  onPopoverToggle = () => {
    // Prefer the real state of the element
    isOpen.value = !!mobileMenu.value?.matches(':popover-open');
  };
  mobileMenu.value?.addEventListener('toggle', onPopoverToggle);
});

onBeforeUnmount(() => {
  if (onScroll) window.removeEventListener('scroll', onScroll);
  if (onPopoverToggle)
    mobileMenu.value?.removeEventListener('toggle', onPopoverToggle);
});
</script>

<template>
  <div :class="['header-wrapper', { open: isOpen, 'has-border': !isAtTop }]">
    <header class="header" :class="{open: isOpen}">
      <div class="header-top">
        <nuxt-link
          class="logo"
          to="/"
          @click="closeMenu"
        >
          <div class="logo-icon-wrapper">
            <icon size="20px" name="icons:logo" class="logo-icon" />
          </div>
          <span class="logo-icon logo-text font-text-xl-mono">частота</span>
        </nuxt-link>

        <nav class="header-top-links" aria-label="Основные разделы сайта">
          <ul>
            <li>
              <nuxt-link to="/#" class="header-top-link font-text-sm-b">
                Схемы
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/#" class="header-top-link font-text-sm-b">
                Проекты
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/#" class="header-top-link font-text-sm-b">
                Встреча по обмену
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/#" class="header-top-link font-text-sm-b">
                Форум
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <div class="header-top-right">
          <button class="header-top-search-button">
            <icon
              name="icons:magnifying-glass"
              size="20px"
              class="header-top-search-icon"
            />
          </button>
          <div class="vertical-separator"></div>
          <nuxt-link class="call-button font-text-sm-b-mono">
            CQ CALL
          </nuxt-link>

          <base-button-link href="/#">Присоединиться</base-button-link>
        </div>

        <div class="header-top-right-mobile">
          <button
            class="header-menu-button"
            popovertarget="mobile-menu"
            aria-label="Открыть/закрыть меню"
            :class="{ active: isOpen }"
          >
            <i></i>
            <i></i>
            <i></i>
            <!-- <Transition name="fade" mode="out-in">
              <icon v-if="!isOpen" name="icons:menu" size="40px" />
              <icon v-else name="icons:cross" size="40px" />
            </Transition> -->
          </button>
        </div>
      </div>
    </header>
    <div id="mobile-menu" ref="mobileMenu" popover class="header-menu">
      <nav class="header-menu-nav">
        <nuxt-link to="/#" class="header-top-link" @click="closeMenu">
          <span class="font-text-sm-b">Схемы</span>
        </nuxt-link>

        <nuxt-link to="/#" class="header-top-link" @click="closeMenu">
          <span class="font-text-sm-b">Проекты</span>
        </nuxt-link>

        <nuxt-link to="/#" class="header-top-link" @click="closeMenu">
          <span class="font-text-sm-b">Встреча по обмену</span>
        </nuxt-link>

        <nuxt-link to="/#" class="header-top-link" @click="closeMenu">
          <span class="font-text-sm-b">Форум</span>
        </nuxt-link>
        <hr class="separator" />
        <base-button-link @click="closeMenu" variant="mobile" href="/#"
          >Присоединиться</base-button-link
        >
      </nav>
    </div>
  </div>
</template>

<style scoped>
.header-wrapper {
  z-index: var(--header-layer);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s ease;
}

.header-wrapper.has-border {
  border-bottom: 1px solid var(--zinc-800);
}

.header {
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  padding: 20px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(3px);
}

.header-top {
  height: 34px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

.header-top-links {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header-top-links ul {
  display: flex;
  flex-direction: row;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.header-top-link {
  text-decoration: none;
  cursor: pointer;
  color: var(--zinc-300);
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.header-top-link:hover {
  color: var(--brand-400);
}

.header-top-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
}

.header-top-right-mobile {
  display: none;
}

.header-top-search-button {
  border: none;
  outline: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
}

.header-top-search-icon {
  color: var(--zinc-400);
  transition: color 0.3s ease;
}

.header-top-search-button:hover .header-top-search-icon {
  color: var(--white);
}

.vertical-separator {
  width: 1px;
  height: 24px;
  background-color: var(--zinc-800);
}

.call-button {
  cursor: pointer;
  text-decoration: none;
  color: var(--white);
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.call-button:hover {
  color: var(--brand-400);
}

.header-menu-nav {
  display: none;
}

@media (max-width: 1024px) {
  .header-wrapper {
    pointer-events: none !important;
    transition: all 0.3s ease;
  }

  .header {
    padding: 20px 24px;
    transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
  }

  .header.open {
    backdrop-filter: none;
    background-color: var(--bg-primary);
  }

  .header-top-links {
    display: none;
  }

  .header-top-right {
    display: none;
  }

  .header-top-right-mobile {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header-menu-button {
    border: none;
    outline: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background-color: transparent;
    color: var(--white);
  }

  .header-menu-button > i {
  background-color: var(--white);
  width: 24px;
  height: 1px;
  display: block;
  position: absolute;
  transition: 0.5s;
}

.header-menu-button > i:nth-child(1) {
  transform: translateY(-8px);
  animation: itop_out 0.5s ease forwards;
}

.header-menu-button > i:nth-child(3) {
  transform: translateY(8px);
  animation: ibottom_out 0.5s ease forwards;
}

.header-menu-button.active > i:nth-child(1) {
  animation: itop 0.5s ease forwards;
}

.header-menu-button.active > i:nth-child(2) {
  width: 0px;
}

.header-menu-button.active > i:nth-child(3) {
  animation: ibottom 0.5s ease forwards;
}

@keyframes itop {
  0% {transform: translateY(-8px)}
  50% {transform: translateY(-10px)}
  100% {transform: translateY(0px) rotate(45deg)}
}

@keyframes ibottom {
  0% {transform: translateY(8px)}
  50% {transform: translateY(10px)}
  100% {transform: translateY(0px) rotate(135deg)}
}

@keyframes itop_out {
  0% {transform: translateY(0px)}
  50% {transform: translateY(-12px)}
  100% {transform: translateY(-8px)}
}

@keyframes ibottom_out {
  0% {transform: translateY(0px)}
  50% {transform: translateY(12px)}
  100% {transform: translateY(8px)}
}

  .header-menu {
    width: 100dvw;
    position: fixed;
    inset: 0;
    top: 74px;
    padding: 0;
    border: none;
    background-color: var(--bg-primary);
    /* backdrop-filter: blur(3px); */
    transition: opacity 0.3s ease, translate 0.3s ease,
      display 0.5s ease allow-discrete;
  }

  /* стили для открытого поповера */
  .header-menu:popover-open {
    opacity: 1;
    translate: 0;
  }

  /* стили для открывающегося поповера */
  @starting-style {
    .header-menu:popover-open {
      opacity: 0;
      translate: 0 50px;
    }
  }
  /* стили для закрывающегося поповера */
  .header-menu:not(:popover-open) {
    opacity: 0;
    translate: 0 50px;
  }

  @media (prefers-reduced-motion: reduce) {
    .header-menu {
      transition: none;
    }
  }

  .header-menu-nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding: 24px;
  }

  .separator {
    box-sizing: border-box;
    border: none;
    width: 100%;
    height: 1px;
    background-color: var(--zinc-800);
    margin: 8px 0;
  }
}
</style>
