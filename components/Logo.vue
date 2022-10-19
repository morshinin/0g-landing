<template>
  <div class="Logo" :class="classList">
    <img :src="url" alt="0g" class="Logo_img" />
  </div>
</template>

<script>
export default {
  props: {
    inverted: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    }
  },

  computed: {
    classList() {
      return {
        '-is-small': this.small,
      };
    },
    url() {
      return this.inverted ? 'images/0g-logo-inverted.svg' : 'images/0g_logo.svg'
    }
  }
}
</script>

<style lang="scss">
@import "assets/styles/mixins";

.Logo {
  $this: &;

  position: relative;

  &.-is-small {
    #{$this}_img {
      width: 40px;
      height: 40px;

      @include for-desktop-up {
        width: 64px;
        height: 64px;
      }
    }
  }
  
  &_img {
    width: 56px;
    display: block;

    @include for-desktop-up {
      width: 112px;
      height: 98px;
    }
  }

  &_mcp,
  &_mw {
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    display: block;
    text-decoration: none;
    border: 0 none;
  }
  &_mw {
    left: 50%;
  }
}
</style>
