<template>
  <section class="page">
    <h1>Meetings &amp; Events</h1>
    <p>
      Find the schedule for weekly meetings, practice contests, and other club events. The calendar
      below reflects the most up-to-date schedule.
    </p>

    <section class="section section--first event-type-card-grid card-grid card-grid--narrow">
      <EventTypeCard
        event-type="Weekly Topic Meetings"
        description="Our Winter2026 weekly topic meeting are Fridays 6-8pm in EBU3B B230 (CSE basement). At each
      meeting, we learn new algorithm and data structures concepts through practice competition
      problems."
      />

      <EventTypeCard
        event-type="Practice Contests"
        description="The team selection contest and practice contests are held during the Fall quarter in
      preparation for the ICPC SoCal Regional."
      />

      <EventTypeCard
        event-type="Other Events"
        description="We occasionally host additional events such as alumni talks, workshops, and contests"
      />
    </section>

    <section class="section">
      <iframe
        class="google-calendar"
        src="https://calendar.google.com/calendar/embed?src=icpc%40ucsd.edu&ctz=America%2FLos_Angeles"
        loading="lazy"
      ></iframe>
    </section>
  </section>
</template>

<script setup>
import EventTypeCard from '@/components/EventTypeCard.vue'
</script>

<style scoped>
.event-type-card-grid {
  gap: 2rem;
}

.google-calendar {
  width: 100%;
  height: 55vw;
  max-height: 800px;
  border: 1px solid var(--border);
  border-radius: 1rem;
}
</style>
