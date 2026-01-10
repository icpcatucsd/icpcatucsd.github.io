<template>
  <section class="page">
    <h1>Teams</h1>
    <p>Meet our leadership team and the UCSD teams representing us in ICPC competitions.</p>

    <!-- Leadership Team -->
    <section class="section section--first leadership-team">
      <h2 class="section-title">Leadership Team</h2>

      <div class="card-grid card-grid--lg-gap">
        <MemberCard
          v-for="member in LEADERSHIP"
          :key="member.fullName"
          :fullName="member.fullName"
          :src="member.src"
          :role="member.role"
          :bio="member.bio"
        />
      </div>
    </section>

    <!-- Competing Teams -->
    <section class="section competing-teams">
      <h2 class="section-title">Competing Teams from UCSD</h2>

      <div class="card-grid card-grid--col2 card-grid--lg-gap">
        <TeamCard
          v-for="team in COMPETING_TEAMS"
          :key="team.teamName"
          :src="team.src"
          :team-name="team.teamName"
          :description="team.description"
        />
      </div>
    </section>
  </section>
</template>

<script setup>
import MemberCard from '@/components/MemberCard.vue'
import TeamCard from '@/components/TeamCard.vue'
import { LEADERSHIP, COMPETING_TEAMS } from '@/data/teams'
</script>
