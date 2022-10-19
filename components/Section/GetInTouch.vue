<template>
  <article class="Section GetInTouch">
    <div class="container">
      <div class="Section_body GetInTouch_body">
        <div class="GetInTouch_info">
          <p class="Section_pretitle GetInTouch_pretitle">get in touch</p>
          <h1 class="Section_title GetInTouch_title">Schedule a demo</h1>
          <p class="Section_description GetInTouch_description">
            Please fill in the form and 0g Team will get in touch
          </p>
        </div>
        <div class="GetInTouch_form">
          <ScheduleForm />
        </div>
      </div>
      <Footer class="GetInTouch_footer" />
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "assets/styles/mixins";

.GetInTouch {
  padding: 40px 0 27px;
  background: url("/images/form-bg.png") center / cover no-repeat, #110b28;
  border-radius: 24px 24px 0px 0px;
  overflow: hidden;

  @include for-tablet-up {
    padding-top: 60px;
  }

  @include for-desktop-up {
    padding-top: 82px;
    border-radius: 80px 80px 0px 0px;
  }

  &:before {
    content: '';
    background: url("/images/form-bg-blur.png") center 100% / cover no-repeat;
    position: absolute;
    width: 200%;
    height: 200%;
    left: -50%;
    bottom: -75%;

    @include for-tablet-up {
      inset: 0;
    }
  }

  &:after {
    content: '';
    background: url("/images/form-footer-bg.png") center bottom / contain no-repeat;
    position: absolute;
    max-width: 455px;
    width: 85%;
    height: 100%;
    left: 65%;
    bottom: 10vh;
    transform: translateX(-65%);
    z-index: 0;

    @include for-tablet-up {
      left: 0;
      transform: none;
    }
    @include for-tablet-up {
      max-width: 575px;
      left: 10%;
      bottom: 10vh;
    }
  }

  &_body {
    display: flex;
    flex-direction: column;

    @include for-tablet-up {
      flex-direction: row;
      justify-content: space-between;
      gap: 32px;
    }
  }

  &_info {
    @include for-tablet-up {
      flex: 0 1 35%;
    }

    @include for-desktop-up {
      flex: 0 1 50%;
    }
  }

  &_pretitle,
  &_title,
  &_description {
    color: #fff;
  }

  &_pretitle {
    @include for-tablet-up {
      margin-bottom: 80px;
    }
  }

  &_title {
    margin-bottom: 12px;
  }

  &_description {
    margin-bottom: 32px;
  }

  &_form {
    position: relative;
    left: 0;
    flex: 1;
    padding-bottom: 210px;
    z-index: 1;
    margin: 0 -25px;
    max-width: 560px;

    @include for-tablet-up {
      margin: 0;
      padding-bottom: 37px;
    }
  }

  &_footer {
    margin-top: 10vh;
  }
}
</style>
