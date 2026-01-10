<template>
  <section class="hero">
    <div class="container hero-inner">
      <div class="glow" aria-hidden="true"></div>

      <h1 class="hero-title">
        Think deeper.<br />
        <span class="hero-accent">Code faster.</span>
      </h1>

      <p class="hero-subtitle">
        Welcome to the Competitive Programming Club<br />
        at UC San Diego.
      </p>

      <div class="hero-cta">
        <CtaBtn :href="LINKS.slackInvite" external>Join Slack</CtaBtn>
      </div>
    </div>
  </section>

  <section class="about page">
    <div>
      <h2 class="about-title">About Us</h2>
      <p class="about-text">
        We are a student organization devoted to helping programmers excel in problem-solving
        techniques involving computer algorithms and data structures, as well as engaging in various
        algorithmic programming competitions. Join the Slack to stay up-to-date on our latest
        communications!
      </p>
      <CtaBtn to="/history" variant="secondary">Learn More</CtaBtn>
    </div>

    <div>
      <h3 class="about-subtitle">What is ICPC?</h3>
      <p class="about-text">
        The
        <XLink href="https://icpc.global/">
          International Collegiate Programming Contest (ICPC)
        </XLink>
        is a team-based yearly programming competition. Universities from all over the world
        participate, with top teams advancing to the prestigious World Finals. As the oldest and
        largest programming contest in the world, ICPC holds a significant reputation. Our team
        competes in the SoCal ICPC region, and teams can advance to the North America Championship
        and eventually to the World Finals.
      </p>
      <CtaBtn href="https://www.youtube.com/watch?v=dBabBbxPE7w" variant="secondary" external>
        Watch ICPC Intro Video
      </CtaBtn>
    </div>
  </section>
</template>

<script setup>
import CtaBtn from '@/components/CtaBtn.vue'
import XLink from '@/components/XLink.vue'
import { LINKS } from '@/data/links'
</script>

<style scoped>
/* Hero section */
.hero {
  --hero-pad: 9rem 7rem;
  --title-sz: 4.5rem;
  --sub-sz: 1.125rem;
  --cta-mt: 3rem;

  overflow: hidden;
  border-bottom: 1px solid var(--divider);
}

.hero .hero-inner {
  position: relative;
  padding: var(--hero-pad);
}

.hero-title {
  font-size: var(--title-sz);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--text-hero-title);
  margin-bottom: 2rem;
}

.hero-accent {
  color: var(--hightlight);
}

.hero-subtitle {
  margin-top: -0.5rem;
  font-size: var(--sub-sz);
  color: var(--text-hero-sub);
}

.hero-subtitle br {
  display: none;
}

.hero-cta {
  margin-top: var(--cta-mt);
}

.glow {
  position: absolute;
  top: -260px;
  right: -260px;
  width: 640px;
  height: 640px;
  background: radial-gradient(circle at 30% 30%, var(--glow) 0%, transparent 60%);
  border-radius: 999px;
  pointer-events: none;
  filter: blur(90px);
  opacity: 0.55;
}

/*  About section */
.about {
  --title-sz: 2.25rem;
  --title-mb: 1.25rem;
  --sub-sz: 1.5rem;
  --sub-mb: 1rem;
  --text-sz: 1rem;

  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 3.5rem;
  margin-top: 2rem;
}

.about-title {
  margin: 0;
  font-size: var(--title-sz);
  font-weight: 800;
  margin-bottom: var(--title-mb);
  color: var(--text-section-title);
}

.about-subtitle {
  margin: 0;
  font-size: var(--sub-sz);
  margin-bottom: var(--sub-mb);
  color: var(--text-section-title);
}

.about-text {
  margin-bottom: 1.8rem;
  color: var(--text-primary);
  font-size: var(--text-sz);
}

@media (max-width: 900px) {
  .hero {
    --hero-pad: 8rem 5rem;
    --title-sz: 3.75rem;
    --sub-sz: 1rem;
    --cta-mt: 2.7rem;
  }

  .about {
    grid-template-columns: 1fr;
    gap: 5rem;
  }
}

@media (max-width: 700px) {
  .hero {
    --hero-pad: 7rem 4rem;
    --title-sz: 3.25rem;
    --cta-mt: 2.4rem;
  }

  .hero-subtitle br {
    display: inline;
  }

  .glow {
    right: -360px;
  }

  .about {
    --title-sz: 1.75rem;
    --title-mb: 1rem;
    --sub-sz: 1.25rem;
  }
}

@media (max-width: 500px) {
  .hero {
    --hero-pad: 5rem 3rem;
    --title-sz: 2.5rem;
    --sub-sz: 0.9rem;
  }

  .hero-subtitle br {
    display: none;
  }

  .about {
    margin-top: 1rem;
    gap: 4rem;
  }
}
</style>
