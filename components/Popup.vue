<template>
  <div class="Popup" :class="{ '-disclaimer': disclaimer }">
    <div class="Popup_inner">
      <div class="Popup_overlay" @click="close"></div>
      <section class="Popup_body container">
        <button class="Popup_close" type="button" @click="close">
          <svg-icon name="close"></svg-icon>
        </button>
        <header class="Popup_header">
          <h2 class="Popup_title">{{ title }}</h2>
        </header>
        <div v-if="lastUpdate" class="Popup_date">
          Last updated: {{ lastUpdate }}
        </div>
        <div class="Popup_content">
          <slot></slot>
        </div>
        <footer v-if="!hideFooter" class="Popup_footer">
          <Button :color="'orange'" :form="'rounded'" @click="close">
            Close
          </Button>
        </footer>
        <p v-if="disclaimer" class="Popup_disclaimer">
          <strong>Disclaimer.</strong> {{ disclaimer }}
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    lastUpdate: {
      type: String,
      default: '',
    },
    onRoute: {
      type: Boolean,
      default: true,
    },
    hideFooter: {
      type: Boolean,
      default: false,
    },
    disclaimer: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      bodyRef: null,
    }
  },
  mounted() {
    this.bodyRef = document.body
    this.bodyRef.addEventListener('keyup', this.keypressHandler)
    if (window.timerRef) {
      clearTimeout(window.timerRef)
    } else {
      this.bodyRef.style.paddingRight = `${
        window.innerWidth - document.body.clientWidth
      }px`
      this.bodyRef.classList.add('-locked')
    }
  },
  destroyed() {
    this.bodyRef.removeEventListener('keyup', this.keypressHandler)
    window.timerRef = setTimeout(() => {
      window.timerRef = null
      this.bodyRef.style.paddingRight = null
      this.bodyRef.classList.remove('-locked')
    }, 300)
  },
  methods: {
    keypressHandler(e) {
      if (e.code === 'Escape') {
        this.close()
      }
    },
    close() {
      if (this.onRoute) {
        this.$router.push('/')
      } else {
        this.$emit('close')
      }
    },
  },
}
</script>

<style lang="scss">
.Popup {
  $this: &;

  width: 100%;
  height: 100%;
  min-width: var(--layout-minwidth);
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: var(--layer-5);
  overflow: auto;

  &.-fixed-height {
    #{$this}_content {
      padding-right: 10px;
      overflow: auto;
    }

    #{$this}_body {
      max-height: 640px;
    }
  }

  &.-message {
    #{$this}_body {
      max-width: 605px;
    }

    #{$this}_header,
    #{$this}_footer {
      display: none;
    }

    #{$this}_content {
      margin-top: 0;
    }
  }

  &.-subscribe {
    #{$this}_body {
      max-width: 500px;
      padding-top: 20px;

      @media screen and (max-width: 500px) {
        max-width: 285px;
      }
    }

    #{$this}_header,
    #{$this}_footer {
      display: none;
    }

    #{$this}_content {
      margin-top: 0;
    }

    #{$this}_close {
      display: none;
    }
  }

  &.-disclaimer {
    #{$this}_inner {
      padding-top: 60px;
      padding-bottom: 120px;

      @media (max-width: 480px) {
        padding-top: 0;
      }
    }
  }

  &.-video {
    #{$this}_inner {
      padding-bottom: 110px;
    }

    #{$this}_body {
      max-width: 554px;
      padding: 5px;
      border: none;
      border-radius: 14px;
    }

    #{$this}_header,
    #{$this}_close {
      display: none;
    }

    #{$this}_content {
      margin-top: 0;

      .twitter-tweet {
        margin: 0 !important;
      }
    }

    #{$this}_footer {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-top: 0;
      position: absolute;
      top: calc(100% + 30px);
    }
  }

  &_inner {
    display: flex;
    min-height: 100%;
    min-width: var(--layout-minwidth);
    padding: 10px;
    position: relative;
    z-index: 0;
  }

  &_overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    background-image: linear-gradient(180deg, #5335CA 0%, #7354ED 100%);
    opacity: 0.9;
  }

  &_close {
    display: inline-block;
    padding: 0;
    width: 25px;
    height: 25px;
    position: absolute;
    right: 15px;
    top: 15px;
    z-index: 1;
    background-color: transparent;
    border: none;
    color: #555;
    cursor: pointer;
    transition: ease color 200ms;

    &:hover {
      color: var(--color-accent);
    }
  }

  &_body {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto;
    padding: 25px;
    position: relative;
    z-index: 1;
    color: var(--color-dark);
    background-color: var(--color-white);
    border: 2px solid #5335CA;
    border-radius: 20px;
  }

  &_header {
  }

  &_title {
    margin: 0;
    color: var(--color-dark);
    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
    font-size: 20px;
    line-height: 1.12;
  }

  &_date {
    margin: 0;
    margin-top: 20px;
    color: var(--color-midgrey);
    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
    font-size: 14px;
    line-height: 1.12;
  }

  &_content {
    margin-top: 20px;
    flex-grow: 1;
    color: var(--color-black);
    font-family: var(--font-family);
    font-weight: var(--font-weight-regular);
    font-size: 16px;
    line-height: 1.32;
    word-break: break-word;
  }

  &_footer {
    margin-top: 20px;
  }

  &_disclaimer {
    width: 100%;
    position: absolute;
    top: calc(100% + 20px);
    left: 0;
    color: var(--color-white);
    font-size: 12px;
    text-transform: uppercase;
  }

  @media (max-width: 560px) {
    &_body {
      padding: 15px;
    }

    &_disclaimer {
      top: calc(100% + 15px);
    }
  }
}
</style>
