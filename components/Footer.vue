<template>
  <footer class="Footer">
    <div class="Footer_body">
      <Logo small inverted />
      <div class="Footer_notice">© {{ currentYear }} 0g. All rights reserved.</div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },

  methods: {
    getFullYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/mixins';

.Footer {
  background: #110B28;
  position: relative;

  &_body {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &_notice {
    color: #FFFFFF;
    opacity: 0.5;
  }

  @include for-tablet-up() {
    background: none;
  }

  @include for-desktop-up() {
    padding-top: 0;
  }
}
</style>
