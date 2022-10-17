<template>
  <div class="PromoSlide -small -purple">
    <h2 class="PromoSlide_title h2" v-html="title" />
    <img :src="`images/${img}`" class="Card_img" alt="">
  </div>
</template>

<script>
export default {
  props: [
      'title',
      'img',
  ],
}
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins";

.PromoSlide {
  box-shadow: 0 16px 32px rgba(47, 30, 115, 0.2);
  border-radius: 48px;
  padding: 50px;
  position: relative;

  &_title {
    font-size: 2rem;
    line-height: 2.4rem;

    @include for-desktop-up {
      font-size: 3.2rem;
      line-height: 3.8rem;
    }
  }

  &.-small {
    width: 360px;
    height: 338px;
    flex-shrink: 0;
    flex-grow: 0;
    flex-basis: 360px;
    overflow: hidden;
    padding: 30px 40px;
  }

  &.-purple {
    background: #5335CA;
    box-shadow: 0px 32px 32px rgba(14, 0, 70, 0.8);
    color: var(--color-white);
  }

  &_img {
    rotate: -10deg;
    border-radius: 24px;
    filter: drop-shadow(-16px -4px 28px rgba(31, 0, 153, 0.19));
    width: 334px;
    height: 252px;
    position: absolute;
    bottom: -44px;
    right: -36px;
  }
}
</style>
