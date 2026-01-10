<template>
  <div class="card history-card">
    <img :src="src" :alt="alt" loading="lazy" />

    <div>
      <header>
        <div class="history-card__title-group">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path :d="mdiTrophyOutline" />
          </svg>
          <h2>{{ year }}</h2>
        </div>

        <p>{{ tag }}</p>
      </header>

      <p>{{ description }}</p>

      <ul>
        <li v-for="member in members" :key="member">
          {{ member }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { mdiTrophyOutline } from '@mdi/js'

defineProps({
  year: { type: String, required: true },
  tag: { type: String, default: '' },
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  description: { type: String, required: true },
  members: { type: Object, required: true },
})
</script>

<style scoped>
.history-card {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 2rem;
  padding: var(--card-padding);
}

.history-card img {
  width: 100%;
  border-radius: 1rem;
}

.history-card header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.history-card__title-group {
  display: flex;
  align-items: center;
  gap: 0.35em;
}

.history-card__title-group svg {
  width: 1.3em;
  height: 1.3em;
  fill: var(--logo);
}

.history-card__title-group h2 {
  color: var(--text-card-title);
  font-size: 1em;
  font-weight: 600;
}

.history-card header p {
  color: var(--text-tertiary);
  font-size: 0.55em;
}

.history-card ul {
  margin-top: 0.7rem;
}

@media (max-width: 900px) {
  .history-card {
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: 500px) {
  .history-card header {
    font-size: 1.3rem;
  }
}
</style>
