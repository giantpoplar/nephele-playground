<template>
  <div>
    <el-radio v-model="outputFormat" v-for="format in formats" :key="format.id" :label="format.id" border>{{ format.name}}</el-radio>
  </div>
</template>

<script>
export default {
  data () {
    return {
      outputFormat: 'same',
      formats: [
        {id: 'same', name: ' 与原图一致'},
        {id: 'jpg', name: 'JPG'},
        {id: 'png', name: 'PNG'},
        {id: 'webp', name: 'WEBP'},
        {id: 'gif', name: 'GIF'}
      ]
    }
  }
}
</script>
