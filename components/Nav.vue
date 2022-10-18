<template>
  <ul v-if="scrollSpy" v-scroll-spy-active v-scroll-spy-link class="Nav">
    <li v-for="item in list" :key="item.title" class="Nav_item">
      <a class="Nav_link" :href="item.target" @click="$emit('click', $event)">{{
        item.title
      }}</a>
    </li>
  </ul>
  <ul v-else v-scroll-spy-link class="Nav">
    <li v-for="item in list" :key="item.title" class="Nav_item">
      <a class="Nav_link" :href="item.target" @click="$emit('click', $event)">{{
        item.title
      }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    scrollSpy: { type: Boolean, default: false },
    list: { type: Array, default: () => [] },
  },
}
</script>

<style lang="scss">
@import "assets/styles/mixins";

.Nav {
  $this: &;

  display: flex;
  align-items: center;
  margin: 0 0 0 auto;
  padding: 4px 16px;
  overflow-x: auto;
  overflow-y: hidden;
  overflow: -moz-scrollbars-none;
  scrollbar-width: none;
  -ms-overflow-style: none;

  @include for-desktop-up {
    padding: 0;
    gap: 40px;
  }

  &::-webkit-scrollbar {
    display: none;
    width: 0 !important;
  }

  &_item {
    display: flex;
    align-items: center;
    position: relative;

    &.-active {
      pointer-events: none;
      color: #5335CA;

      #{$this}_link::before {
        opacity: 0.3;
        transform: scale(1);
      }
    }
  }

  &_link {
    position: relative;
    z-index: 0;
    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
    line-height: 1.21;
    text-align: center;
    text-decoration: none;
    transition: ease color 200ms;
    color: inherit;
    font-size: 1.2rem;
    padding: 0;

    @include for-tablet-up {
      font-size: 1.5rem;
      padding: 8px 10px;
    }

    @include for-desktop-up {
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 2.8rem;
      padding: 0;
    }

    &:hover {
      color: var(--color-accent);
    }

    &::before {
      content: '';
      display: block;
      width: calc(100% + 12px);
      height: calc(100% + 6px);
      position: absolute;
      left: -6px;
      top: -4px;
      z-index: -1;
      opacity: 0;
      transform: scale(0.95);
      transition: ease opacity 300ms, ease transform 300ms;
    }
  }

  //@media (max-width: 780px) {
  //  padding: 3px 16px !important;
  //
  //  &_item {
  //    & + & {
  //      margin-left: 10px;
  //
  //      &::before {
  //        display: none;
  //      }
  //    }
  //  }
  //
  //  &_link {
  //    padding: 6px 7px;
  //    font-size: 16px;
  //
  //    &::before {
  //      width: calc(100% + 7px);
  //      height: calc(100% + 5px);
  //      left: -3px;
  //      top: -3px;
  //      border-radius: 8px;
  //    }
  //  }
  //}
  //
  //@media (max-width: 480px) {
  //  padding: 3px 14px !important;
  //
  //  &_item {
  //    & + & {
  //      margin-left: 6px;
  //    }
  //  }
  //
  //  &_link {
  //    padding: 5px 6px;
  //    font-size: 15px;
  //
  //    &::before {
  //      width: calc(100% + 6px);
  //      height: calc(100% + 5px);
  //      left: -3px;
  //      top: -3px;
  //    }
  //  }
  //}
}
</style>
