<template>
  <article class="Section Adopters">
    <header class="Section_header">
      <h1 class="Section_title">
        Web3 at&nbsp;your fingertips
      </h1>
    </header>
    <div class="Section_body">
      <p class="Section_description">
        Launch all your Web3 apps and manage all virtual items and game assets in&nbsp;one place
      </p>
      <div
          v-for="(card, index) in cards.adopters"
          :key="index"
          class="Box"
      >
        <h2 class="h2" v-html="card.title" />
      </div>
    </div>
    <footer class="Section_footer">
      <p class="Section_description">
        Brining the best from both worlds of&nbsp;Web3 and old-school Web for developers and users
      </p>
    </footer>
  </article>
</template>

<script>
export default {
  data() {
    return {
      cards: {
        adopters: [
          {
            title: 'Seamless onboarding',
          },
          {
            title: 'Instant secure TXs',
          },
          {
            title: 'Zero&nbsp;gas fees',
          },
          {
            title: 'Unlimited transactions',
          },
          {
            title: 'Direct access to global community',
          },
          {
            title: 'Validity-proof system',
          },
        ]
      }
    }
  }
};
</script>

<style lang="scss">
@import "assets/styles/mixins";

.Adopters {
  
}
</style>
