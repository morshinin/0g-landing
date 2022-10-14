<template>
  <article class="Hero">
    <div class="container">
      <h1 class="Hero_title">
        Web3 On-Ramps for Accelerated Adoption
      </h1>
      <p class="Hero_description">
        Add decentralization to&nbsp;native development environment&nbsp;— with zero fees and instant transactions
      </p>
      <Button
          :size="'tall'"
          :color="'blue'"
          :form="'rounded'"
      >
        Schedule Demo
      </Button>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "assets/styles/mixins";

.Hero {
  padding-top: 100px;
  padding-bottom: 100px;
  min-height: 670px;
  box-sizing: border-box;
  font-family: var(--font-family);
  display: flex;

  @include for-tablet-up {
    padding-top: 112px;
    display: block;
    padding-bottom: 0;
    min-height: auto;
    margin-bottom: 77px;
  }

  @include for-desktop-up {
    padding-top: 293px;
    margin-bottom: 164px;
  }

  .container {
    margin: auto;
  }


  &_title {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 1;
    color: #110B28;
    max-width: 312px;
    margin-top: 240px;

    @include for-tablet-up {
      font-size: 32px;
      line-height: 38px;
      max-width: 430px;
      margin-top: 0;
      margin-bottom: 12px;
    }

    @include for-desktop-up {
      font-size: 64px;
      line-height: 75px;
      margin-bottom: 24px;
      max-width: 700px;
    }
  }

  &_description {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #110B28;
    margin-bottom: 32px;
    max-width: 320px;

    @include for-tablet-up {
      max-width: 350px;
    }

    @include for-desktop-up {
      font-size: 20px;
      line-height: 23px;
      max-width: 400px;
    }
  }

  .Button {
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
    }
  }
}
</style>
