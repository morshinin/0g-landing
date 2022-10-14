<template>
  <section class="Page">
    <div class="Page_body">
      <div v-scroll-spy="{ offset: scrollSpyOffset }" class="Page_layer -bottom">
        <div id="hero" class="Page_section">
          <SectionHero />
        </div>
        <div id="builders" class="Page_section">
          <div class="container">
            <SectionBuilders />
          </div>
        </div>
        <div id="adopters" class="Page_section">
          <div class="container">
            <SectionAdopters />
          </div>
        </div>
        <div id="tech" class="Page_section">
          <div class="container">
            <SectionTech/>
          </div>
        </div>
        <div v-if="false" id="learn" class="Page_section">
          <SectionLearn />
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
    }
  },
  mounted() {
    if (window.innerWidth < 780) {
      this.scrollSpyOffset = 30
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
    position: absolute;
    width: 100%;
    top: 0;
    z-index: 1;
    pointer-events: all;

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
    &:first-child {
      overflow: hidden;
    }

    &.-way {
      position: relative;
      z-index: var(--layer-2);
    }
  }

  #builders {
    margin-bottom: 164px;
  }
  
  #adopters {
    background: #110B28;
    background: url("/images/adopters-bg.png") center / cover no-repeat;
    border-radius: 80px;
    margin-bottom: 164px;
  }
}
</style>
