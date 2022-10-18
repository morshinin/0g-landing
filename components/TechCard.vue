<template>
  <div
    class="TechCard"
    :class="classList"
  >
    <h2 class="TechCard_title">{{ title }}</h2>
    <p class="TechCard_description" v-html="description" />
  </div>
</template>

<script>
export default {
  props: [
      'title',
      'description',
      'type',
  ],
  computed: {
    classList() {
      return {
        [`-type-${this.type}`]: Boolean(this.type),
      }
    }
  }
}
</script>

<style lang="scss">
@import "assets/styles/mixins";

.TechCard {
  position: relative;
  max-width: 400px;
  padding: 10px 27px;
  min-height: 109px;

  @include for-tablet-up {
    max-width: 337px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @include for-desktop-up {
    max-width: 400px;
    padding: 32px 54px;
  }

  &::before,
  &::after {
    content: '';
    background: url("/images/curly-brace.png") center / cover no-repeat;
    position: absolute;
    top: 0;
    width: 26px;
    height: 107px;

    @include for-desktop-up {
      width: 54px;
      height: 220px;
    }
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
    transform: scaleX(-1);
  }

  &.-type-secondary {
    max-width: 377px;
    padding: 10px 25px;

    @include for-tablet-up {
      max-width: 337px;
    }

    @include for-desktop-up {
      padding: 32px 42px;
      max-width: 380px;
    }

    .TechCard_title {
      max-width: 250px;
    }

    &::before,
    &::after {
      background: url("/images/square-brace.png") center / cover no-repeat;
      width: 21px;
      height: 110px;

      @include for-desktop-up {
        width: 42px;
        height: 220px;
      }
    }

    &::before {
      left: 5px;
    }

    &::after {
      right: 5px;
    }
  }

  &_title {
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.4rem;
    margin-bottom: 8px;

    @include for-desktop-up {
      font-size: 32px;
      line-height: 38px;
    }
  }

  &_description {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    @include for-desktop-up {
      font-size: 20px;
      line-height: 24px;
    }
  }
}
</style>
