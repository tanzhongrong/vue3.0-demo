<template>
  <div>
    <el-card>
      <template #header>
        {{ test }}
        <el-button style="float: right;" type="primary" size="small" @click="add">增加</el-button>
      </template>
      <el-image :src="logo" />
      {{ count }}
    </el-card>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const count = ref(0)
    const add = () => {
      count.value ++
    }
    return {
      test: 'I am coming to run this app',
      logo: 'common/images/logo.png',
      add,
      count
    }
  }
}
</script>