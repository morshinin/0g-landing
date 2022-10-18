<template>
  <div class="PromoSlide -small -purple">
    <h2 class="PromoSlide_title h2" v-html="title" />
    <img :src="`images/${img}`" class="PromoSlide_img" alt="">
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
    // first: {
    //   type: Boolean,
    //   default: false,
    // },
    // last: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  computed: {
    // classList() {
    //   return {
    //     [`-first`]: this.first,
    //     [`-last`]: this.last,
    //   }
    // },
  },
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
    z-index: 1;
    position: relative;

    @include for-desktop-up {
      font-size: 3.2rem;
      line-height: 3.8rem;
    }
  }

  &.-small {
    flex-shrink: 0;
    flex-grow: 0;
    overflow: hidden;
    flex-basis: 230px;
    border-radius: 24px;
    height: 215px;
    padding: 20px;


    @include for-tablet-up {
      width: 245px;
      flex-basis: 245px;
      border-radius: 30px;
      height: 215px;
    }

    @include for-desktop-up {
      padding: 30px 40px;
      flex-basis: 360px;
      width: 360px;
      height: 338px;
      border-radius: 50px;
    }
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
    position: absolute;
    width: 214px;
    height: 154px;
    bottom: -25px;
    right: -20px;

    @include for-tablet-up {
      right: -10px;
    }

    @include for-desktop-up {
      width: 334px;
      height: 252px;
      bottom: -44px;
      right: -36px;
    }
  }
}
</style>
