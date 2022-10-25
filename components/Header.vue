<template>
  <div
    class="Header"
    :class="{'-scrolled': scrollPosition > 0}"
  >
    <div class="container">
      <div class="Header_inner">
        <button v-scroll-to="'#hero'" class="Header_action -home">
          <Logo />
        </button>
        <div class="Header_nav">
          <Nav :list="menu" :scroll-spy="scrollSpy" @click="handleClick"></Nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    scrollSpy: { type: Boolean, default: false },
    scrolled: { type: Boolean, default: false },
  },
  data() {
    return {
      menu: [
        { title: 'For Builders', target: '#builders' },
        { title: 'For Early Adopters', target: '#adopters' },
        { title: 'For App Developers', target: '#tech' },
        { title: '', target: '#learh' },
        { title: 'Play to Earn', target: '#missions' },
      ],
      scrollPosition: null,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },

  methods: {
    handleClick(e) {
      e.preventDefault()
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  },
}
</script>

<style lang="scss">
@import "assets/styles/mixins";

.Header {
  $this: &;

  position: relative;


  &_inner {
    display: flex;
    align-items: center;
    padding: 20px 0;
    justify-content: space-between;

    @include for-tablet-up {
      padding: 19px 0;
    }

    @include for-desktop-up {
      padding: 60px 0;
    }
  }

  &_action {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border: none;
    border-radius: 50%;
    background-color: transparent;
    color: var(--color-white);
    cursor: pointer;
    transition: ease color 200ms, ease transform 200ms;
    padding: 0;

    &.-bordered {
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    &:hover {
      color: var(--color-accent);
    }

    &:active {
      transform: scale(0.9);
    }

    & + & {
      margin-left: 10px;
    }
  }

  &_nav {
    @media (max-width: 800px) {
      display: none;
    }

    @include for-desktop-up {
      display: flex;
      flex-grow: 1;
    }
  }

  &_button {
    margin-left: 10px;

    .Button {
      padding: 12px 36px;
    }
  }

  @media (max-width: 780px) {
    &_button {
      .Button {
        border-radius: 8px;
        font-size: 16px;
      }
    }
  }

  &.-scrolled {
    @include for-tablet-up {
      background: linear-gradient(to bottom, var(--color-bluegrey) 50%, transparent);
    }

    #{$this}_inner {
      padding: 10px 0;

      @include for-desktop-up {
        padding: 28px 0;
      }
    }

    .Logo_img {
      @include for-tablet-up {
        width: 30px;
        height: 48px;
      }
    }
  }
}
</style>
