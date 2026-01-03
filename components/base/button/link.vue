<template>
  <nuxt-link :to="props.href" class="link font-text-xs-b" :class="{'link-mobile': props.variant === 'mobile'}">
    <slot />
  </nuxt-link>
</template>

<script setup lang="ts">
interface Props {
  href: string;
  variant?: 'mobile';
}

const props = defineProps<Props>();
</script>

<style scoped>
.link {
  text-decoration: none;
  text-transform: uppercase;
  color: var(--white);
  display: flex;
  height: 32px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  border-radius: var(--radius-s);
  background-color: var(--brand-600);
  border: none;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.link:hover {
  background-color: var(--brand-500);
}

.link-mobile {
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
}
</style>
