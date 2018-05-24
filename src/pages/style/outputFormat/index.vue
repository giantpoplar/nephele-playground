<template>
  <div>
    <el-radio v-model="outputFormat" v-for="format in formats" :key="format.id" :label="format.id" border>{{ format.name}}</el-radio>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      formats: [
        {id: 'same', name: ' 与原图一致'},
        {id: 'jpg', name: 'JPG'},
        {id: 'png', name: 'PNG'},
        {id: 'webp', name: 'WEBP'},
        {id: 'gif', name: 'GIF'}
      ]
    }
  },
  computed: {
    outputFormat: {
      get () {
        return this.$store.state.userImgStyle.format
      },
      set (value) {
        this.SET_FORMAT(value)
      }
    }
  },
  methods: {
    ...mapMutations([
      'SET_FORMAT'
    ])
  }
}
</script>
