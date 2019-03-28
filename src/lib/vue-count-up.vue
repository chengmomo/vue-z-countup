<template>
  <span ref="countUp"></span>
</template>

<script>
  import CountUp from 'countup.js'

  export default {
    name: "vue-count-up",
    props: {
      start: {
        type: Number,
        required: false,
        default: 0
      },
      end: {
        type: Number,
        required: true,
        default: 0
      },
      decimals: {
        type: Number,
        required: false,
        default: 0
      },
      duration: {
        type: Number,
        required: false,
        default: 2
      },
      options: {
        type: Object,
        required: false,
        default() {
          return {}
        }
      },
    },
    data() {
      return {
        numAnim: null
      }
    },
    mounted() {
      this.initCountUp()
    },
    methods: {
      initCountUp() {
        this.numAnim = new CountUp(
          this.$refs.countUp, // 目标元素
          this.start, // 开始值
          this.end, // 结束值
          this.decimals, // 小数位数，默认值是0
          this.duration, // 动画延迟秒数，默认值是2
          this.options)
        this.numAnim.start()
      }
    }
  }
</script>

<style scoped>

</style>
