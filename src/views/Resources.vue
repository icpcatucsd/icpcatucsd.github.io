<template>
  <section class="page resources">
    <h1>Resources</h1>
    <p>Below are some resources for learning and practicing competitive programming.</p>

    <section class="section section--first resource-grid card-grid card-grid--wide">
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
          <li>
            <XLink href="https://codeforces.com">Codeforces</XLink>: This is one of the most famous
            competitive programming websites. You can participate in online competitions, solve
            problems from a huge problem bank, and learn from blogs and website solutions. A few of
            our favorites are
            <XLink href="https://codeforces.com/blog/entry/57282">1</XLink>
            and
            <XLink href="https://codeforces.com/blog/entry/55274">2</XLink>.
          </li>

          <li>
            <XLink href="https://atcoder.jp/">AtCoder</XLink>: A Japanese competitive programming
            platform known for high-quality problems and regular contests. Great for practicing
            algorithmic thinking with problems that often have elegant solutions.
          </li>

          <li>
            <XLink href="https://qoj.ac/">QOJ</XLink>: A competitive programming platform
            specifically designed for ICPC practice. Features problems from various ICPC regionals
            and world finals, making it perfect for team preparation.
          </li>

          <li>
            <XLink href="https://vjudge.net/">VJudge</XLink>: An online judge platform where you can
            participate in programming competitions by submitting problems to various other
            platforms.
            <strong>We also hold our weekly contests on VJudge.</strong>
          </li>

          <li>
            <XLink href="https://open.kattis.com">Kattis</XLink> hosts several official contests
            (you can find many regionals and world finals here).
          </li>

          <li>
            <XLink href="https://www.codechef.com/">CodeChef</XLink> Code-Chef is an online
            educational program and competitive programming community of global programmers.
          </li>
        </ul>

        <!-- Site Chips -->
        <div class="resource-chips">
          <XLink href="https://codeforces.com" chip>Codeforces</XLink>
          <XLink href="https://atcoder.jp" chip>AtCoder</XLink>
          <XLink href="https://qoj.ac" chip>QOJ</XLink>
          <XLink href="https://vjudge.net" chip>VJudge</XLink>
          <XLink href="https://open.kattis.com" chip>Kattis</XLink>
          <XLink href="https://www.codechef.com" chip>CodeChef</XLink>
        </div>
      </section>

      <!-- Past Lesson Slides -->
      <section class="card resource-card">
        <h2>Past Lesson Slides</h2>

        <!-- Fall 2024 -->
        <h3>Fall 2024</h3>
        <ul>
          <li v-for="slide in fall2024Slides" :key="slide.filename">
            <XLink :href="`/assets/slides/${slide.filename}`">
              {{ slide.label }}
            </XLink>
          </li>
        </ul>

        <!-- Winter / Spring 2024 -->
        <h3>Winter / Spring 2024</h3>
        <ul>
          <li v-for="slide in winterSpring2024Slides" :key="slide.filename">
            <XLink :href="`/assets/slides/${slide.filename}`">
              {{ slide.label }}
            </XLink>
          </li>
        </ul>
      </section>

      <!-- Past Contests -->
      <section class="card resource-card">
        <h2>Past Contests</h2>
        <p class="resource-note">All contest passwords are <strong>ucsd_icpc</strong>.</p>

        <!-- Fall 2024 -->
        <h3>Fall 2024</h3>
        <ul>
          <li v-for="contest in fall2024Contests" :key="contest.url">
            <XLink :href="contest.url">
              {{ contest.label }}
            </XLink>
          </li>
        </ul>

        <!-- Sprint 2024 -->
        <h3>Spring 2024</h3>
        <ul>
          <li v-for="contest in spring2024Contests" :key="contest.url">
            <XLink :href="contest.url">{{ contest.label }}</XLink>
          </li>
        </ul>

        <!-- Details section for collapsible content -->
        <details class="details">
          <summary class="details__summary">
            <span class="details__more">Show more</span>
            <span class="details__less">Show less</span>
          </summary>

          <!-- Winter 2024 -->
          <h3>Winter 2024</h3>
          <ul>
            <li v-for="contest in winter2024Contests" :key="contest.url">
              <XLink :href="contest.url">{{ contest.label }}</XLink>
            </li>
          </ul>

          <!-- Fall 2023 -->
          <h3>Fall 2023</h3>
          <ul>
            <li v-for="contest in fall2023Contests" :key="contest.url">
              <XLink :href="contest.url">
                {{ contest.label }}
              </XLink>
            </li>
          </ul>
        </details>
      </section>
    </section>
  </section>
</template>

<script setup>
import XLink from '@/components/XLink.vue'

