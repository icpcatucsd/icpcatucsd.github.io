<template>
  <section class="page resources">
    <h1>Resources</h1>
    <p>Below are some resources for learning and practicing competitive programming.</p>

    <section class="section section--first card-grid card-grid--col2 card-grid--lg-gap">
      <!-- Educational Resources -->
      <section class="card resource-card">
        <h2 class="card-title">Educational Resources</h2>

        <ul>
          <li>
            <strong>UCSD Courses:</strong>
            <XLink href="https://shangjingbo1226.github.io/teaching/2022-spring-CSE109">
              CSE 109 (Introduction to Programming Contests)
            </XLink>
            and
            <XLink href="https://shangjingbo1226.github.io/2020-winter-CSE190-CAP">
              CSE 190 (Introduction to Competitive Algorithmic Programming) </XLink
            >.
          </li>

          <li>
            <XLink href="https://cpbook.net/">Competitive Programming book</XLink>: The newer
            editions are available for purchase and the 1st edition is available as a PDF
            <XLink
              href="https://www.comp.nus.edu.sg/~stevenha/myteaching/competitive_programming/cp1.pdf"
            >
              here </XLink
            >.
          </li>

          <li>
            <XLink href="https://cp-algorithms.com/">cp-algorithms</XLink>: A website that contains
            dozens of implementations of useful algorithms.
          </li>

          <li>
            <XLink href="https://usaco.guide/">USACO Guide</XLink>: Comprehensive competitive
            programming curriculum with structured learning paths and high-quality explanations.
          </li>

          <li>
            <XLink href="https://cses.fi/problemset/">CSES Problem Set</XLink>: Curated collection
            of essential competitive programming problems with clean problem statements.
          </li>
        </ul>
      </section>

      <!-- Competition/Practice Sites -->
      <section class="card resource-card">
        <h2 class="card-title">Competition / Practice Sites</h2>

        <ul>
          <li v-for="site in PRACTICE_SITES" :key="site.href">
            <XLink href="site.href">{{ site.name }}</XLink>
            : {{ site.description }}
            <span v-if="site.name == 'Codeforces'">
              A few of our favorites are
              <XLink href="https://codeforces.com/blog/entry/57282">1</XLink>
              and
              <XLink href="https://codeforces.com/blog/entry/55274">2</XLink>.
            </span>
            <strong v-if="site.name == 'VJudge'">
              We also hold our weekly contests on VJudge.
            </strong>
          </li>
        </ul>

        <!-- Site Chips -->
        <div class="resource-chips">
          <XLink v-for="site in PRACTICE_SITES" :key="site.href" :href="site.href" chip>
            {{ site.name }}
          </XLink>
        </div>
      </section>

      <!-- Past Lesson Slides -->
      <section class="card resource-card">
        <h2>Past Lesson Slide</h2>

        <!-- Show the two most recent terms -->
        <section v-for="term in SLIDES_BY_TERM.slice(0, 2)" :key="term.term">
          <h3>{{ term.term }}</h3>
          <ul>
            <li v-for="slide in term.slides" :key="slide.filename">
              <XLink :href="`/assets/slides/${slide.filename}`">
                {{ slide.label }}
              </XLink>
            </li>
          </ul>
        </section>

        <!-- Collapsible section shown when there are more than two terms -->
        <details v-if="SLIDES_BY_TERM.length > 2" class="details">
          <summary class="details__summary">
            <span class="details__more">Show more</span>
            <span class="details__less">Show less</span>
          </summary>

          <!-- Show older terms -->
          <section v-for="term in SLIDES_BY_TERM.slice(2)" :key="term.term">
            <h3>{{ term.term }}</h3>
            <ul>
              <li v-for="slide in term.slides" :key="slide.filename">
                <XLink :href="`/assets/slides/${slide.filename}`">
                  {{ slide.label }}
                </XLink>
              </li>
            </ul>
          </section>
        </details>
      </section>

      <!-- Past Contests -->
      <section class="card resource-card">
        <h2>Past Contests</h2>
        <p class="resource-note">All contest passwords are <strong>ucsd_icpc</strong>.</p>

        <!-- Show the two most recent terms -->
        <section v-for="term in CONTESTS_BY_TERM.slice(0, 2)" :key="term.term">
          <h3>{{ term.term }}</h3>
          <ul>
            <li v-for="contest in term.contests" :key="contest.url">
              <XLink :href="contest.url">
                {{ contest.label }}
              </XLink>
            </li>
          </ul>
        </section>

        <!-- Collapsible section shown when there are more than two terms -->
        <details v-if="CONTESTS_BY_TERM.length > 2" class="details">
          <summary class="details__summary">
            <span class="details__more">Show more</span>
            <span class="details__less">Show less</span>
          </summary>

          <!-- Show older terms -->
          <section v-for="term in CONTESTS_BY_TERM.slice(2)" :key="term.term">
            <h3>{{ term.term }}</h3>
            <ul>
              <li v-for="contest in term.contests" :key="contest.url">
                <XLink :href="contest.url">
                  {{ contest.label }}
                </XLink>
              </li>
            </ul>
          </section>
        </details>
      </section>
    </section>
  </section>
</template>

<script setup>
import XLink from '@/components/XLink.vue'
import { PRACTICE_SITES, SLIDES_BY_TERM, CONTESTS_BY_TERM } from '@/data/resources'
</script>

<style scoped>
.resource-card {
  padding: var(--card-padding);
}

.resource-card h2 {
  font-size: 1.3rem;
  color: var(--text-card-title);
  margin-bottom: 1rem;
}

.resource-card h3 {
  font-size: 1.1rem;
  color: var(--text-primary);
  margin: 2rem 0 1rem;
}

.resource-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.25rem;
}

.resource-note,
.details__summary {
  color: var(--text-tertiary);
  font-size: 0.9rem;
}

.details__summary {
  margin-top: 2rem;
  cursor: pointer;
}

.details__less {
  display: none;
}

.details[open] .details__more {
  display: none;
}

.details[open] .details__less {
  display: inline;
}
</style>
