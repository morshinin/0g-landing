<template>
  <article class="Section Adopters">
    <div class="Section_body">
      <p class="Section_pretitle">Early adopters</p>
      <h1 class="Section_title -opposite Adopters_title">
        Web3 at&nbsp;your fingertips
      </h1>
      <p class="Section_description -opposite Adopters_description">
        Launch all your Web3 apps and manage all virtual items and game assets in&nbsp;one place
      </p>
      <div class="Adopters_slider">
        <PromoSlide
          v-for="(card, index) in cards.adopters"
          :key="index"
          :title="card.title"
          :img="card.img"
        />
      </div>
    </div>
    <footer class="Section_footer">
      <p class="Section_description -opposite Adopters_disclaimer">
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
            img: 'adopter-card-4.png'
          },
          {
            title: 'Instant secure TXs',
            img: 'adopter-card-2.png'
          },
          {
            title: 'Zero&nbsp;gas fees',
            img: 'adopter-card-3.png'
          },
          {
            title: 'Unlimited transactions',
            img: 'adopter-card-5.png'
          },
          {
            title: 'Direct access to global community',
            img: 'adopter-card-1.png'
          },
          {
            title: 'Validity-proof system',
            img: 'adopter-card-6.png'
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
  padding-top: 80px;
  padding-bottom: 80px;

  &_pretitle {
    color: var(--color-white);
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    text-transform: uppercase;
    margin-bottom: 35px;
  }

  &_title {
    width: 360px;
  }

  &_description {
    margin-bottom: 70px;
    max-width: 460px;
  }

  &_slider {
    display: flex;
    gap: 40px;
    margin-bottom: 64px;
  }

  &_disclaimer {
    max-width: 570px;
  }
}
</style>
