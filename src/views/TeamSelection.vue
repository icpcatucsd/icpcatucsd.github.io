<template>
  <section class="page team-selection">
    <h1>Team Selection</h1>
    <p class="page-subtitle">
      Learn how we form UCSD teams for the ICPC SoCal Regional, including the selection process and
      contest rules.
    </p>

    <!-- Overview -->
    <section class="overview">
      <InfoCard info-label="SoCal Regional" :info-value="TEAM_SELECTION.soCalRegionalDate" />
      <InfoCard info-label="Team Selection Contest" :info-value="TEAM_SELECTION.contestDate" />
      <InfoCard info-label="Typical Team Slots" info-value="5-7 teams (3 students each)" />
      <InfoCard info-label="Platform" info-value="VJudge (no AI/search)" />
    </section>

    <!-- Process -->
    <section class="section">
      <h2 class="section-title">How Team Selection Works</h2>

      <div class="process-notes p-groups">
        <p>
          Every year, our club can send 5-7 teams of 3 students each to compete at SoCal Regional,
          depending on how many team slots SoCal gives us.
        </p>
        <p>
          SoCal Regional will be on <strong>{{ TEAM_SELECTION.soCalRegionalDate }}</strong
          >.
        </p>
      </div>

      <div class="steps">
        <InfoCard
          info-label="Individual selection contest"
          info-value="We hold an individual contest at UCSD with similar problems and a similar time limit."
          variant="step"
        />

        <InfoCard
          info-label="Form teams"
          info-value="The top 21 contestants form teams of 3."
          variant="step"
        />

        <InfoCard
          info-label="Rank teams"
          info-value="Teams are ranked based on performance in the individual contest."
          variant="step"
        />

        <InfoCard
          info-label="Advance to SoCal"
          info-value="The top teams (however many we are allowed to bring) go to SoCal."
          variant="step"
        />
      </div>

      <div class="process-notes p-groups">
        <p>
          We will hold our {{ TEAM_SELECTION.year }} team selection contest on
          <strong>{{ TEAM_SELECTION.contestDate }}</strong
          >.
        </p>
        <p>
          Additionally, we will hold individual and team practices on weekends before and after the
          team selection contest to prepare for SoCal.
        </p>
      </div>
    </section>

    <!-- Rules -->
    <section class="section">
      <h2 class="section-title">Team Selection Contest Rules</h2>

      <div class="card rules-card">
        <h3 class="card-title">Permitted Materials</h3>

        <div class="p-groups">
          <p>
            Contestants are <strong>permitted to use their own computers</strong> for coding in the
            IDE of their choice and to submit entries via VJudge. However, the use of search
            engines, AI tools, or any machine-readable media such as floppy disks, CDs, DVDs, and
            USB flash drives is strictly prohibited and will lead to immediate disqualification.
          </p>

          <p>
            No electronic devices, including electronic calculators, watches with calculators, PDAs,
            cell phones, pagers, or personal audio/video players are allowed in the contest area.
            These items must be deposited in the computer labs prior to the contest. Standard
            watches lacking calculators or programming capabilities, medical devices like
            glucometers, and cameras are exceptions to this rule.
          </p>

          <p>
            Please note that while we take precautions, the Contest Officials cannot guarantee the
            safe return or condition of any confiscated items.
          </p>

          <p>
            <strong>Contestants may bring no more than 25 pages of physical resources</strong> such
            as textbooks and printed documents to the contest.
          </p>
        </div>

        <h3 class="card-title">Conduct of the Contest</h3>

        <ul>
          <li>
            <strong>Programming Languages:</strong> The official languages for the contest are C,
            C++, Java, Python 3, and Kotlin. Additional languages may be considered for future
            contests based on their support at the World Finals and participant demand.
          </li>
          <li>
            <strong>Submission Size Limit:</strong> Each submitted source file must not exceed
            300,000 bytes.
          </li>
          <li>
            <strong>Notifications:</strong> Contestants will receive notifications about both their
            accepted and rejected submissions throughout the contest. Additionally, they will be
            able to see which problems have been solved by which other contestants.
          </li>
          <li>
            <strong>Ranking Criteria:</strong>
            <ol>
              <li>
                <strong>Number of Problems Solved:</strong> The primary criterion for ranking is the
                number of problems successfully solved.
              </li>
              <li>
                <strong>Total Elapsed Time:</strong> In case of a tie, rankings will consider the
                total time taken to solve each problem, down to the second. A penalty of 1200
                seconds (20 minutes) will be added for each rejected submission that leads to a
                successful solution later.
              </li>
              <li>
                <strong>Fewest Rejected Submissions:</strong> The number of initial rejections for
                problems that are eventually solved will also factor into the rankings.
              </li>
            </ol>
          </li>
          <li>
            <strong>Communication During the Contest:</strong> Contestants may only communicate with
            contest officials during the contest.
          </li>
        </ul>
      </div>
    </section>
  </section>
</template>

<script setup>
import InfoCard from '@/components/InfoCard.vue'
import { TEAM_SELECTION } from '@/data/schedule'
</script>

<style scoped>
.team-selection .overview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.team-selection .steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-block: 2rem;
}

.rules-card {
  padding: var(--card-padding);
}

.rules-card .card-title {
  margin-bottom: 1rem;
}

.rules-card .card-title:not(:first-of-type) {
  margin-top: 2.5rem;
}
</style>
