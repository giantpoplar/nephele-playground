<template>
  <div>
    <p class="hint">{{ hint }}</p>
    <div class="gravity_wrapper">
      <img :src="gravityImg" class="gravity_img">
      <label v-for="gravity in gravities" :key="gravity.id" :class="gravity.class">
        <input type="radio" name="crop.gravity" :value="gravity.value" v-model="selectedGravity" :disabled="isGravityInvalid(gravity.value)">
        <img src="@/assets/crop/highlight.png" class="highlight" :style="displayHighlightImg(gravity.value)">
      </label>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  data () {
    return {
      gravities: [
        {id: 'nw', value: 'NorthWest', class: 'gravity_label north_west'},
        {id: 'north', value: 'North', class: 'gravity_label north'},
        {id: 'ne', value: 'NorthEast', class: 'gravity_label north_east'},
        {id: 'west', value: 'West', class: 'gravity_label west'},
        {id: 'center', value: 'Center', class: 'gravity_label center'},
        {id: 'east', value: 'East', class: 'gravity_label east'},
        {id: 'sw', value: 'SouthWest', class: 'gravity_label south_west'},
        {id: 'south', value: 'South', class: 'gravity_label south'},
        {id: 'se', value: 'SouthEast', class: 'gravity_label south_east'}
      ]
    }
  },
  props: {
    validGravity: Array,
    initGravity: String,
    gravityImg: String,
    hint: String
  },
  computed: {
    selectedGravity: {
      get () {
        return this.$store.state.userImgStyle.selectedGravity
      },
      set (value) {
        this.SET_SELECTED_GRAVITY(value)
      }
    }
  },
  created () {
    console.log(this.initGravity)
    this.SET_SELECTED_GRAVITY(this.initGravity)
  },
  methods: {
    ...mapMutations([
      'SET_SELECTED_GRAVITY'
    ]),
    isGravityInvalid: function (gravity) {
      if (this.validGravity.indexOf(gravity) !== -1) {
        return false
      }
      return true
    },
    displayHighlightImg: function (gravityValue) {
      if (this.selectedGravity === gravityValue) {
        return {
          display: 'inline-block'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/styles/mixin';
  .hint {
    margin: 0;
    color: $secondaryTextColor;
  }
  .gravity_wrapper {
    position: relative;
    margin-top: 20px;
    width: 200px;
    .gravity_img {
      width: 100%
    }
    .gravity_label {
      margin: 0;
      cursor: pointer;
      position: absolute;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: inline-block;
      max-width: 100%;
      input {
        width: 0;
        height: 0;
        opacity: 0;
        margin: 0;
      }
      .highlight {
        position: absolute;
        max-width: 100%;
        display: none;
      }
      &.north_west, &.south_west, &.west {
        left: -5px;
      }
      &.north_west, &.north_east, &.north {
        top: -5px;
      }
      &.center, &.north, &.south {
        left: 50%;
        margin-left: -10px;
      }
      &.east, &.center, &.west {
        top: 50%;
        margin-top: -10px;
      }
      &.east, &.north_east, &.south_east {
        right: -5px
      }
      &.south_east, &.south_west, &.south {
        bottom: -5px
      }
    }
  }
</style>
