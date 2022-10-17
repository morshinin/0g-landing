<template>
  <article class="Section Learn">
    <header class="Section_header">
      <h1 class="Section_title -opposite">
        Focused on&nbsp;games.
        Not limited to.
      </h1>
    </header>
    <div class="Section_body">
      <p class="Section_description -opposite">
        Once you’ve&nbsp;played a&nbsp;game with player-driven economics based on&nbsp;Web3 tech, you will never find a&nbsp;regular gaming experience thrilling ever again
      </p>
    </div>
    <footer class="Section_footer">
      <Button
        :size="'tall'"
        :color="'blue'"
        :form="'rounded'"
        >
        Schedule Demo
      </Button>
    </footer>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "assets/styles/mixins";

.Learn {
  padding-top: 283px;
  padding-bottom: 80px;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
  }
  
  &::before {
    background: url("/images/cube-blur.png") center / cover no-repeat;
    width: 119px;
    height: 84px;
    top: 60px;
  }

  &::after {
    background: url("/images/cubes.png") center / cover no-repeat;
    width: 266px;
    height: 277px;
    top: 100px;
  }
}
</style>
