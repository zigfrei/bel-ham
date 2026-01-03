<template>
  <div class="hero-decorartion-animation">
    <span class="hero-decorartion-animation__bar"></span>
    <span class="hero-decorartion-animation__bar"></span>
    <span class="hero-decorartion-animation__bar"></span>
    <span class="hero-decorartion-animation__bar"></span>
    <span class="hero-decorartion-animation__bar"></span>
    <span class="hero-decorartion-animation__bar"></span>
    <span class="hero-decorartion-animation__bar"></span>
    <span class="hero-decorartion-animation__bar"></span>
  </div>
</template>
<style scoped>
.hero-decorartion-animation {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 4px;
  height: 48px;
  width: 96px;
  opacity: 0.6;
}

.hero-decorartion-animation__bar {
  width: 6px;
  height: 10%;
  border-radius: var(--radius-s) var(--radius-s) 0 0;
  background-color: var(--accent-500);
  opacity: 0.8;
  animation-name: hero-wave;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: var(--duration, 1.1s);
  animation-delay: var(--delay, 0s);
}

.hero-decorartion-animation__bar:nth-child(1) {
  --delay: 0s;
  --duration: 1.00558s;
}

.hero-decorartion-animation__bar:nth-child(2) {
  --delay: 0.1s;
  --duration: 1.09199s;
}

.hero-decorartion-animation__bar:nth-child(3) {
  --delay: 0.2s;
  --duration: 1.2922s;
}

.hero-decorartion-animation__bar:nth-child(4) {
  --delay: 0.3s;
  --duration: 1.03037s;
}

.hero-decorartion-animation__bar:nth-child(5) {
  --delay: 0.4s;
  --duration: 1.20302s;
}

.hero-decorartion-animation__bar:nth-child(6) {
  --delay: 0.5s;
  --duration: 1.02932s;
}

.hero-decorartion-animation__bar:nth-child(7) {
  --delay: 0.6s;
  --duration: 1.11799s;
}

.hero-decorartion-animation__bar:nth-child(8) {
  --delay: 0.7s;
  --duration: 1.14756s;
}

@keyframes hero-wave {
  0%,
  100% {
    height: 10%;
  }
  50% {
    height: 60%;
  }
}
</style>