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
        <div v-if="false" id="learn" class="Page_section">
          <div class="container">
            <SectionLearn />
          </div>
        </div>
        <div v-if="false" id="missions" class="Page_section">
          <SectionMissions />
        </div>
      </div>
      <div class="Page_layer -top">
        <div class="Page_header">
          <Header />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      scrollSpyOffset: 80,
      scrollPosition: null,
    }
  },
  mounted() {
    if (window.innerWidth < 780) {
      this.scrollSpyOffset = 30
    }

    window.addEventListener('scroll', this.updateScroll);
  },
  methods: {
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

  #builders {
    margin-top: -40px;
    margin-bottom: 22px;

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
    background: #110B28;
    background: url("/images/learn-bg.jpg") center / cover no-repeat;
  }
}
</style>
