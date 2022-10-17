<template>
  <article
      class="Card"
      :class="classList"
  >
    <header class="Card_header">
      <h2 class="Card_title">
        <svg class="Card_logo" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 106">
          <path fill-rule="evenodd" clip-rule="evenodd" d="m12.673 76.559-.005-.003C9.9 75.266 7.703 73.33 6.082 70.75l-.003-.005-.003-.006c-1.56-2.66-2.326-6.045-2.326-10.127V21.933c0-3.953.766-7.27 2.325-9.929l.002-.003c1.618-2.71 3.813-4.75 6.582-6.108 2.825-1.42 6.012-2.125 9.552-2.125h14.104c4.122 0 7.52.768 10.167 2.336 2.636 1.496 4.57 3.61 5.79 6.333 1.28 2.71 1.912 5.88 1.912 9.496v38.678c0 6.085-1.63 10.619-4.975 13.502-3.249 2.858-7.561 4.266-12.894 4.266H22.21c-3.532 0-6.712-.603-9.532-1.818l-.006-.002Zm31.702-59.836L16.643 68.774c1.852 1.15 4.193 1.738 7.047 1.738h10.85c3.952 0 6.706-.978 8.371-2.836 1.692-1.955 2.56-4.625 2.56-8.057V22.528c0-2.333-.371-4.261-1.096-5.805ZM13.689 65.567c-.812-1.59-1.226-3.565-1.226-5.948V22.528c0-3.489.993-6.11 2.927-7.93l.002-.002.003-.002c1.944-1.892 4.625-2.86 8.098-2.86h11.342c2.79 0 4.996.56 6.657 1.648L13.69 65.567Z" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M72.075 74.436a10.906 10.906 0 0 1-1.063-.7l-.005-.004-.005-.004c-2.33-1.86-3.509-4.259-3.509-7.167 0-2.727.783-4.925 2.389-6.54l.003-.003.003-.003c1.414-1.362 3.292-2.354 5.614-2.991-1.958-.945-3.547-2.138-4.756-3.585l-.003-.004-.002-.003c-1.413-1.758-2.395-3.626-2.937-5.604l-.001-.003A23.544 23.544 0 0 1 67 41.768c0-4.152.832-7.544 2.533-10.145 1.696-2.592 4.104-4.463 7.204-5.615h.003c3.145-1.145 6.81-1.711 10.989-1.711h28.521v5.256l-11.125.932c.63.496 1.301 1.081 2.014 1.753 1.111.98 2.027 2.391 2.765 4.208.822 1.796 1.217 4.241 1.217 7.305 0 2.773-.605 5.412-1.815 7.913-1.159 2.533-3.13 4.608-5.884 6.23l-.003.001-.004.002c-2.781 1.569-6.576 2.334-11.346 2.334h-8.384c-2.725 0-4.855.425-6.419 1.242l-.003.002-.002.001c-.72.362-1.247.867-1.599 1.515-.354.652-.541 1.472-.541 2.48 0 1.466.535 2.435 1.564 3.01a7.163 7.163 0 0 0 3.548.94h17.458c4.107 0 7.517.532 10.212 1.616 2.764 1.085 4.844 2.756 6.212 5.023 1.434 2.2 2.135 4.994 2.135 8.353v2.181c0 4.931-1.685 8.823-5.079 11.623-3.326 2.865-8.272 4.262-14.762 4.262H81.712c-3.456 0-6.53-.501-9.215-1.513-2.63-.95-4.736-2.448-6.3-4.5l-.001-.002c-1.512-2.003-2.254-4.51-2.254-7.49v-2.38c0-3.12.845-5.761 2.557-7.895l.003-.003.002-.004a15.738 15.738 0 0 1 5.571-4.256Zm24.63 1.96c3.001 0 5.269.362 6.837 1.056l.003.001.002.001c1.645.7 2.781 1.67 3.45 2.893.683 1.25 1.034 2.764 1.034 4.562v1.983c0 3.128-1.102 5.365-3.267 6.795l-.005.003c-2.143 1.458-5.142 2.21-9.04 2.21H83.487c-3.57 0-6.342-.686-8.356-2.015l-.004-.002-.003-.002c-1.951-1.227-2.963-3.319-2.963-6.394v-2.182c0-2.112.507-3.8 1.49-5.1 1.068-1.325 2.416-2.27 4.052-2.84l.007-.002.007-.003c1.658-.641 3.45-.964 5.375-.964h13.611Zm4.965-40.38-.004-.008c-.88-1.707-2.126-2.892-3.74-3.579l-.007-.002-.006-.003c-1.646-.764-3.558-1.152-5.746-1.152h-5.622c-3.688 0-6.547.846-8.622 2.49h-.001c-1.96 1.54-2.999 4.293-2.999 8.402 0 4.043.94 6.883 2.73 8.624 1.878 1.697 4.432 2.567 7.709 2.567h5.918c3.324 0 5.77-.494 7.387-1.431 1.71-1.02 2.857-2.31 3.475-3.863.637-1.6.957-3.333.957-5.202 0-2.937-.488-5.203-1.424-6.835l-.005-.008Z" />
          <defs>
            <radialGradient id="logoGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 49.3556 -56.25 0 60 53.123)">
              <stop stop-color="#671E73"/>
              <stop offset="1" stop-color="#2F1E73"/>
            </radialGradient>
            <radialGradient id="b" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 49.3556 -56.25 0 60 53.123)">
              <stop stop-color="#671E73"/>
              <stop offset="1" stop-color="#2F1E73"/>
            </radialGradient>
          </defs>
        </svg>
        <span class="Card_squared -dark">{{ title }}</span>
      </h2>
    </header>
    <div class="Card_body">
      <p class="Card_text" v-html="description" />
    </div>
  </article>
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
@import "assets/styles/mixins";

.Card {
  $this: &;

  font-style: normal;
  font-weight: 400;

  @include for-tablet-up {
    font-size: 16px;
    line-height: 19px;
  }

  @include for-desktop-up {
    font-size: 20px;
    line-height: 24px;
  }

  &.-type-opposite {
    color: var(--color-white);

    #{$this}_logo {
      width: 45px;
      height: 40px;
      fill: var(--color-white);
    }

    #{$this}_squared {
      font-size: 24px;
      background: none;
      border: 1px solid;
      padding: 7px 12px;
      align-self: end;
      margin-left: 3px;
    }

    #{$this}_title {
      margin-bottom: 19px;
    }
  }

  &_title {
    margin-bottom: 12px;
    display: flex;
    gap: 6px;

    @include for-tablet-up {
      gap: 12px;
      margin-bottom: 20px;
    }
  }

  &_text {
    font-size: 1.6rem;
    line-height: 1.9rem;

    @include for-desktop-up {
      font-size: 2rem;
      line-height: 2.4rem;
    }
  }

  &_squared {
    border: 1.84577px solid #FFFFFF;
    border-radius: 3.84535px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    padding: 4px 9px;
    align-self: start;

    @include for-tablet-up {
      padding: 3px 15px;
    }

    &.-dark {
      background: radial-gradient(50% 50% at 50% 50%, #671E73 0%, #2F1E73 100%);
      color: var(--color-white);
      border-radius: 3.84535px;
      border: none;

      @include for-tablet-up {
        font-size: 2.4rem;
        align-self: center;
        padding: 8px 15px;
      }
    }
  }

  &_logo {
    width: 30px;
    height: 33px;
    fill: url(#logoGradient);

    @include for-tablet-up {
      width: 42px;
      height: 37px;
    }
  }
}
</style>
