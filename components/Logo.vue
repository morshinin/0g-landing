<template>
  <div class="Logo">
    <img src="images/0g_logo.svg" alt="0g" class="Logo_img" width="320" height="62" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "assets/styles/mixins";

.Logo {
  position: relative;
  
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
