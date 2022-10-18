<template>
  <div :class="[`-${loadingState.toLowerCase()}`]" class="ScheduleForm">
    <div class="ScheduleForm_box">
      <FormulateForm v-show="!loading.FAIL && !loading.PROGRESS" v-model="fields" name="schedule" @submit="handleForm">
        <FormulateInput :validation="`required`" label="Name" name="name" />
        <FormulateInput :validation="`required`" label="Company" name="company" />
        <FormulateInput :validation="`required`" label="Email" name="email" />

        <FormulateInput :validation="`required`" type="tel" label="Phone number" name="phone" />

        <div class="ScheduleForm_group">
          <FormulateInput
            type="date"
            name="date"
            label="Prefered date"
            :validation="`required`"
            :min="currentDate"
            class="ScheduleForm_calendar"
            error-behavior="live"
          />
          <FormulateInput
            name="timezone"
            :options="zones"
            type="select"
            placeholder="Time Zone"
            label="Time Zone"
          />
        </div>
        <FormulateInput name="privacy" :validation="`required`" class="ScheduleForm_privacy" type="checkbox">
          <label slot="label">
            I agree with
            <nuxt-link class="ScheduleForm_link" to="terms"
              >Terms & Conditions</nuxt-link
            >
            and
            <nuxt-link class="ScheduleForm_link" to="privacy"
              >Privacy Policy</nuxt-link
            >
          </label>
        </FormulateInput>
        <div v-if="loading.FAIL" class="ScheduleForm_caption">{{ caption }}</div>
        <FormulateInput class="ScheduleForm_button" type="submit" label="Schedule Demo" />
      </FormulateForm>
      <div v-if="loading.PROGRESS" class="ScheduleForm_spinner">
        <Spinner />
      </div>
      <div v-if="loading.FAIL" class="ScheduleForm_success">
        <svg-icon name="check"></svg-icon>
        <div class="ScheduleForm_success-title">Thanks for your inquiry</div>
        <p class="ScheduleForm_success-text">We'll reach out in the nearest possible time</p>
        <Button
          class="ScheduleForm_button"
          :size="'tall'"
          :color="'blue'"
          :form="'rounded'"
          @click="resetFailState"
        >
          ok, thanks
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
const timeZones = require("../data/time-zones.json");
const phoneCodes = require("../data/phone-codes.json");

const caption = {
  INITIAL: "Please use this form to contact us.",
  PROGRESS: "Sending your message.",
  SUCCESS: "Many thanks! Your message was delivered successfully.",
  FAIL: "Something went wrong. Try later.",
};

const loading = {
  INITIAL: "INITIAL",
  PROGRESS: "PROGRESS",
  SUCCESS: "SUCCESS",
  FAIL: "FAIL",
};

export default {
  data() {
    const currentDate = dayjs().format('YYYY-MM-DD')
    return {
      currentDate,
      fields: {
        name: "",
        company: "",
        email: "",
        phoneCode: "",
        phoneNumber: "",
        date: currentDate,
        timezone: "",
        privacy: false,
      },
      loadingState: loading.INITIAL,
      codes: phoneCodes.reduce((items, item) => {
        return [
          ...items,
          {
            value: item.dial_code,
            label: item.dial_code,
            code: item.code,
          },
        ];
      }, []),
      zones: timeZones.reduce((items, item) => {
        return [...items, item.text];
      }, []),
    };
  },
  computed: {
    caption() {
      return caption[this.loadingState];
    },
    loading() {
      return {
        INITIAL: this.loadingState === loading.INITIAL,
        PROGRESS: this.loadingState === loading.PROGRESS,
        SUCCESS: this.loadingState === loading.SUCCESS,
        FAIL: this.loadingState === loading.FAIL,
      };
    },
  },
  watch: {
    fields() {
      this.resetFailState();
    },
  },
  methods: {
    setLoading(state) {
      this.loadingState = state;
    },
    resetFailState() {
      if (this.loading.FAIL || this.loading.SUCCESS) {
        this.setLoading(loading.INITIAL);
      }
    },
    async handleForm() {
      try {
        this.setLoading(loading.PROGRESS);
        await this.$api.schedule({
          ...this.fields,
          phoneNumber: this.fields.phone,
        });
        this.$formulate.reset('schedule');
        this.setLoading(loading.SUCCESS);
      } catch (error) {
        this.setLoading(loading.FAIL);
      }
    },
    close() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/mixins';
@import "~/assets/styles/components/form/form.scss";
.ScheduleForm {
  $this: &;

  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 0;

  background: #f5f3fc;
  box-shadow: 0px 12px 32px rgba(83, 53, 202, 0.1);
  border-radius: 24px;

  &.-progress {
    #{$this}_button {
      height: 44px;
    }
  }

  &_caption {
    color: var(--color-red);
  }

  &_caption {
    font-weight: var(--font-weight-regular);
    font-size: 12px;
    line-height: 1.16;
  }

  &_box,
  &_spinner {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    color: var(--color-dark);
  }

  &_box {
    padding: 24px;

    @include for-tablet-up() {
      padding: 40px;
    }
  }

  &_group {
    display: flex;
    justify-content: center;
    gap: 8px;
  }

  &_spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
    padding: 20px;
    color: var(--color-accent);
  }

  &_success {
    min-height: 400px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    &-title {
      margin-top: 42px;
      margin-bottom: 8px;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #5335CA;
    }

    &-text {
      margin-bottom: 32px;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }

    @include for-tablet-up() {
      &-title {
        margin-bottom: 16px;
        font-size: 32px;
        line-height: 38px;
      }

      &-text {
        margin-bottom: 32px;
        font-size: 20px;
        line-height: 24px;
      }
    }
  }

  &_control {
    display: flex;
    align-items: center;
    width: 100%;

    &.-textarea {
      flex-grow: 1;
      align-items: flex-start;

      #{$this}_label {
        padding-top: 10px;
      }
    }

    & + & {
      margin-top: 25px;
    }
  }

  &_label {
    display: block;
    width: 120px;
    flex-shrink: 0;
    color: var(--color-dark);
    font-family: var(--font-family);
    font-weight: var(--font-weight-regular);
    font-size: 20px;
    line-height: 1.16;
  }

  &_privacy {
    font-size: 16px;
    color: var(--color-dark);

    .formulate-input-element--checkbox {
      flex: 1 0 auto;
      align-self: flex-start;
      margin-right: 11px;
      margin-top: 3px;
    }
  }

  &_calendar {
    // font-size: 15.5px;

    .formulate-input-element--date input {
      padding: 0.65em;
      line-height: 1;
    }
  }

  &_link {
    text-decoration: underline;
  }

  &_button {
    .formulate-input-element--submit button {
      width: 100%;
      display: block;
      border-radius: 48px;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }
  }
}
</style>
