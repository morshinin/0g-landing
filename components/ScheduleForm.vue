<template>
  <div :class="[`-${loadingState.toLowerCase()}`]" class="ScheduleForm">
    <div class="ScheduleForm_box">
      <FormulateForm v-model="fields">
        <FormulateInput label="Name" name="name" />
        <FormulateInput label="Company" name="company" />
        <FormulateInput label="Email" name="email" />

        <FormulateInput label="Phone number" name="phone" />

        <div class="ScheduleForm_group">
          <FormulateInput
            type="date"
            name="date"
            label="Date"
            placeholder="Sample date placeholder"
            :validation="`required|after:${currentDate}`"
            :min="currentDate"
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
       
        <FormulateInput
          v-model="applied"
          type="checkbox"
          label="I agree with Terms & Conditions and Privacy Policy"
        />
        <FormulateInput type="button" label="Schedule Demo" />
      </FormulateForm>
    </div>
  </div>
</template>

<script>
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
    return {
      currentDate: new Date().getDate(),
      fields: {
        name: "",
        company: "",
        email: "",
        phoneCode: "",
        phoneNumber: "",
        date: "",
        timezone: "",
      },
      applied: false,
      loadingState: loading.INITIAL,
      codes: phoneCodes.reduce((items, item) => {
        return [...items, {
          value: item.dial_code,
          label: item.dial_code,
          code: item.code
        }];
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
    resetForm() {
      this.name = "";
      this.email = "";
      this.message = "";
    },
    resetFailState() {
      if (this.loading.FAIL) {
        this.setLoading(loading.INITIAL);
      }
    },
    async handleForm() {
      try {
        this.setLoading(loading.PROGRESS);
        await this.$api.feedback(this.fields);
        this.resetForm();
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
@import "~/node_modules/@braid/vue-formulate/themes/snow/snow.scss";
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

  &.-fail {
    #{$this}_caption {
      color: var(--color-red);
    }
  }

  &.-success {
    #{$this}_box {
      min-height: 400px;

      &::after {
        display: block;
        content: "";
        width: 411px;
        height: 481px;
        position: absolute;
        bottom: -25px;
        right: 30%;
        background-image: url(/images/citizen-big.png);
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: contain;
        transform: translateX(50%);
      }
    }

    #{$this}_control {
      display: none;
    }
  }

  &_caption {
    color: var(--color-black);
    font-family: var(--font-family);
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

  &_textarea,
  &_input {
    width: 100%;
    max-width: 280px;
    margin-left: 30px;
    padding: 12px 16px;
    background-color: var(--color-white);
    border: none;
    box-shadow: 0 0 0 1px var(--color-grey);
    border-radius: 10px;
    color: var(--color-black);
    font-family: var(--font-family);
    font-weight: var(--font-weight-regular);
    font-size: 18px;
    line-height: 1.21;

    &:focus {
      box-shadow: 0 0 0 2px var(--color-accent);
      outline: none;
    }
  }

  &_textarea {
    max-width: 100%;
    height: 210px;
    resize: none;
  }

  &_button {
    margin-top: 25px;
  }

  @media (max-width: 560px) {
    &.-success {
      #{$this}_box {
        position: relative;
        z-index: 0;
        overflow: hidden;

        &::after {
          width: 310px;
          height: 365px;
          bottom: 0;
        }
      }
    }

    &_box {
      padding: 20px;
    }

    &_control {
      flex-direction: column;
      align-items: flex-start;

      &.-textarea #{$this}_label {
        padding-top: 0;
      }

      & + & {
        margin-top: 15px;
      }
    }

    &_input,
    &_textarea {
      margin-left: 0;
      margin-top: 10px;
    }
  }
}
</style>
