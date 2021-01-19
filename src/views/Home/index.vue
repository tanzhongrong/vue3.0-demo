<template>
  <div class="app-container">
    <div style="float: right;">
      <van-button @click="plus" size="mini" icon="plus" />
      <van-button @click="minus" size="mini" icon="minus" />
    </div>
    <van-image :src="require('common/images/logo.png')" />
    <count-to :start-val="0" :end-val="count" />
  </div>
</template>
<script>
import { ref } from 'vue'
import countTo from 'components/CountTo'
export default {
  components: {
    countTo
  },
  setup() {
    const count = ref(10000)
    const plus = () => {
      count.value += 12000
    }
    const minus = () => {
      count.value -= 1000
    }
    return {
      test: 'I am coming to run this app',
      count,
      plus,
      minus
    }
  }
}
</script>