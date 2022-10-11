import Vue from 'vue'
import ScrollSpy, { Easing } from 'vue2-scrollspy'

Vue.use(ScrollSpy, {
  allowNoActive: true,
  easing: Easing.Cubic.InOut,
  time: 800,
  active: {
    selector: 'li',
    class: '-active',
  },
})
