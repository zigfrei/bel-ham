<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  question: string;
  answer: string;
}

const props = defineProps<Props>();

const detailsRef = ref<HTMLDetailsElement | null>(null);
const contentRef = ref<HTMLDivElement | null>(null);
const isAnimating = ref(false);
const isExpanded = ref(false);

const transitionStyle =
  'height 0.3s ease, opacity 0.3s ease, margin-top 0.3s ease';

const onSummaryClick = (event: MouseEvent) => {
  event.preventDefault();

  const details = detailsRef.value;
  const content = contentRef.value;

  if (!details || !content || isAnimating.value) {
    return;
  }

  isAnimating.value = true;

  const finish = (stayOpen: boolean) => {
    content.style.transition = '';

    if (stayOpen) {
      content.style.height = 'auto';
      content.style.marginTop = '16px';
      content.style.opacity = '1';
    } else {
      content.style.height = '0px';
      content.style.marginTop = '0px';
      content.style.opacity = '0';
      details.removeAttribute('open');
    }

    isAnimating.value = false;
  };

  const isOpen = details.hasAttribute('open');

  if (isOpen) {
    isExpanded.value = false;
    const startHeight = content.scrollHeight;
    content.style.height = `${startHeight}px`;
    content.style.marginTop = '16px';
    content.style.opacity = '1';

    requestAnimationFrame(() => {
      content.style.transition = transitionStyle;
      content.style.height = '0px';
      content.style.marginTop = '0px';
      content.style.opacity = '0';
    });

    const handleCloseEnd = (event: TransitionEvent) => {
      if (event.propertyName !== 'height') {
        return;
      }

      content.removeEventListener('transitionend', handleCloseEnd);
      finish(false);
    };

    content.addEventListener('transitionend', handleCloseEnd);
  } else {
    details.setAttribute('open', '');
    isExpanded.value = true;

    content.style.height = '0px';
    content.style.marginTop = '0px';
    content.style.opacity = '0';

    const targetHeight = content.scrollHeight;

    requestAnimationFrame(() => {
      content.style.transition = transitionStyle;
      content.style.height = `${targetHeight}px`;
      content.style.marginTop = '16px';
      content.style.opacity = '1';
    });

    const handleOpenEnd = (event: TransitionEvent) => {
      if (event.propertyName !== 'height') {
        return;
      }

      content.removeEventListener('transitionend', handleOpenEnd);
      finish(true);
    };

    content.addEventListener('transitionend', handleOpenEnd);
  }
};
</script>

<template>
  <details ref="detailsRef" class="accordion-item">
    <summary
      class="accordion-toggle"
      :aria-expanded="isExpanded"
      @click="onSummaryClick"
    >
      <p class="font-text-lg">{{ props.question }}</p>
      <icon
        name="icons:chevron"
        size="24px"
        :class="['icon', { 'icon-open': isExpanded }]"
      />
    </summary>
    <div ref="contentRef" class="accordion-content">
      <p class="font-text-base">{{ props.answer }}</p>
    </div>
  </details>
</template>

<style scoped>
.accordion-item {
  border: 1px solid var(--zinc-800);
  border-radius: 12px;
  padding: 20px 48px 20px 24px;
  background-color: var(--zinc-900);
  position: relative;
  transition: all 0.3s ease;
}

.accordion-toggle {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}

.icon {
  position: absolute;
  top: 0;
  right: -24px;
  transition: transform 0.2s ease-in-out;
}

.icon-open {
  transform: rotate(180deg);
}

.accordion-content {
  margin-top: 0;
  color: var(--zinc-300);
  overflow: hidden;
  height: 0;
  opacity: 0;
}

@media (max-width: 600px) {
  .accordion-item {
    padding: 16px;
  }

  .icon {
    position: static;
    margin-left: auto;
  }

  .accordion-toggle {
    justify-content: space-between;
    gap: 16px;
  }
}
</style>
