<template>
  <article class="Section Learn">
    <h1 class="Section_title -opposite Learn_title">
      Focused on&nbsp;games.
      Not limited to.
    </h1>
    <p class="Section_description -opposite Learn_description">
      Games have always been in the first flight of adoption to almost every significant computing technology shift — from early desktops to the internet and smartphones.
    </p>
    <!-- <Button
        class="Learn_button"
      :size="'tall'"
      :color="'blue'"
      :form="'rounded'"
      >
      Schedule Demo
    </Button> -->
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "assets/styles/mixins";

.Learn {
  padding-top: 283px;
  padding-bottom: 40px;
  position: relative;

  @include for-tablet-up {
    padding-top: 120px;
    padding-bottom: 83px;
  }

  @include for-desktop-up {
    padding-top: 233px;
    padding-bottom: 233px;
  }
  
  &::before,
  &::after {
    content: '';
    position: absolute;
  }
  
  &::before {
    background: url("/images/cube-blur.png") center / cover no-repeat;
    width: 129px;
    height: 114px;
    top: 130px;
    left: -20px;

    @include for-tablet-up {
      top: 61px;
      left: auto;
      right: 70px;
    }

    @include for-desktop-up {
      width: 269px;
      height: 254px;
      top: 38px;
      right: 272px;
    }
  }

  &::after {
    background: url("/images/cubes-mobile.png") center / cover no-repeat;
    width: 256px;
    height: 227px;
    top: 40px;
    right: -15px;

    @include for-tablet-up {
      width: 266px;
      height: 217px;
      top: 185px;
      right: 85px;
    }

    @include for-desktop-up {
      background: url("/images/cubes.png") center / cover no-repeat;
      width: 800px;
      height: 561px;
      top: 209px;
      right: -76px;
    }
  }

  &_title {
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 10px;

    @include for-tablet-up {
      max-width: 320px;
    }

    @include for-desktop-up {
      font-size: 6.4rem;
      line-height: 7.6rem;
      max-width: 650px;
      margin-bottom: 26px;
    }
  }

  &_description {
    margin-bottom: 32px;

    @include for-tablet-up {
      max-width: 320px;
    }

    @include for-desktop-up {
      font-size: 2rem;
      line-height: 2.4rem;
      max-width: 460px;
    }
  }

  &_button {
    &.Button {
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.02em;
      width: 100%;

      @include for-tablet-up {
        width: auto;
      }
    }
  }
}
</style>
