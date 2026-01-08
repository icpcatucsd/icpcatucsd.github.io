<template>
  <section class="page contact">
    <h1>Contact Us</h1>
    <p>Feel free to reach out and stay in touch.</p>

    <section class="section section--first card-grid card-grid--col2">
      <!-- Slack -->
      <ContactCard
        title="Slack"
        :icon="mdiSlack"
        description="Our main communication platform for announcements, updates, and discussions."
        btn-text="Join Slack"
        :href="LINKS.slackInvite"
      />

      <!-- Instagram -->
      <ContactCard
        title="Instagram"
        :icon="mdiInstagram"
        description="Meeting and event reminders and recaps."
        btn-text="@icpcatucsandiego"
        href="https://www.instagram.com/icpcatucsandiego/"
      />

      <!-- Email -->
      <ContactCard
        title="Email"
        :icon="mdiEmail"
        description="Sponsorships, partnerships, or private questions."
        btn-text="icpc@ucsd.edu"
        href="mailto:icpc@ucsd.edu/"
      />

      <!-- LinkedIn -->
      <ContactCard
        title="LinkedIn"
        :icon="mdiLinkedin"
        description="Connect with us for future announcements."
        btnText="Visit LinkedIn"
        href="https://www.linkedin.com/company/competititve-programming-club-at-uc-san-diego/"
      />
    </section>
  </section>
</template>

<script setup>
import ContactCard from '@/components/ContactCard.vue'
import { LINKS } from '@/config/links'
import { mdiSlack, mdiInstagram, mdiEmail, mdiLinkedin } from '@mdi/js'
</script>

<style scoped>
.contact .card-grid {
  max-width: 1000px;
}
</style>
