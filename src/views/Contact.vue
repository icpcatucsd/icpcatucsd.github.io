<template>
  <section class="page contact">
    <h1>Contact Us</h1>
    <p>Feel free to reach out and stay in touch.</p>

    <section class="section section--first card-grid card-grid--col2">
      <!-- Slack -->
      <ContactCard
        v-for="contact in CONTACTS"
        :key="contact.title"
        :title="contact.title"
        :icon="contact.icon"
        :description="contact.description"
        :btn-text="contact.btnText"
        :href="contact.href"
      />
    </section>
  </section>
</template>

<script setup>
import ContactCard from '@/components/ContactCard.vue'
import { LINKS } from '@/data/links'
import { mdiSlack, mdiInstagram, mdiEmail, mdiLinkedin } from '@mdi/js'

const CONTACTS = [
  {
    title: 'Slack',
    icon: mdiSlack,
    description: 'Our main communication platform for announcements, updates, and discussions.',
    btnText: 'Join Slack',
    href: LINKS.slackInvite,
  },
  {
    title: 'Instagram',
    icon: mdiInstagram,
    description: 'Meeting and event reminders and recaps.',
    btnText: '@icpcatucsandiego',
    href: 'https://www.instagram.com/icpcatucsandiego/',
  },
  {
    title: 'Email',
    icon: mdiEmail,
    description: 'Sponsorships, partnerships, or private questions.',
    btnText: 'icpc@ucsd.edu',
    href: 'mailto:icpc@ucsd.edu',
  },
  {
    title: 'LinkedIn',
    icon: mdiLinkedin,
    description: 'Connect with us for future announcements.',
    btnText: 'Visit LinkedIn',
    href: 'https://www.linkedin.com/company/competititve-programming-club-at-uc-san-diego/',
  },
]
</script>

<style scoped>
.contact .card-grid {
  max-width: 1000px;
}
</style>
