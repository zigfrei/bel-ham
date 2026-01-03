<template>
  <div class="content">
    <base-header />
    <main class="wrapper">
      <NuxtPage />
    </main>
    <base-footer />
  </div>
</template>

<style scoped lang="css">
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-primary);
}

.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
