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
        <TechCard
            v-for="(card, index) in cards.primary"
            :key="index"
            :title="card.title"
            :description="card.description"
            :type="card.type"
        />
      </div>
      <div class="Tech_cards -secondary">
        <TechCard
            v-for="(card, index) in cards.secondary"
            :key="index"
            :title="card.title"
            :description="card.description"
            :type="card.type"
        />
      </div>
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
            title: 'Supercharged Distribution',
            description: 'Get direct access to&nbsp;global community of&nbsp;early adopters looking for new projets to&nbsp;play',
            type: 'primary',
          },
          {
            title: 'Open Order Book',
            description: 'Game items to&nbsp;be simultaneously&nbsp;represented on&nbsp;multiple marketplaces',
            type: 'secondary',
          },
        ],
        secondary: [
          {
            title: 'Economics & Models',
            description: 'Experienced guidance on&nbsp;building models and highly sufficient economics for games',
            type: 'secondary',
          },
          {
            title: 'Industry Leading Advice',
            description: 'From mentors building some of&nbsp;the best Web3 applications since 2017',
            type: 'primary',
          },
        ],
      },
    }
  }
}
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
    @include for-tablet-up {
      display: flex;
    }

    &.-primary {
      @include for-tablet-up {
        gap: 72px;
        margin-bottom: 60px;
      }
    }

    &.-secondary {
      @include for-tablet-up {
        margin-left: 213px;
        gap: 70px;
      }
    }
  }
}

</style>
