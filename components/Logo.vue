<template>
  <div class="Logo">
    <img src="images/logos.png" alt="MegaCryptoPolis x Megaworld" class="Logo_img" width="320" height="62" />
    <a class="Logo_mcp" href="https://mcp3d.com/" target="_blank"></a>
    <a class="Logo_mw" href="https://megaworld.io/" target="_blank"></a>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.Logo {
  position: relative;
  
  &_img {
    width: 320px;
    height: 62px;
    display: block;
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
