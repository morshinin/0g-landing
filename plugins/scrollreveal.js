import Vue from 'vue'
import VueScrollReveal from 'vue-scroll-reveal'

Vue.use(VueScrollReveal, {
  class: '-revealed',
  duration: 500,
  scale: 1,
  easing: 'ease-in-out',
  opacity: 0,
  distance: '30px',
  useDelay: 'once',
  delay: 200,
  mobile: false,
})
