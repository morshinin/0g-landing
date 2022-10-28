<template>
  <article ref="viewport" class="Section Adopters">
    <div class="container">
      <div ref="body" class="Section_body">
        <p class="Section_pretitle Adopters_pretitle">Early adopters</p>
        <h1 class="Section_title -opposite Adopters_title">
          Web3 at&nbsp;your fingertips
        </h1>
        <p class="Section_description -opposite Adopters_description">
          Launch all your Web3 apps and manage all virtual items and game assets in&nbsp;one place
        </p>
        <div class="Adopters_scroll-wrap">
          <div v-if="noHorizontalScroll" class="Adopters_scroll">
            <Scrollbar :style="{padding: `0 ${padding}`}">
              <div ref="cards" class="Adopters_slider">
                  <PromoSlide
                    v-for="(card, index) in cards"
                    :key="index"
                    :title="card.title"
                    :img="card.img"
                  />
              </div>
            </Scrollbar>
          </div>
          <div v-else class="Adopters_scroll">
            <div ref="cards" class="Adopters_slider">
              <PromoSlide
                  v-for="(card, index) in cards"
                  :key="index"
                  :title="card.title"
                  :img="card.img"
              />
            </div>
          </div>
        </div>
      </div>
      <footer class="Section_footer">
        <p class="Section_description -opposite Adopters_disclaimer">
          Bringing the best from both worlds of&nbsp;Web3 and old-school Web for developers and users
        </p>
      </footer>
    </div>
  </article>
</template>

<script>
import { TimelineMax, Sine } from 'gsap'
import Scrollbar from '../Scrollbar/Scrollbar.vue';
import { getDeviceType } from '@/utils/getDeviceType'

export default {
  components: {
    Scrollbar,
  },
  data() {
    return {
      noHorizontalScroll: false,
      sceneCheck: null,
      scene: null,
      tween: null,
      controller: null,
      viewport: null,
      padding: 0,
      cards: [
        {
          title: 'Instant secure TXs',
          img: 'adopter-card-2.png'
        },
        {
          title: 'Zero&nbsp;gas fees',
          img: 'adopter-card-3.png'
        },
        {
          title: 'Ethereum grade validity proof',
          img: 'adopter-card-6.png'
        },
        {
          title: 'Unlimited transactions',
          img: 'adopter-card-5.png'
        },
        {
          title: 'Seamless onboarding',
          img: 'adopter-card-4.png'
        },
        {
          title: 'Direct access to global community',
          img: 'adopter-card-1.png'
        },
      ]
    }
  },
  mounted() {
    this.viewport = this.$refs.viewport;

    if (window.innerWidth > 1120) {
      this.setScene();
      this.noHorizontalScroll = false;
      this.$scrollmagic.addScene(this.scene);
    } else {
      this.deleteScene();
      this.noHorizontalScroll = true;
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1120) {
        this.setScene();
        this.$scrollmagic.addScene(this.scene);
        // this.scene.refresh();
        this.$scrollmagic.updateScene(this.scene);
        // this.scene.setPin(this.viewport, {pushFollowers: true});
        this.noHorizontalScroll = false;
      } else {
        this.deleteScene();
        this.noHorizontalScroll = true;
      }
    })

    // this.padding = this.$refs.body.offsetLeft + 'px';
  },
  methods: {
    isMobile() {
      return getDeviceType() === 'mobile' || window.innerWidth < 768;
    },
    setScene() {
      // this.viewport = ;
      const cards = this.$refs.cards;
      const shift = (cards.clientWidth - this.viewport.clientWidth) * -1;
      this.tween = new TimelineMax()
      .fromTo(
        cards,
        0.5,
        {x: 50},
        {
          x: shift,
          ease: Sine.easeInOut,
        }
      )
      this.scene = this.$scrollmagic.scene({
        triggerElement: this.viewport,
        triggerHook: 0,
        duration: 4000,
      })
      .setPin(this.viewport, {pushFollowers: true})
      .setTween(
          this.tween
      )
    },
    deleteScene() {
      this.$scrollmagic.removeScene(this.scene);
      this.$scrollmagic.destroy(true);
      this.scene = null;
      this.tween = null;
    }
  }
};
</script>

<style lang="scss">
@import "assets/styles/mixins";

.Adopters {
  padding: 40px 0;
  background: url("/images/adopters-bg.jpg") center / cover no-repeat;
  border-radius: 2.4rem;

  @include for-tablet-up {
    padding-top: 40px;
    padding-bottom: 40px;
    height: 100vh;
  }

  @include for-desktop-up {
    padding-top: 80px;
    padding-bottom: 80px;
    border-radius: 80px;
  }

  &_pretitle {
    color: var(--color-white);
    font-weight: 400;
    text-transform: uppercase;

    @include for-desktop-up {
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 35px;
    }
  }

  &_title {
    width: 360px;
    margin-bottom: 10px;

    @include for-desktop-up {
      margin-bottom: 25px;
    }
  }

  &_description {
    margin-bottom: 30px;

    @include for-tablet-up {
      max-width: 360px;
    }

    @include for-desktop-up {
      max-width: 460px;
      margin-bottom: 70px;
    }
  }

  &_scroll {
    &-wrap {
      height: 260px;

      @include for-desktop-up {
        height: 370px;
      }
    }
    position: absolute;
    left: 0;
    width: 100%;
    padding-bottom: 15px;

    // .Scrollbar {
    //   padding: 0 5rem;
    // }

    // @include for-desktop-up {
    //   .Scrollbar {
    //     padding: 0 11rem;
    //   }
    // }

    .PromoSlide {
      box-shadow: none !important;
    }
  }

  &_slider {
    padding: 0 0 10px 0 !important;
    display: flex;
    gap: 20px;
    margin-bottom: 32px;
    width: fit-content;

    &::after {
      content: '';
      flex: 0 0 2rem;
    }

    @include for-tablet-up {
      margin-bottom: 34px;
    }

    @include for-desktop-up {
      gap: 40px;
      margin-bottom: 64px;
    }
  }

  &_disclaimer {

    @include for-tablet-up {
      max-width: none;
    }

    @include for-desktop-up {
      max-width: 570px;
    }
  }
}
</style>
