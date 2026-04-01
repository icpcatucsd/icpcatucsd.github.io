<template>
  <section class="page ucsd-cup">
    <h1>UCSD Cup</h1>

    <section class="interest-callout">
      <p class="interest-callout__eyebrow">Interest form</p>
      <h2 class="interest-callout__title">Tell us if you want to participate in UCSD Cup.</h2>
      <p>
        If you are interested in competing in the 2026 UCSD Cup, please fill out the interest
        form so we can plan food, logistics, and contest communication.
      </p>
      <CtaBtn
        href="https://forms.gle/9QHZXCH7p6Lu8SzX8"
        external
        class="interest-callout__button"
      >
        Fill out the interest form
      </CtaBtn>
    </section>

    <p>
      The 2026 UCSD Cup is an in-person individual programming contest for UCSD students. It will
      be held on <strong>Saturday, May 23</strong> from <strong>12-4pm</strong> in
      <strong>EBU3B B230</strong>. During the contest, each participant works independently to
      solve algorithmic problems under a single 4-hour time limit.
    </p>
    <p class="section-copy">
      The contest will run on <strong>VJudge</strong>, and we recommend creating your account
      before event day so check-in is quick and smooth. We will also provide <strong>free pizza</strong>
      and award <strong>$500 in prizes</strong> to top performers.
    </p>

    <section class="section">
      <h2 class="section-title">Event Details</h2>
      <ul>
        <li><strong>Date:</strong> Saturday, May 23</li>
        <li><strong>Time:</strong> 12-4pm</li>
        <li><strong>Location:</strong> EBU3B B230</li>
      </ul>
    </section>

    <section class="section">
      <h2 class="section-title">Format</h2>
      <ul>
        <li><strong>Duration:</strong> 4 hours</li>
        <li><strong>Structure:</strong> Solve problems individually</li>
      </ul>
    </section>

    <section class="section">
      <h2 class="section-title">Platform: VJudge</h2>
      <p>
        We will use <XLink href="https://vjudge.net/">VJudge</XLink> for submissions and the
        live scoreboard.
      </p>
      <ol>
        <li>Go to <XLink href="https://vjudge.net/user/register">the VJudge sign up page</XLink>.</li>
        <li>Create a username and password, then verify your email.</li>
        <li>Log in once before contest day to confirm your account works.</li>
      </ol>
    </section>

    <section class="section">
      <h2 class="section-title">Food &amp; Prizes</h2>
      <p>Free pizza will be available, and there is $500 in prizes for top performers.</p>
    </section>
  </section>
</template>

<script setup>
import CtaBtn from '@/components/CtaBtn.vue'
import XLink from '@/components/XLink.vue'
</script>

<style scoped>
.interest-callout {
  margin-top: 1.5rem;
  padding: 1.75rem;
  border-radius: 1rem;
  border: 1px solid var(--border);
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.08), rgba(255, 255, 255, 0.04));
}

.interest-callout__eyebrow {
  color: var(--highlight);
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.45rem;
}

.interest-callout__title {
  color: var(--text-section-title);
  font-size: 1.55rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 0.75rem;
}

.interest-callout p {
  max-width: 64ch;
}

.interest-callout__button {
  margin-top: 1.25rem;
}

.section-copy {
  margin-top: 1rem;
}

.ucsd-cup p + ol,
.ucsd-cup p + ul {
  margin-top: 1rem;
}
</style>
