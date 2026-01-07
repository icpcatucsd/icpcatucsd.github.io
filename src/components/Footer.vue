<template>
  <div class="footer">
    <span class="sponsor-text">Sponsored by</span>
    <a class="janestreet" href="https://www.janestreet.com/" target="_blank">
      <JaneStreet />
    </a>
  </div>
</template>

<script setup>
import JaneStreet from './JaneStreet.vue'
</script>

<style scoped>
.footer {
  --font-sz: 0.8rem;
  --icon-height: 2.75rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--font-sz);
  margin: 2rem;
}

.sponsor-text {
  color: var(--text-muted);
  font-size: var(--font-sz);
}

.janestreet {
  color: var(--text-nav);
}

:deep(.janestreet-svg) {
  height: var(--icon-height);
}

@media (max-width: 900px) {
  .footer {
    --font-sz: 0.65rem;
    --icon-height: 2.25rem;
    margin: 1.5rem;
  }
}

@media (max-width: 500px) {
  .footer {
    --font-sz: 0.55rem;
    --icon-height: 1.85rem;
    margin: 1rem;
  }
}
</style>
