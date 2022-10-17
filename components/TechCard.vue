<template>
  <div
    class="TechCard"
    :class="classList"
  >
    <h2 class="TechCard_title">{{ title }}</h2>
    <p class="TechCard_description" v-html="description" />
  </div>
</template>

<script>
export default {
  props: [
      'title',
      'description',
      'type',
  ],
  computed: {
    classList() {
      return {
        [`-type-${this.type}`]: Boolean(this.type),
      }
    }
  }
}
</script>

<style lang="scss">
.TechCard {
  position: relative;
  padding: 32px 54px;
  max-width: 400px;

  &::before,
  &::after {
    content: '';
    background: url("/images/curly-brace.png") center / cover no-repeat;
    position: absolute;
    top: 0;
    width: 54px;
    height: 220px;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
    transform: scaleX(-1);
  }

  &.-type-secondary {
    padding: 32px 42px;
    max-width: 377px;

    .TechCard_title {
      max-width: 250px;
    }

    &::before,
    &::after {
      background: url("/images/square-brace.png") center / cover no-repeat;
      width: 42px;
      height: 220px;
    }
  }

  &_title {
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 8px;
  }

  &_description {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
  }
}
</style>
