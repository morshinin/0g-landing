<template>
  <article class="Section Tech">
    <header class="Section_header">
      <h1 class="Section_title">
        Uncapped Scalability and Free TXs
      </h1>
    </header>
    <div class="Section_body">
      <p class="Section_description">
        0g is the all-in-one Web 3.0 adoption solution featuring Ethereum grade security, instant and free transactions and broad scalability
      </p>
      <div
          v-for="(card, index) in cards.primary"
          :key="index"
          class="Card"
      >
        <h2 class="Card_title">{{ card.title }}</h2>
        <p class="Card_description" v-html="card.description" />
      </div>
      <div
          v-for="(card, index) in cards.secondary"
          :key="index"
          class="Box"
      >

      </div>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      cards: {
        primary: [
          {
            title: 'Supercharged Distribution',
            description: 'Get direct access to&nbsp;global community of&nbsp;early adopters looking for new projets to&nbsp;play',
          },
          {
            title: 'Open Order Book',
            description: 'Game items to&nbsp;be simultaneously&nbsp;represented on&nbsp;multiple marketplaces ',
          },
        ],
        secondary: [
          {
            title: 'Economics & Models',
            description: 'Experienced guidance on&nbsp;building models and highly sufficient economics for games',
          },
          {
            title: 'Industry Leading Advice',
            description: 'From mentors building some of&nbsp;the best Web3 applications since 2017',
          },
        ],
      }
    }
  }
};
</script>

<style lang="scss">
@import "assets/styles/mixins";

.Tech {
  
}
</style>
