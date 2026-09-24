<template>
  <section class="page">
    <h1>Meetings &amp; Events</h1>
    <p>
      Find the schedule for weekly meetings, practice contests, and other club events. The calendar
      below reflects the most up-to-date schedule.
    </p>

    <section class="section section--first card-grid">
      <EventTypeCard event-type="Weekly Topic Meetings">
        Our <strong>{{ WEEKLY_MEETING.quarter }}</strong> weekly topic meetings are held
        <strong>{{ WEEKLY_MEETING.time }}</strong>, starting
        <strong>{{ WEEKLY_MEETING.starts }}</strong> and continuing
        <strong>{{ WEEKLY_MEETING.recurrence }}</strong>, in the
        <strong>{{ WEEKLY_MEETING.location }}</strong
        >. At each meeting, we learn new algorithms and data structure concepts through practice
        competition problems.
      </EventTypeCard>

      <EventTypeCard event-type="Practice Contests">
        The team selection contest and practice contests are held on Saturdays during the
        <strong>Fall quarter</strong> in preparation for the ICPC SoCal Regional.
      </EventTypeCard>

      <EventTypeCard event-type="2027 UCSD Cup">
        More Details Coming Soon! <br> The 2026 UCSD Cup took place on <strong>Saturday, May 23</strong> from
        <strong>12-4pm</strong> in <strong>EBU3B B230</strong>. See the
        <RouterLink to="/ucsd-cup">UCSD Cup page</RouterLink> for full details.
      </EventTypeCard>
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
import { WEEKLY_MEETING } from '@/data/schedule'
</script>

<style scoped>
.google-calendar {
  width: 100%;
  height: 55vw;
  max-height: 800px;
  border: 1px solid var(--border);
  border-radius: 1rem;
  filter: var(--calendar-filter);
}
</style>
