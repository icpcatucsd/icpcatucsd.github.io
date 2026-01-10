<template>
  <section class="page">
    <h1>History</h1>
    <p>Highlights from UC San Diego's ICPC journey.</p>

    <section class="section section--first">
      <div class="history-items">
        <HistoryCard
          v-for="item in HISTORY_ITEMS"
          :key="item.year"
          :year="item.year"
          :tag="item.tag"
          :src="item.src"
          :alt="item.alt"
          :description="item.description"
          :members="item.members"
        />
      </div>
    </section>
  </section>
</template>

<script setup>
import HistoryCard from '@/components/HistoryCard.vue'
import { HISTORY_ITEMS } from '@/data/history'
</script>

<style scoped>
.history-items {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
