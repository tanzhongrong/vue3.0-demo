<template>
  <div>
    <slot name="left" />
    <span ref="number" :id="countId" :class="getClass"></span>
    <slot name="right" />
  </div>
</template>
<script>
  import CountUp from 'countup'
  export default {
    name: 'CountTo',
    computed: {
      countId() {
        return `count_up_${this.$.uid}`
      },
      getClass() {
        return this.className
      }
    },
    data() {
      return {
        counter: {}
      }
    },
    props: {
      /**
       * @description 起始值
       */
      startVal: {
        type: Number,
        default: 0
      },
      /**
       * @description 起始值
       */
      endVal: {
        type: Number,
        required: true
      },
      /**
       * @description 小数点后保留位数
       */
      decimals: {
        type: Number,
        default: 0
      },
      /**
       * @description 动画延迟开始时间
       */
      delay: {
        type: Number,
        default: 0
      },
      /**
       * @description 渐变时长
       */
      duration: {
        type: Number,
        default: 1
      },
      /**
       * @description 是否使用变速效果
       */
      useEasing: {
        type: Boolean,
        default: false
      },
      /**
       * @description 是否分组显示
       */
      useGroup: {
        type: Boolean,
        default: true
      },
      /**
       * @description 分组显示的分隔符
       */
      separator: {
        type: String,
        default: ''
      },
      /**
       * @description 整数部分和小数的分隔符
       */
      decimal: {
        type: String,
        default: '.'
      },
      className: {
        type: String,
        default: ''
      }
    },
    methods: {
      getCount() {
        return this.$refs.number.innerHTML
      }
    },
    watch: {
      /**
       * @description 监控endVal值变化，调用update方法
       */
      endVal(newVal) {
        this.counter.update(newVal)
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.counter = new CountUp(this.countId, this.startVal, this.endVal, this.decimals, this.duration, {
          useEasing: this.useEasing,
          useGroup: this.useGroup,
          separator: this.separator,
          decimal: this.decimal
        })
        setTimeout(() => {
          this.counter.start()
        }, this.delay)
      })
    }
  }
</script>
