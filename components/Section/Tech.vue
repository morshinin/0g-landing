<template>
  <article class="Section Tech">
    <header class="Section_header">
      <p class="Section_pretitle Tech_pretitle">For app developers</p>
      <h1 class="Section_title Tech_title">
        Uncapped Scalability and <span class="text-highlight">Free TXs</span>
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
  margin-bottom: 62px;

  @include for-desktop-up {
    margin-bottom: 120px;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
  }

  &::before {
    background: url("/images/cube.png") center / cover no-repeat;
    top: 32px;
    right: -60px;
    width: 100px;
    height: 90px;

    @include for-tablet-up {
      width: 160px;
      height: 140px;
      top: 83px;
      right: 15px;
    }

    @include for-desktop-up {
      width: 221px;
      height: 188px;
      right: -20px;
      top: 282px;
    }
  }

  &::after {
    background: url("/images/cone.png") center / cover no-repeat;
    bottom: auto;
    top: -22px;
    left: auto;
    right: 20px;
    width: 130px;
    height: 130px;

    @include for-tablet-up {
      width: 190px;
      height: 180px;
      top: 10px;
      right: 190px;
    }

    @include for-desktop-up {
      width: 213px;
      height: 265px;
      bottom: 12px;
      left: -95px;
      right: auto;
      top: auto;
    }
  }

  &_pretitle {
    @include for-desktop-up {
      margin-bottom: 35px;
    }
  }

  &_title {
    max-width: 230px;
    margin-bottom: 10px;

    @include for-tablet-up {
      max-width: 300px;
    }

    @include for-desktop-up {
      max-width: 600px;
      margin-bottom: 25px;
    }
  }

  &_description {
    //max-width: 470px;
    margin-bottom: 33px;

    @include for-tablet-up {
      max-width: 330px;
    }

    @include for-desktop-up {
      margin-bottom: 45px;
      max-width: 440px;
    }
  }

  &_cards {
    display: flex;
    flex-direction: column;
    gap: 24px;

    @include for-tablet-up {
      display: flex;
      flex-direction: row;
    }

    &.-primary {
      margin-bottom: 25px;

      @include for-tablet-up {
        gap: 35px;
        margin-bottom: 34px;
      }

      @include for-desktop-up {
        gap: 72px;
        margin-bottom: 60px;
      }
    }

    &.-secondary {
      flex-direction: column-reverse;

      @include for-tablet-up {
        flex-direction: row;
        margin: 0;
        gap: 33px;
      }

      @include for-desktop-up {
        gap: 70px;
        margin-left: 213px;
      }
    }
  }
}

</style>
