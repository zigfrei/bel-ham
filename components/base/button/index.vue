<template>
  <button class="button font-text-m">
    <slot />
  </button>
</template>

<script setup lang="ts"></script>

<style scoped>
.button {
  cursor: pointer;
  width: 100%;
  color: var(--black-100);
  display: flex;
  height: 48px;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  background-color: var(--brand-100);
  border: 1px solid var(--brand-100);
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.button:hover {
  background-color: var(--white-10);
  color: var(--white-100);
}
</style>
