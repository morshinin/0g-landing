<template>
  <article class="Section Tech">
    <header class="Section_header">
      <p class="Tech_pretitle">For app developers</p>
      <h1 class="Section_title Tech_title">
        Uncapped Scalability and Free TXs
      </h1>
    </header>
    <div class="Section_body">
      <p class="Section_description Tech_description">
        0g is the all-in-one Web 3.0 adoption solution featuring Ethereum grade security, instant and free transactions and broad scalability
      </p>
      <div class="Tech_cards -primary">
        <div class="TechCard">
          <h2 class="TechCard_title">Supercharged Distribution</h2>
          <p class="TechCard_description">
            Get direct access to&nbsp;global community of&nbsp;early adopters looking for new projets to&nbsp;play
          </p>
        </div>
        <div class="TechCard -secondary">
          <h2 class="TechCard_title">Open Order Book</h2>
          <p class="TechCard_description">
            Game items to&nbsp;be simultaneously&nbsp;represented on&nbsp;multiple marketplaces
          </p>
        </div>
      </div>
      <div class="Tech_cards -secondary">
        <div class="TechCard -secondary">
          <h2 class="TechCard_title">Economics & Models</h2>
          <p class="TechCard_description">
            Experienced guidance on&nbsp;building models and highly sufficient economics for games
          </p>
        </div>
        <div class="TechCard">
          <h2 class="TechCard_title">Industry Leading Advice</h2>
          <p class="TechCard_description">
            From mentors building some of&nbsp;the best Web3 applications since 2017
          </p>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "assets/styles/mixins";

.Tech {
  position: relative;
  margin-bottom: 164px;

  &::before,
  &::after {
    content: '';
    position: absolute;
  }

  &::before {
    background: url("/images/cube.png") center / cover no-repeat;
    width: 221px;
    height: 188px;
    right: 60px;
    top: 282px;
  }

  &::after {
    background: url("/images/cone.png") center / cover no-repeat;
    width: 213px;
    height: 265px;
    bottom: 12px;
    left: -95px;
  }

  &_pretitle {
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    text-transform: uppercase;
    margin-bottom: 35px;
    color: #5335CA;
  }

  &_title {
    max-width: 600px;
  }

  &_description {
    max-width: 470px;
    margin-bottom: 45px;
  }

  &_cards {
    display: flex;

    &.-primary {
      gap: 72px;
      margin-bottom: 60px;
    }

    &.-secondary {
      margin-left: 213px;
      gap: 70px;
    }
  }
}

.TechCard {
  position: relative;
  padding: 32px 54px;
  max-width: 400px;

  &::before,
  &::after {
    content: '';
    background: url("/images/curly-brace.png") center / cover no-repeat;
    position: absolute;
    top: 0;
    width: 54px;
    height: 220px;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
    transform: scaleX(-1);
  }

  &.-secondary {
    padding: 32px 42px;
    max-width: 377px;

    .TechCard_title {
      max-width: 250px;
    }

    &::before,
    &::after {
      background: url("/images/square-brace.png") center / cover no-repeat;
      width: 42px;
      height: 220px;
    }
  }

  &_title {
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 8px;
  }

  &_description {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
  }
}
</style>
