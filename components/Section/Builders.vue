<template>
  <article class="Builders">
    <div class="Section_body Builders_body">
      <p class="Section_pretitle">Builders</p>
      <h1 class="Section_title Builders_title">
        Boost your applications with the Power of Web3
      </h1>
      <div class="Section_description Builders_description">
        <p class="Builders_text">
          Industry-first off-chain toolkit — APIs and SDKs to utilize organic Web3 features in a native development environment.
        </p>
        <p class="Builders_text">
          Rapid, secure, easy-to-use
        </p>
      </div>
    </div>
    <div class="Builders_box -troid -grid">
      <WhiteCard
        v-for="(card, index) in cards.primary"
        :key="index"
        :title="card.title"
        :description="card.description"
        :type="'opposite'"
      />
    </div>
    <div class="Builders_box -white -column">
      <WhiteCard
          v-for="(card, index) in cards.secondary"
          :key="index"
          :title="card.title"
          :description="card.description"
      />
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
            title: 'Explorer',
            description: 'Audit and verify every TX&nbsp;happening on&nbsp;the 0g&nbsp;Platform&nbsp;— keeping it&nbsp;easy and transparent',
          },
          {
            title: 'Bridge',
            description: 'Transfer any assets minted on&nbsp;0g&nbsp;to&nbsp;any L1 or&nbsp;L2 to&nbsp;be&nbsp;traded on&nbsp;external exchanges',
          },
          {
            title: 'Market',
            description: 'Unified marketplace for NFTs, game items, ERC-721 tokens and virtual assets',
          },
          {
            title: 'Helpdesk',
            description: 'Platform-ensured customer support for every application to&nbsp;solve any issue within&nbsp;hours',
          },
        ],
        secondary: [
          {
            title: 'Platform',
            description: 'Zero Knowledge Relay using Layer 1 validity proof through multiple Layer 2 sidechains',
          },
          {
            title: 'Launcher',
            description: 'Get control of all your virtual assets minted on 0g Platform, manage apps and stay social',
          },
        ],
      },
    }
  }
};
</script>

<style lang="scss">
@import "assets/styles/mixins";

.Builders {
  position: relative;
  column-gap: 40px;
  display: flex;
  flex-direction: column;

  @include for-tablet-up {
    display: grid;
    grid-template-columns: repeat(8, 60px);
    row-gap: 60px;
  }

  @include for-desktop-up {
    grid-template-columns: repeat(12, 60px);
  }


  &_title {
    @include for-tablet-up {
      max-width: 340px;
      margin-bottom: 11px;
    }

    @include for-desktop-up {
      max-width: none;
      margin-bottom: 25px;
    }
  }

  &_description {
    @include for-tablet-up {
      font-size: 16px;
      line-height: 19px;
      margin-top: 0;
      max-width: 310px;
    }
  }

  &_body {
    grid-column: span 5;
    order: 3;

    @include for-tablet-up {
      grid-column: span 4;
    }
  }

  &_aside {
    grid-column: span 7;
    position: relative;
  }


  &_text {
    &:first-child {
      margin-bottom: 11px;
    }
  }

  &_logo {
    width: 30px;
    height: 33px;

    @include for-tablet-up {
      width: 42px;
      height: 37px;
    }
  }

  &_box {
    box-shadow: 0 16px 32px rgba(47, 30, 115, 0.2);
    border-radius: 48px;
    padding: 50px;
    position: relative;

    &.-white {
      background-color: var(--color-white);
    }

    &.-column {
      display: flex;
      flex-direction: column;
      gap: 30px;
      padding: 30px;
      order: 1;
      box-shadow: 0px 12px 32px rgba(83, 53, 202, 0.1);
      border-radius: 24px;
      position: absolute;

      @include for-tablet-up {
        top: 0;
        gap: 40px;
        right: 0;
        bottom: auto;
        left: auto;
        max-width: 340px;
        padding: 20px;
        position: absolute;
      }

      @include for-desktop-up {
        width: 513px;
        bottom: -116px;
        left: -223px;
      }
    }

    &.-troid {
      @include for-tablet-up {
        padding-bottom: 0;
      }

      @include for-desktop-up {
        padding-bottom: 245px;
      }

      &::before {
        @include for-desktop-up {
          content: '';
          position: absolute;
          width: 390px;
          height: 390px;
          background: url("/images/super-troid-white.png") bottom right / contain no-repeat;
          bottom: 0;
          right: 0;
          z-index: 0;
          border-bottom-right-radius: 48px;
        }
      }
    }

    &.-grid {
      background: url("/images/list-bg.jpg") center / cover no-repeat;
      order: 2;

      @include for-tablet-up {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 40px;
        row-gap: 57px;
        grid-row: 2;
        grid-column: span 7;
      }
    }
  }
}

</style>
