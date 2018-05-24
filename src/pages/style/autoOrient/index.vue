<template>
  <div>
    <el-radio v-model="autoOrient" label="0" border>关闭</el-radio>
    <el-radio v-model="autoOrient" label="1" border>开启</el-radio>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  computed: {
    autoOrient: {
      get () {
        return this.$store.state.userImgStyle.autoOrient
      },
      set (value) {
        this.SET_AUTO_ORIENT(value)
      }
    }
  },
  methods: {
    ...mapMutations([
      'SET_AUTO_ORIENT'
    ])
  }
}
</script>
