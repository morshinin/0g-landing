<template>
  <component
    :is="tag"
    :class="classList"
    :href="href || null"
    :type="type || null"
    :disabled="disabled || loading"
    class="Button"
    :target="target"
    @click="$emit('click')"
  >
    <Spinner v-if="loading" />
    <template v-else>
      <slot></slot>
    </template>
  </component>
</template>

<script>
export default {
  props: {
    size: { type: String, default: 'm' },
    color: { type: String, default: '' },
    glow: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    form: { type: String, default: '' },
    target: { type: String, default: '_blank' },
    href: { type: String, default: '' },
    type: { type: String, default: '' },
  },
  computed: {
    tag() {
      if (this.href) {
        return 'a'
      }

      return 'button'
    },
    classList() {
      return {
        '-glow': this.glow,
        '-disabled': this.disabled || this.loading,
        '-loading': this.loading,
        [`-${this.size}`]: this.size,
        [`-${this.color}`]: this.color,
        [`-${this.form}`]: this.form,
      }
    },
  },
}
</script>

<style lang="scss">
.Button {
  display: inline-block;
  padding: 12px 26px;
  position: relative;
  color: var(--color-black);
  background-color: var(--color-accent);
  border: none;
  box-shadow: var(--shadow, none);
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-base);
  line-height: 1.12;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;
  cursor: pointer;
  transition: ease background-color 200ms, ease transform 200ms;

  .Spinner {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: var(--color-orange);
  }

  &:active {
    transform: scale(0.95);
  }

  &.-rounded {
    border-radius: 48px;
  }

  &.-wide {
    width: 100%;
  }

  &.-tall {
    padding: 16px 43px;
    font-size: 1.6rem;
  }

  &.-s {
    padding: 10px 18px;
    font-size: 16px;
  }

  &.-l {
    padding: 14px 42px;
    font-size: 20px;
  }

  &.-glow {
    &::before {
      content: '';
      display: block;
      width: 84%;
      height: 84%;
      position: absolute;
      left: 8%;
      top: 8%;
      z-index: -1;
      background-color: var(--color-second);
      filter: blur(15px);
      opacity: 1;
      transition: ease-in-out opacity 300ms;
      will-change: opacity;
    }
  }
  
  &.-white {
    background-color: var(--color-white);
    border: 3px solid var(--color-black);
    border-radius: 6px;
    box-shadow: 2px 1px 0 var(--color-black);
    letter-spacing: -0.5px;
    
    &:hover {
      background-color: var(--color-black);
      color: var(--color-white);
      transition: ease-in color 200ms;
    }
  }
  
  &.-blue {
    background-color: var(--color-primary);
    color: var(--color-white);
    
    &:hover {
      background-color: darken(#3b4cfa, 10%);
    }
  }

  &.-orange {
    background-color: var(--color-orange);
    color: var(--color-white);

    &:hover {
      background-color: var(--color-accent);
    }

    &.-glow {
      &::before {
        background-color: var(--color-orange);
      }
    }
  }

  &.-green {
    background-color: var(--color-second);
    color: var(--color-white);

    &:hover {
      background-color: var(--color-accent);
    }
  }

  &.-disabled {
    pointer-events: none;
    background-color: var(--color-secondary);
    color: var(--color-white);
  }

  &.-loading {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 98px;
  }
}
</style>
