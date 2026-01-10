<template>
  <div class="card team-card">
    <img :src="src" :alt="teamName" class="team-photo" loading="lazy" />

    <div class="team-text">
      <h3 class="card-title">{{ teamName }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  src: { type: String, required: true },
  teamName: { type: String, required: true },
  description: { type: String, required: true },
})
</script>

<style scoped>
.team-card {
  display: flex;
  flex-direction: column;
}

.team-photo {
  width: 100%;
  height: auto;
}

.team-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  padding: var(--card-padding-tall);
}
</style>
