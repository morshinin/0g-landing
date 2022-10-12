<template>
  <div class="Header">
    <div class="container">
      <div class="Header_inner">
        <button v-scroll-to="'#home'" class="Header_action -home">
          <Logo />
        </button>
        <div class="Header_nav" v-if="false">
          <Nav :list="menu" :scroll-spy="scrollSpy" @click="handleClick"></Nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    scrollSpy: { type: Boolean, default: true },
  },
  data() {
    return {
      menu: [
        { title: 'For Builders', target: '#builders' },
        { title: 'For Early Adopters', target: '#adopters' },
        { title: 'Underlying Tech', target: '#tech' },
        { title: 'Learn', target: '#learn' },
        { title: 'Mission', target: '#mission' },
      ],
    }
  },

  methods: {
    handleClick(e) {
      e.preventDefault()
    },
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
    padding: 0;

    @include for-tablet-up {
      padding: 57px 0;
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
    display: flex;
    margin: 0 16px;
    flex-grow: 1;
    overflow: hidden;
  }

  &_button {
    margin-left: 10px;

    .Button {
      padding: 12px 36px;
    }
  }

  //@media (max-height: 880px), (max-width: 1020px) {
  //  &_inner {
  //    padding: 15px 0;
  //  }
  //}

  @media (max-width: 780px) {
    &_inner {
      justify-content: space-between;
      padding: 12px 0;
    }

    &_nav {
      display: none;
    }

    &_button {
      .Button {
        border-radius: 8px;
        font-size: 16px;
      }
    }
  }
}
</style>
