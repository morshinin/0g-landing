<template>
  <transition name="slide" mode="in-out">
    <div v-if="visible" class="CookiePopup">
      <div class="CookiePopup_description">
        <h4 class="CookiePopup_label">We respect your privacy</h4>
        <p class="CookiePopup_text">
          We use cookies to improve your experience on our website and to
          analyse our traffic.
        </p>
        <div class="CookiePopup_links">
          <nuxt-link class="CookiePopup_link" to="privacy">
            Privacy Policy
          </nuxt-link>
          <nuxt-link class="CookiePopup_link" to="cookie">
            Cookies Policy
          </nuxt-link>
        </div>
      </div>
      <div class="CookiePopup_button">
        <Button
          :color="'white'"
          :glow="true"
          :form="'rounded'"
          @click="$emit('close')"
        >
          Close
        </Button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    visible: Boolean,
  },
}
</script>

<style lang="scss">
.CookiePopup {
  $this: &;

  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px 20px;
  position: relative;
  z-index: 0;
  background-color: #5335CA;
  color: var(--color-white);
  text-align: left;
  filter: drop-shadow(2px 0px 30px rgba(0, 0, 0, 0.5));
  flex-direction: column;

  &_description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    position: relative;
    width: 240px;
  }

  &_label {
    margin: 0;
    color: var(--color-white);
    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.12;
    text-transform: uppercase;
  }

  &_text {
    margin: 0;
    margin-top: 10px;
    color: var(--color-white);
    font-family: var(--font-family);
    font-weight: var(--font-weight-light);
    font-size: 16px;
    line-height: 1.21;
  }

  &_links {
    display: flex;
    align-items: center;
    margin-top: 7px;
  }

  &_link {
    display: inline-block;
    padding: 0;
    position: relative;
    z-index: 0;
    color: #8d9e80;
    background-color: transparent;
    border: none;
    font-family: var(--font-family);
    font-weight: var(--font-weight-regular);
    font-size: 16px;
    line-height: 1.21;
    text-decoration: underline;
    transition: ease color 200ms;
    white-space: nowrap;
    cursor: pointer;

    &:hover {
      color: var(--color-accent);
    }

    & + & {
      margin-left: 10px;
      padding-left: 10px;

      &::before {
        content: '-';
        display: block;
        position: absolute;
        left: 0;
        top: 50%;
        height: 1px;
        color: #8d9e80;
        line-height: 0;
        transform: translate(-50%, -50%);
      }
    }
  }

  &_button {
    flex-shrink: 0;
    align-self: start;
    margin: 0;
    margin-top: 10px;
  }

  @media (max-width: 470px) {
    padding: 15px;
    align-items: flex-start;
    flex-direction: column;

    &_button {
      margin-left: 0;
      margin-top: 15px;
    }
  }
}
</style>
