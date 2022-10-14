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
.Nav {
  $this: &;

  display: flex;
  align-items: center;
  margin: 0 0 0 auto;
  padding: 4px 16px !important;
  overflow-x: auto;
  overflow-y: hidden;
  overflow: -moz-scrollbars-none;
  scrollbar-width: none;
  -ms-overflow-style: none;

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
    padding: 8px 10px;
    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
    font-size: 18px;
    line-height: 1.21;
    text-align: center;
    text-decoration: none;
    transition: ease color 200ms;
    color: inherit;

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
      border: 1px solid var(--color-white);
      border-radius: 12px;
      opacity: 0;
      transform: scale(0.95);
      transition: ease opacity 300ms, ease transform 300ms;
    }
  }

  @media (max-width: 780px) {
    padding: 3px 16px !important;

    &_item {
      & + & {
        margin-left: 10px;

        &::before {
          display: none;
        }
      }
    }

    &_link {
      padding: 6px 7px;
      font-size: 16px;

      &::before {
        width: calc(100% + 7px);
        height: calc(100% + 5px);
        left: -3px;
        top: -3px;
        border-radius: 8px;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 3px 14px !important;

    &_item {
      & + & {
        margin-left: 6px;
      }
    }

    &_link {
      padding: 5px 6px;
      font-size: 15px;

      &::before {
        width: calc(100% + 6px);
        height: calc(100% + 5px);
        left: -3px;
        top: -3px;
      }
    }
  }
}
</style>
