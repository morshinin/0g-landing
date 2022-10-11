<template>
  <div class="Input">
    <input 
      v-model="inputValue" 
      :disabled="disabled" 
      :type="type" 
      :class="['Input_field', classList]"
      v-bind="additionalProps"
      @keyup="keyUp"
    ></input>
    <div v-if="errorMessage" class="Input_tooltip -active">{{ errorMessage }}</div>
  </div>
  
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    value: {
      type: [String, Number],
    },
    errorMessage: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
    },
    type: {
      type: String,
      default: 'text',
    }
  },

  data() {
    return {
      inputValue: this.value,
      additionalProps: {}
    }
  },

  computed: {
    classList() {
      return {
        [`-disabled`]: this.disabled,
        [`-invalid`]: this.errorMessage,
      };
    },
  },

  watch: {
    value(value) {
      this.inputValue = value;
    },

    inputValue() {
      this.$emit('input', this.inputValue);
    }
  },

  beforeMount() {
    if (this.type === 'number') {
      this.additionalProps.step = 'any';
      this.additionalProps.min = 0;
    }
  },

  methods: {
    keyUp() {
      if(this.inputValue < 0 && this.type === 'number'){
        this.inputValue = this.inputValue * -1;
      }
    },
  }
}
</script>

<style lang="scss">
@import "assets/styles/mixins";

.Input {
  position: relative;

  &_field {
    width: 100%;
    box-sizing: border-box;
    padding: 12px 16px;
    background-color: var(--color-white);
    border: 1px solid var(--color-grey);
    border-radius: 10px;
    color: var(--color-black);
    font-family: var(--font-family);
    font-weight: var(--font-weight-regular);
    font-size: 18px;
    line-height: 1.21;

    &.-disabled {
      border: 1px solid var(--color-softgrey);
    }

    &.-invalid {
      border: 1px solid var(--color-red);
    }

    @include for-tablet-up() {
      padding: 8px 16px;
    }

    &:focus {
      outline: none;
    }
  }

  &_tooltip {
    &.-active {
      visibility: visible;
    }

    position: absolute;
    visibility: hidden;
    width: 100%;
    background-color: var(--color-red);
    color: #fff;
    text-align: center;
    font-weight: 700;
    font-size: 1.2rem;
    padding: 5px 0;
    border-radius: 6px;
    top: 105%;
    left: 0;
    z-index: 1;

    &:after {
      content: " ";
      position: absolute;
      bottom: 100%;  /* At the top of the tooltip */
      left: 10%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent transparent var(--color-red) transparent;
    }
  }
}
</style>
