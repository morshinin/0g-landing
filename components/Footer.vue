<template>
  <footer class="Footer">
    <div class="Footer_body">
      
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '@/assets/styles/mixins';

.Footer {
  padding-top: 170px;
  position: relative;

  @include for-tablet-up() {
    background: none;
  }

  @include for-desktop-up() {
    padding-top: 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: -100px;
    left: 0;
    width: 100%;
    height: 200px;
    background: url(/images/abstract.png) center / cover no-repeat;
    z-index: -1;

    @include for-tablet-up() {
      height: 410px;
      z-index: var(--layer-0);
      top: -210px;
    }

    @include for-desktop-up() {
      top: -312px;
      height: 551px;
    }
  }
}
</style>
