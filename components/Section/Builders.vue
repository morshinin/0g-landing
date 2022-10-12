<template>
  <article class="Section Builders">
    <header class="Section_header">
      <h1 class="Section_title">
        Boost your applications with the Power of Web3
      </h1>
    </header>
    <div class="Section_body">
      <div class="Section_description">
        <p>
          Industry-first off-chain toolkit — APIs and SDKs to utilize organic Web3 features in a native development environment.
        </p>
        <p>
          Rapid, secure, easy-to-use
        </p>
      </div>
    </div>
    <div
        v-for="(card, index) in cards.primary"
        :key="index"
        class="Box"
    >
        <article class="Card">
          <header class="Card_header">
            <h2 class="Card_title">Og <span class="Card_squared">{{ card.title }}</span></h2>
          </header>
          <div class="Card_body">
            <p class="Card_text" v-html="card.description" />
          </div>
        </article>
    </div>
    <div
        v-for="(card, index) in cards.secondary"
        :key="index"
        class="Box"
    >
      <article class="Card">
        <header class="Card_header">
          <h2 class="Card_title">Og <span class="Card_squared">{{ card.title }}</span></h2>
        </header>
        <div class="Card_body">
          <p class="Card_text" v-html="card.description" />
        </div>
      </article>
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
            title: 'Explorer',
            description: 'Audit and verify every TX&nbsp;happening on&nbsp;the 0g&nbsp;Platform&nbsp;— keeping it&nbsp;easy and transparent',
          },
          {
            title: 'Bridge',
            description: 'Transfer any assets minted on&nbsp;0g&nbsp;to&nbsp;any L1 or&nbsp;L2 to&nbsp;be&nbsp;traded on&nbsp;external exchanges',
          },
          {
            title: 'Market',
            description: 'Unified marketplace for NFTs, game items, ERC-721 tokens and virtual assets',
          },
          {
            title: 'Helpdesk',
            description: 'Platform-ensured customer support for every application to&nbsp;solve any issue within&nbsp;hours',
          },
        ],
        secondary: [
          {
            title: 'Platform',
            description: 'Zero Knowledge Relay using Layer 1 validity proof through multiple Layer 2 sidechains',
          },
          {
            title: 'Launcher',
            description: 'Get control of all your virtual assets minted on 0g Platform, manage apps and stay social',
          },
        ],
      },
    }
  }
};
</script>

<style lang="scss">
@import "assets/styles/mixins";

.Builders {
  
}
</style>
