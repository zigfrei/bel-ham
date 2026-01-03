<script lang="ts" setup></script>
<template>
  <section>
    <div class="hero-ambient" aria-hidden="true">
      <div class="hero-ambient__glow hero-ambient__glow--brand"></div>
      <div class="hero-ambient__glow hero-ambient__glow--accent"></div>
    </div>
    <div class="bage">
      <span class="bage__indicator">
        <span class="bage__indicator-ping"></span>
        <span class="bage__indicator-core"></span>
      </span>
      <p class="bage__text font-text-sm-mono">
        Условия DX: солнечный поток 145 / индекс A 6.
      </p>
    </div>
    <h1 class="title font-text-xxl">
      Создавайте сигнал.<br /><span>Соединяйте мир.</span>
    </h1>
    <p class="subtitle font-text-lg">
      Абсолютная штаб-квартира для радиолюбителей, любителей электроники и
      аппаратных хакеров. От паяльника до мачты антенны — мы поддерживаем
      частоту в эфире.
    </p>
    <div class="hero-actions">
      <nuxt-link to="/#" class="btn-primary font-text-base-b"
        ><icon name="icons:wrench" size="20px" /><span
          >Начать создание</span
        ></nuxt-link
      >
      <nuxt-link to="/#" class="btn-secondary font-text-base-b"
        ><span>Изучить схемы</span><icon name="icons:arrow-right" size="20px"
      /></nuxt-link>
    </div>
    <div class="hero-decorartion">
      <base-animation-hero />
      <p class="hero-decorartion-text font-text-sm-mono">присоединяйтесь к более чем 25 000 операторам и строителям</p>
    </div>
  </section>
</template>
<style scoped>
section {
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  height: 100dvh;
  padding: 20px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  /* overflow: hidden; */
}

.title {
  text-align: center;
  margin-bottom: 24px;
  z-index: 1;
}

.title span {
  background-image: linear-gradient(
    to right,
    var(--brand-400),
    var(--accent-500)
  );
  color: transparent;
  background-clip: text;
}

.bage {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  border: 1px solid var(--zinc-800);
  border-radius: var(--radius-round);
  background-color: var(--zinc-900);
  backdrop-filter: blur(4px);
  margin-bottom: 32px;
  z-index: 1;
}

.bage__indicator {
  position: relative;
  display: inline-flex;
  height: 8px;
  width: 8px;
}

.bage__indicator-ping {
  position: absolute;
  inset: 0;
  border-radius: var(--radius-round);
  background-color: var(--brand-400);
  opacity: 0.75;
  animation: bage-ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.bage__indicator-core {
  position: relative;
  display: inline-flex;
  height: 100%;
  width: 100%;
  border-radius: var(--radius-round);
  background-color: var(--brand-500);
}

.bage__text {
  color: var(--brand-300);
}

.hero-ambient {
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  max-width: 1280px;
  transform: translateX(-50%);
  pointer-events: none;
  z-index: 0;
}

.hero-ambient__glow {
  position: absolute;
  border-radius: var(--radius-round);
  filter: blur(120px);
  mix-blend-mode: screen;
  animation: pulse-slow 6s ease-in-out infinite;
}

.hero-ambient__glow--brand {
  top: 80px;
  left: 40px;
  width: 384px;
  height: 384px;
  background-color: color-mix(in srgb, var(--brand-500) 30%, transparent);
  opacity: 0.75;
}

.hero-ambient__glow--accent {
  right: 40px;
  bottom: 40px;
  width: 384px;
  height: 384px;
  background-color: color-mix(in srgb, var(--accent-500) 30%, transparent);
  animation-delay: 2s;
}

.subtitle {
  color: var(--zinc-400);
  text-align: center;
  max-width: 600px;
  margin-bottom: 32px;
  z-index: 1;
}

.hero-actions {
  display: flex;
  flex-direction: row;
  gap: 16px;
  z-index: 1;
}

.btn-primary {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  padding: 16px 32px;
  border-radius: var(--radius-s);
  background-color: var(--white);
  color: var(--zinc-950);
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 0.3s ease-in-out, transform 0.1s ease-in-out;
  overflow: hidden;
}

.btn-primary::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background-image: linear-gradient(
    to right,
    var(--brand-500),
    var(--accent-500)
  );
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;
}

.btn-primary:hover {
  background-color: var(--zinc-200);
}

.btn-primary:active {
  transform: scale(0.95);
}

.btn-primary:active::after {
  opacity: 0.25;
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  padding: 16px 32px;
  border-radius: var(--radius-s);
  background-color: var(--zinc-900);
  border: 1px solid var(--zinc-800);
  color: var(--white);
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out,
    transform 0.1s ease-in-out;
}

.btn-secondary:hover {
  background-color: var(--zinc-800);
  border-color: var(--zinc-700);
}

.btn-secondary:active {
  transform: scale(0.95);
}

.hero-decorartion {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  z-index: 2;
}

.hero-decorartion-text {
  margin-top: 32px;
  color: var(--zinc-500);
  text-transform: uppercase;
  text-align: center;
}

@keyframes bage-ping {
  0% {
    transform: scale(1);
    opacity: 0.75;
  }
  75%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

@keyframes pulse-slow {
  0%,
  100% {
    transform: scale(0.95);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.6;
  }
}

@media (max-width: 1000px) {
  section {
  /* margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  height: 100dvh;
  padding: 20px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative; */
  min-height: 750px;
padding: 20px 16px;
}

.hero-actions {
  /* display: flex;
  flex-direction: row;
  gap: 16px;
  z-index: 1; */
  flex-direction: column;
  width: 100%;
  max-width: 300px;
}

.btn-primary, .btn-secondary {
  /* display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  padding: 16px 32px;
  border-radius: var(--radius-s);
  background-color: var(--white);
  color: var(--zinc-950);
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 0.3s ease-in-out, transform 0.1s ease-in-out;
  overflow: hidden; */
  width: 100%;
  justify-content: center;
}

.hero-ambient {
  /* position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  max-width: 1280px;
  transform: translateX(-50%);
  pointer-events: none;
  z-index: 0; */
  overflow-x: hidden;
}
}
</style>
