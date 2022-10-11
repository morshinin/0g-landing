<template>
  <article class="Description">
    <h2 class="Description_title">
      Swap your MegaCryptoPolis $MEGA to&nbsp;Mega World $MEGA so it can be used in the game
    </h2>
    <p class="Description_text">
      1&nbsp;MegaCryptoPolis $MEGA Token gives 10&nbsp;Mega World $MEGA Tokens.
    </p>
    <p class="Description_text">
      There is no time limitations for completing the swap.
    </p>
  </article>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "assets/styles/mixins";
.Description {
  background-color: var(--color-primary);
  color: var(--color-white);
  border-radius: 24px;
  padding: 20px 20px 100px 20px;
  z-index: var(--layer-1);
  box-sizing: border-box;

  @include for-tablet-up() {
    padding: 20px;
    max-width: 355px;
  }

  &_title {
    font-size: 1.6rem;
    max-width: 260px;
    margin-block-end: 1.2rem;

    @include for-tablet-up() {
      max-width: 100%;
    }
  }

  &_text {
    font-size: 1.4rem;

    &:not(:last-child) {
      margin-bottom: var(--layout-gap-sm);

      @include for-tablet-up() {
        margin-bottom: var(--layout-gap-sd);
      }
    }

    @include for-tablet-up() {
      margin-left: 142px;
      max-width: 173px;
    }
  }
}
</style>
