<script setup lang="ts">
import { computed } from 'vue';
interface CardProps {
	id: string;
	title: string;
	subtitle: string;
	tag: string;
	image: string;
	link: string;
	date: string;
	gradient: string;
}

const props = defineProps<CardProps>();

const meterGradient = computed(
	() => props.gradient ?? 'linear-gradient(90deg, #8b5cf6, #6366f1)'
);

const showNewBadge = computed(() => {
	if (!props.date) {
		return false;
	}
	const publishedAt = new Date(props.date);
	if (Number.isNaN(publishedAt.getTime())) {
		return false;
	}
	const now = Date.now();
	const ageInMs = now - publishedAt.getTime();
	const twoWeeksInMs = 14 * 24 * 60 * 60 * 1000;
	return ageInMs >= 0 && ageInMs <= twoWeeksInMs;
});
</script>
<template>
	<article class="card">
		<div class="card__media">
			<img
				class="card__image"
				:src="image"
				alt=""
				loading="lazy"
			/>
			<div class="card__overlay">
				<button type="button" class="card__action font-text-xs-mono">Читать полностью</button>
			</div>
			<div v-if="showNewBadge" class="card__badge card__badge--status font-text-xsm-b">
		        <icon name="icons:wave" size="10px" />
				<span>Новое</span>
			</div>
			<div class="card__badge card__badge--meta font-text-xsm-b-mono">
                <icon name="icons:network-state" size="10px" />
				<span>{{ tag }}</span>
			</div>
		</div>
		<div class="card__body">
			<h3 class="card__title font-text-lg-mono-b">{{ title }}</h3>
			<p class="card__subtitle font-text-xs">{{ subtitle }}</p>
			<div class="card__meter">
				<span class="card__meter-bar" :style="{ '--card-meter-gradient': meterGradient }"></span>
				<span class="card__meter-dot"></span>
				<span class="card__meter-dot"></span>
			</div>
		</div>
	</article>
</template>
<style scoped>
.card {
	position: relative;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	border-radius: var(--radius-s);
	border: 1px solid var(--zinc-800);
	background-color: var(--zinc-950);
	transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}

.card:hover {
	border-color: color-mix(in srgb, var(--brand-500) 50%, transparent);
	box-shadow: 0 24px 48px -24px color-mix(in srgb, var(--brand-500) 10%, transparent);
	/* transform: translateY(-4px); */
}

.card__media {
	position: relative;
	width: 100%;
	aspect-ratio: 1 / 1;
	overflow: hidden;
}

.card__image {
	width: 100%;
	height: 100%;
	object-fit: cover;
	filter: grayscale(100%);
	transition: transform 0.5s ease, filter 0.5s ease;
}

.card:hover .card__image {
	transform: scale(1.05);
	filter: grayscale(0%);
}

.card__overlay {
	position: absolute;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.6);
	opacity: 0;
	transition: opacity 0.3s ease;
}

.card:hover .card__overlay {
	opacity: 1;
}

.card__action {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 8px 24px;
	border-radius: var(--radius-s);
	border: 1px solid var(--brand-400);
	background-color: var(--brand-600);
	color: var(--white);
	text-transform: uppercase;
	transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card__action:hover {
	transform: scale(1.05);
	box-shadow: 0 16px 32px -24px color-mix(in srgb, var(--brand-400) 60%, transparent);
}

.card__badge {
	position: absolute;
	top: 16px;
	display: inline-flex;
	align-items: center;
	gap: 4px;
	padding: 2px 8px;
	border-radius: var(--radius-s);
	border: 1px solid transparent;
	text-transform: uppercase;

}

.card__badge--status {
	left: 16px;
	background-color: var(--brand-600);
	border-color: var(--brand-400);
	color: var(--white);
}

.card__badge--meta {
	right: 16px;
	background-color: rgba(0, 0, 0, 0.8);
	border-color: var(--brand-900);
	color: var(--brand-400);
}

.card__body {
	padding: 16px;
	border-top: 1px solid color-mix(in srgb, var(--zinc-800) 90%, transparent);
	background-color: var(--zinc-950);
}

.card__title {
	margin: 0 0 4px;
	color: var(--white);
	transition: color 0.3s ease;
}

.card:hover .card__title {
	color: var(--brand-400);
}

.card__subtitle {
	margin: 0 0 12px;
	color: var(--zinc-500);
	text-transform: uppercase;
}

.card__meter {
	display: flex;
	align-items: center;
	gap: 4px;
}

.card__meter-bar {
	flex: 1;
	height: 6px;
	border-radius: var(--radius-s);
	background: var(
		--card-meter-gradient,
		linear-gradient(90deg, #8b5cf6, #6366f1)
	);
	opacity: 0.6;
}

.card__meter-dot {
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background-color: var(--zinc-800);
	animation: card-meter-pulse 1.6s ease-in-out infinite;
}

.card__meter-dot:nth-of-type(2) {
	animation-delay: 0.2s;
}

@keyframes card-meter-pulse {
	0%,
	100% {
		opacity: 0.4;
		transform: scale(1);
	}
	50% {
		opacity: 1;
		transform: scale(1.15);
	}
}
</style>