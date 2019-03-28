import countComponent from './vue-count-up'

const VueCountUp = {
  install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('VueFlagList', countComponent)
  }
}
export default VueCountUp
