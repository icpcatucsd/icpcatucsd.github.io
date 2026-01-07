<template>
  <section class="page">
    <h1>Teams</h1>
    <p>Meet our leadership team and the UCSD teams representing us in ICPC competitions.</p>

    <!-- Leadership Team -->
    <section class="section section--first leadership-team">
      <h2 class="section-title">Leadership Team</h2>

      <div class="member-card-grid card-grid card-grid--narrow">
        <MemberCard
          fullName="Shang Zhou"
          src="/assets/teams/leadership/shang.jpg"
          role="Co-president & Coach"
          bio="Hi, I'm Shang. I am a first-year Ph.D. student in Computer Science and a Codeforces International Grandmaster. I represented UCSD at the ICPC World Finals in 2023 and 2024, and I am also the coach for UCSD in 2025. Beyond competitive programming, I am passionate about research on large language models and the games of Go and StarCraft II."
        />

        <MemberCard
          fullName="Gram Koski"
          src="/assets/teams/leadership/gram.jpg"
          role="Vice President"
          bio="Hello, I'm Gram. I am a Math-Computer Science major in my third year at UCSD. I am originally from San Francisco. I enjoy speeding up machine learning models, GPU programming, and algorithms. Outside of coding, you may find me rock climbing or watching Youtube. I am looking forward to helping organize UCSD competitive programming!"
        />

        <MemberCard
          fullName="Julie Hong"
          src="/assets/teams/leadership/julie.jpg"
          role="Web Director"
          bio="Hi, I'm Julie 👋 I'm a Computer Science major at UCSD. I love coding and reading, and I'm also a big fan of animated movies. I recently redesigned the club website entirely, and I hope you like it! If you'd like to add any features, please let me know."
        />

        <MemberCard
          fullName="Rex Chao"
          src="/assets/teams/leadership/rex.jpg"
          role="Technology Director"
          bio="Hi, I'm Rex! I'm a fourth-year Math-CS major at UCSD, originally from Taiwan. I started competitive programming 1 year ago and got really into it - I love solving hard problems and pushing myself to new limits. When I'm not coding, you'll find me cafe searching and traveling over the world!"
        />

        <MemberCard
          fullName="Hugo Ingelsson"
          src="/assets/teams/leadership/hugo.jpg"
          role="Events Director"
          bio="Hello, I'm Hugo! I'm a third-year Computer Science/Applied Math double major at UCSD, originally from the Bay. I love problem solving, and I'm looking forward to a great third year on the team. When I'm not programming, you might find me solving puzzles or watching gaming videos on YouTube."
        />

        <MemberCard
          fullName="Qihao Ye"
          role="Coach"
          bio="Hi, I am Qihao. I am a sixth-year PhD student in the Department of Mathematics at UCSD, with research interests in numerical mathematics and scientific computing. Having competed in the ICPC during my undergraduate years, it is an honor for me to assist other students in realizing their ICPC aspirations."
        />

        <MemberCard
          fullName="Jingbo Shang"
          src="/assets/teams/leadership/jingbo.jpg"
          role="Faculty Advisor"
          bio="I'm an Associate Professor at UCSD jointly appointed by Computer Science and Halıcıoğlu Data Science Institute. I obtained my Ph.D. from UIUC advised by Prof. Jiawei Han in 2019. I received my B.E. from SJTU in 2014. I'm also a coach of the UCSD's ACM-ICPC team."
        />
      </div>
    </section>

    <!-- Competing Teams -->
    <section class="section competing-teams">
      <h2 class="section-title">Competing Teams from UCSD</h2>

      <div class="team-card-grid card-grid card-grid--wide">
        <TeamCard
          src="/assets/teams/competing/ICPC2025Team.jpg"
          team-name="Team CSE Basement"
          description="In 2024-2025, Team CSE Basement (UCSD's Team 1) placed 2nd at the Southern California Regional and advanced to the North American Championship, where they placed 21st. The team members are Benjamin Johnson, Manu Bhat, and Pu Yang."
        />

        <TeamCard
          src="/assets/teams/competing/ICPC2024Team.jpg"
          team-name="Team Fallen Star"
          description="In 2023-2024, Team Fallen Star (UCSD's Team 1) advanced to the North American Championship and placed 5th, earning a bronze medal. Team Fallen Star advanced to the World Finals, and ranked 51st, earning an Honors rank. The team members are Zexing Chen, Shang Zhou, and Stanislaw Strzelecki."
        />
      </div>
    </section>
  </section>
</template>

<script setup>
import MemberCard from '@/components/MemberCard.vue'
import TeamCard from '@/components/TeamCard.vue'
</script>

<style scoped>
.member-card-grid,
.team-card-grid {
  gap: 3.5rem 2.5rem;
}
</style>