// Fall 2024 Lesson Slides
const fall2024Slides = [
  { label: 'Intro & Dynamic Programming', filename: 'intro_and_dp.pdf' },
  { label: 'Geometry', filename: 'geometry_lesson.pdf' },
  { label: 'Prefix Sum & Segment Tree', filename: 'prefix_sum_segment_tree_lesson.pdf' },
  {
    label: 'Two Pointers, Sliding Window, & Merge Intervals',
    filename: 'two_pointers_lesson.pdf',
  },
  { label: 'Binary & Bitset', filename: 'binary_bitset_lesson.pdf' },
  { label: 'Randomized Algorithms', filename: 'randomized_algorithms_lesson.pdf' },
]

// Winter/Spring 2024 Lesson Slides
const winterSpring2024Slides = [
  { label: 'Intro & Binary Search', filename: 'binary_search_lesson.pdf' },
  { label: 'Shortest Paths', filename: 'shortest_paths_lesson.pdf' },
  { label: 'Disjoint Set Union', filename: 'dsu_lesson.pdf' },
  { label: 'Greedy Algorithms', filename: 'greedy_lesson.pdf' },
  { label: 'Number Theory', filename: 'number_theory_lesson.pdf' },
  { label: 'Dynamic Programming', filename: 'dp_lesson.pdf' },
]

// Fall 2024 Contests
const fall2024Contests = [
  { label: 'Dynamic Programming', url: 'https://vjudge.net/contest/661444' },
  { label: 'Geometry', url: 'https://vjudge.net/contest/662497' },
  { label: 'Team Selection Practice', url: 'https://vjudge.net/contest/663329' },
  { label: 'Team Selection 2024', url: 'https://vjudge.net/contest/665193' },
  { label: 'Prefix Sum & Segment Tree', url: 'https://vjudge.net/contest/665737' },
  {
    label: 'Two Pointers, Sliding Window, & Merge Intervals',
    url: 'https://vjudge.net/contest/667415',
  },
  { label: 'Randomized Algorithms', url: 'https://vjudge.net/contest/672670' },
]

// Spring 2024 Contests
const spring2024Contests = [
  { label: 'Binary Search', url: 'https://vjudge.net/contest/621771' },
  { label: 'Shortest Paths', url: 'https://vjudge.net/contest/622365' },
  { label: 'Disjoint Set Union', url: 'https://vjudge.net/contest/624456' },
  { label: 'C++ STL', url: 'https://vjudge.net/contest/625434' },
  { label: 'Number Theory', url: 'https://vjudge.net/contest/627246' },
]

// Winter 2024 Contests
const winter2024Contests = [
  { label: 'WI24 Practice 0 (Lower Div)', url: 'https://vjudge.net/contest/604358' },
  { label: 'WI24 Practice 0 (Upper Div)', url: 'https://vjudge.net/contest/604357' },
  { label: 'WI24 Practice 2 (Upper Div)', url: 'https://vjudge.net/contest/605846' },
  { label: 'WI24 Practice 3', url: 'https://vjudge.net/contest/607302' },
  { label: 'WI24 Practice 4', url: 'https://vjudge.net/contest/608751' },
  { label: 'WI24 Practice 5', url: 'https://vjudge.net/contest/609895' },
  { label: 'WI24 Practice 7', url: 'https://vjudge.net/contest/611255' },
]

// Fall 2023 Contests
const fall2023Contests = [
  { label: 'FA23 Practice 1', url: 'https://vjudge.net/contest/586637' },
  { label: 'Team Selection 2023', url: 'https://vjudge.net/contest/587899' },
  { label: 'FA23 Practice 3', url: 'https://vjudge.net/contest/588341' },
  { label: 'FA23 Practice 4 (Lower Div)', url: 'https://vjudge.net/contest/589808' },
  { label: 'FA23 Practice 5 (Lower Div)', url: 'https://vjudge.net/contest/591341' },
  { label: 'FA23 Practice 5 (Upper Div)', url: 'https://vjudge.net/contest/591342' },
  { label: 'FA23 Practice 6 (Lower Div)', url: 'https://vjudge.net/contest/592939' },
  { label: 'FA23 Practice 7 (Lower Div)', url: 'https://vjudge.net/contest/594332' },
  { label: 'FA23 Practice 7 (Upper Div)', url: 'https://vjudge.net/contest/594331' },
  { label: 'FA23 Practice 8 (Upper Div)', url: 'https://vjudge.net/contest/595648' },
  { label: 'FA23 Practice 9', url: 'https://vjudge.net/contest/597007' },
]
</script>

<style scoped>
.resource-grid {
  gap: 3.5rem 2.5rem;
}

.resource-card {
  padding: var(--card-padding);
}

.resource-card h2 {
  font-size: 1.3rem;
  color: var(--text-section-title);
  margin-bottom: 1rem;
}

.resource-card h3 {
  font-size: 1.1rem;
  color: var(--text-section-title);
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
