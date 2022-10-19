<template>
  <section class="Page">
    <div class="Page_body">
      <div id="hero" class="Page_section">
          <div class="container">
            <SectionHero />
          </div>
        </div>
      <div v-scroll-spy="{ offset: scrollSpyOffset }" class="Page_layer -bottom">
        <div id="builders" class="Page_section">
          <SectionBuilders />
        </div>
        <div id="adopters" class="Page_section">
          <SectionAdopters />
        </div>
        <div id="tech" class="Page_section">
          <div class="container">
            <SectionTech/>
          </div>
        </div>
        <div id="learn" class="Page_section">
          <div class="container">
            <SectionLearn />
          </div>
        </div>
        <div id="missions" class="Page_section">
          <div class="container">
            <SectionMissions />
          </div>
        </div>
      </div>
      <SectionGetInTouch id="get-in-touch" />
      <div class="Page_layer -top">
        <div class="Page_header">
          <Header />
        </div>
      </div>
    </div>
    <div class="Page_cookie">
      <CookiePopup
        :visible="cookieAcceptPopup"
        @close="closeCookieAcceptPopup"
      />
    </div>
    <transition name="scale" mode="in-out">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cookieAcceptPopup: false,
      scrollSpyOffset: 80,
      scrollPosition: null,
    }
  },
  head() {
    const host = 'https://0g.camp';
    const title = '0g Platform - Accelerated Web 3 integration service';
    const description = 'Your portal to the Web 3 universe. Zero fees, global community, easy scalability and distribution.';
    return {
      meta: [
        { hid: 'description', name: 'description', content:  description },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:url', property: 'og:url', content: host },
        { hid: 'og:type', property: 'og:url', content: 'website' },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:image', property: 'og:image', content: `${host}/images/logo-og.jpg` },
        { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
        { hid: 'og:image:height', property: 'og:image:height', content: '630' },
        { hid: 'og:image:type', property: 'og:image:type', content: 'image/jpg' },

        // twitter card
        { hid: "twitter:title", name: "twitter:title", content: title },
        { hid: "twitter:url", name: "twitter:url", content: host },
        { hid: 'twitter:description', name: 'twitter:description', content: description },
        { hid: "twitter:card", name: "twitter:card", content: 'summary_large_image' },
        { hid: "twitter:image", name: "twitter:image", content: `${host}/images/logo-og.jpg` },


        // { hid: "facebook-domain-verification", name: "facebook-domain-verification", content: 'q9h5tdo29t02igs1rcsfpowddw4skb' },
      ]
    }
  },
  mounted() {
    if (window.innerWidth < 780) {
      this.scrollSpyOffset = 30
    }

    window.addEventListener('scroll', this.updateScroll);

    if (!this.$storage.has('cookie-accepted')) {
      setTimeout(() => {
        this.cookieAcceptPopup = true
      }, 1000)
    }
  },
  methods: {
    closeCookieAcceptPopup() {
      this.$storage.set('cookie-accepted', true)
      this.cookieAcceptPopup = false
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/mixins';

.Page {
  position: relative;
  z-index: var(--layer-0);

  &_body {
    position: relative;
  }

  &_layer {
    &.-bottom {
    }

    &.-top {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: var(--layer-2);
      pointer-events: none;
    }
  }

  &_header {
    // position: sticky;
    top: 0;
    z-index: 1;
    pointer-events: all;
    width: 100%;

    &::before {
      content: '';
      width: 100%;
      height: 320px;
      position: absolute;
      left: 0;
      top: 0;
      pointer-events: none;
    }
  }

  &_section {
    overflow: hidden;

    @include for-tablet-up {
      overflow: unset;
    }
    &.-way {
      position: relative;
      z-index: var(--layer-2);
    }
  }

  &_cookie {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: var(--layer-4);
  }

  #builders {
    margin-top: -40px;
    margin-bottom: 60px;

    @include for-tablet-up {
      margin-bottom: 100px;
    }

    @include for-desktop-up {
      margin-bottom: 257px;
    }
  }
  
  #adopters,
  #learn {
    border-radius: 2.4rem;
    margin-bottom: 164px;
 
    @include for-desktop-up {
      border-radius: 80px;
    }
  }

  #adopters {
    margin-bottom: 60px;

    @include for-tablet-up {
      margin-bottom: 70px;
    }

    @include for-desktop-up {
      margin-bottom: 120px;
    }
  }

  #learn {
    margin-bottom: 60px;
    background: #110B28;
    background: url("/images/learn-bg.jpg") center / cover no-repeat;

    @include for-tablet-up {
      margin-bottom: 70px;
    }

    @include for-desktop-up {
      margin-bottom: 120px;
    }
  }

  #missions {
    margin-bottom: 60px;

    @include for-tablet-up {
      margin-bottom: 135px;
    }

    @include for-desktop-up {
      margin-bottom: 50px;
    }
  }
}
</style>
