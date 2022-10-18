<template>
  <div 
    ref="container"
    class="Scrollbar"
    :class="classList"
    v-on="$listeners">
    <slot></slot>
  </div>
</template>

<script>
import Simplebar from 'simplebar';
import ScrollMovement from './ScrollMovement';

const defaultOptions = {};

export default {
  name: 'Scrollbar',

  props: {
    options: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    autohide: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    sb: null,
  }),

  computed: {
    el() {
      return this.sb ? this.sb.getScrollElement() : null;
    },
    classList() {
      return {
        '-autohide': this.autohide,
      };
    },
  },

  mounted() {
    setTimeout(() => {
      if (this.$refs.container) {
        this.init();
        this.scroll = new ScrollMovement(this.el, this);
      }
    });
  },

  beforeDestroy() {
    this.destroy();
  },

  methods: {
    /**
     * Initializes the simplebar
     *
     * @return {void}
     */
    init() {
      if (!(this.sb && this.$isServer)) {
        this.sb = new Simplebar(this.$refs.container, { ...defaultOptions, ...this.options });
        this.el.addEventListener('scroll', this.scrollListener, { passive: true });
      }
      this.$nextTick(() => {
        this.$emit('init');
      });
    },

    /**
     * Listens for the scroll event
     *
     * @return {void}
     */
    scrollListener(e) {
      this.scroll.onScroll();
      this.$emit('scroll', e);
    },

    /**
     * Removes all listeners and unmounts the simplebar plugin
     *
     * @return {void}
     */
    destroy() {
      if (this.sb) {
        this.el.removeEventListener('scroll', this.scrollListener);
        this.sb.unMount();
        this.sb = null;
      }
    },

    /**
     * Helper method to set the scroll at top of the container
     *
     * @return {void}
     */
    scrollTop() {
      this.el.scrollTop = 0;
    },

    /**
     * Helper method to set the scroll at the bottom of the container
     *
     * @return {void}
     */
    scrollBottom() {
      this.el.scrollTop = this.el.scrollHeight;
    },

    /**
     * Helper method to set the scroll in the given position
     *
     * @param  {Number} position
     * @return {void}
     */
    scrollTo(position = 0) {
      this.el.scrollTop = position;
    },
  },
};
</script>

<style lang="scss" src="./Scrollbar.scss"></style>
