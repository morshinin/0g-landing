<template>
  <article class="Hero">
    <h1 class="Hero_title">
      Web3 On-Ramps for Accelerated Adoption
    </h1>
    <p class="Hero_description -primary">
      Bleeding-edge tech to enchance apps with Web3 features in native environment
    </p>
    <p class="Hero_description -secondary">
      Add decentralization to&nbsp;native development environment&nbsp;— with zero fees and instant transactions
    </p>
    <Button
      v-scroll-to="'#get-in-touch'"
      :class="'Hero_button'"
      :size="'tall'"
      :color="'blue'"
      :form="'rounded'"
    >
      Schedule Demo
    </Button>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "assets/styles/mixins";

.Hero {
  padding-top: 10vh;
  box-sizing: border-box;
  font-family: var(--font-family);
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  position: relative;

  @include for-tablet-up {
    padding-top: 116px;
    display: block;
    padding-bottom: 0;
    min-height: auto;
    margin-bottom: 160px;
  }

  @include for-desktop-up {
    padding-top: 293px;
    margin-bottom: 375px;
    //background: url("/images/shperes.png") top right / contain no-repeat;
  }

  //&::before,
  //&::after {
  //  z-index: -1;
  //  position: absolute;
  //}
  //
  //&::before {
  //  content: url("/images/shperes.png");
  //  background: transparent;
  //  padding: 0;
  //  border: none;
  //  border-radius: 50%;
  //  box-shadow: 1px 0 210px #5335ca;
  //
  //  @include for-desktop-up {
  //    top: -140px;
  //    right: -276px;
  //  }
  //}
  //
  //&::after {
  //  content: url("/images/shperes.png");
  //  position: absolute;
  //  top: 180px;
  //  right: -10px;
  //  scale: 0.5;
  //}

  .container {
    margin: auto;
  }

  &_title {
    font-style: normal;
    font-weight: 700;
    color: #110B28;
    margin-top: 194px;
    margin-bottom: 23px;
    font-size: 2.8rem;
    line-height: 3.3rem;
    order: 1;

    @include for-tablet-up {
      font-size: 3.2rem;
      line-height: 3.8rem;
      max-width: 430px;
      margin-top: 0;
      margin-bottom: 12px;
    }

    @include for-desktop-up {
      font-size: 6.4rem;
      line-height: 7.6rem;
      margin-bottom: 24px;
      max-width: 700px;
    }

  }

  &_description {
    font-style: normal;
    font-weight: 400;
    color: #110B28;
    margin-bottom: 26px;
    max-width: 320px;
    font-size: 1.6rem;
    line-height: 1.9rem;
    order: 4;

    @include for-tablet-up {
      order: 2;
      max-width: 350px;
    }

    @include for-desktop-up {
      font-size: 2rem;
      max-width: 400px;
      line-height: 2.4rem;
    }

    &.-primary {
      font-size: 2rem;
      line-height: 2.4rem;
      display: block;
      order: 2;

      @include for-tablet-up {
        display: none;
      }
    }

    &.-secondary {
      margin-top: 18px;
      margin-bottom: 0;

      @include for-tablet-up {
        margin-top: 0;
        margin-bottom: 33px;
      }
    }
  }

  &_button {
    order: 3;
  }

  .Button {
    font-size: 2rem;
    line-height: 2.4rem;
    letter-spacing: 0.02em;

    &::before,
    &::after {
      position: absolute;
    }
    
    &::before {
      content: '';
      background: url("/images/tip.svg") center / cover no-repeat;
      width: 36px;
      height: 36px;
      right: -50px;
      top: 30px;
      display: none;

      @include for-desktop-up {
        right: -49px;
        top: 41px;
        display: block;
      }
    }

    &::after {
      content: 'See in action';
      background: #DDD6F5;
      border-radius: 50px;
      font-family: 'Rubik';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      text-transform: uppercase;
      color: #755DD5;
      padding: 17px 25px;
      right: -190px;
      top: 50px;
      display: none;

      @include for-desktop-up {
        display: block;
        padding: 17px;
        right: -182px;
      }
    }
  }
}
</style>
