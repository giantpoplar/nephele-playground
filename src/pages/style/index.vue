<template>
  <div>
    <processCmd></processCmd>
    <div class="style_container">
      <draggable v-model="cmds" class="cmd_container">
        <transition-group>
          <div class="cmd_item" v-for="cmd in cmds" :key="cmd">
            <tag class="cmd_name" :name="items[cmd].title.name" :tooltip="items[cmd].title.tooltip" :iconSize="items[cmd].title.iconSize"></tag>
            <component :is="items[cmd].component" class="cmd_detail"></component>
          </div>
        </transition-group>
      </draggable>
      <div class="effect_container">
        <img-effect></img-effect>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import autoOrient from './autoOrient'
import crop from './crop'
import imgEffect from './imgEffect'
import outputFormat from './outputFormat'
import processCmd from './processCmd'
import quality from './quality'
import resize from './resize'
import rotate from './rotate'
import watermark from './watermark'
import tag from '@/components/tag'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      items: {
        'resize': {
          title: {
            name: '图片缩放'
          },
          component: 'resize'
        },
        'crop': {
          title: {
            name: '图片剪裁'
          },
          component: 'crop'
        },
        'rotate': {
          title: {
            name: '图片旋转'
          },
          component: 'rotate'
        },
        'watermark': {
          title: {
            name: '图片水印'
          },
          component: 'watermark'
        },
        'autoorient': {
          title: {
            name: '自动旋正',
            tooltip: '开启后，会根据图片EXIF中的信息进行旋转',
            iconSize: 14
          },
          component: 'auto-orient'
        },
        'format': {
          title: {
            name: '输出格式'
          },
          component: 'output-format'
        },
        'quality': {
          title: {
            name: '图片质量'
          },
          component: 'quality'
        }
      }
    }
  },
  computed: {
    cmds: {
      get () {
        return this.$store.state.userImgStyle.cmdOrder
      },
      set (value) {
        this.SET_CMD_ORDER(value)
      }
    }
  },
  components: {
    autoOrient,
    crop,
    imgEffect,
    outputFormat,
    processCmd,
    tag,
    quality,
    resize,
    rotate,
    watermark,
    draggable
  },
  methods: {
    ...mapMutations([
      'SET_CMD_ORDER'
    ])
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/styles/mixin';
  .style_container {
    display: flex;
    flex-direction: row;
    align-items: start;
    .cmd_container {
      width: 70%;
      border-right: 1px solid #dcdfe5;
      padding-bottom: 50px;
      .cmd_item {
        margin-top: 50px;
        padding-bottom: 50px;
        border-bottom: 1px solid #e6e9f0;
        @include fa(baseline);
        .cmd_name {
          flex: 2;
          margin-left: 30px;
          font-size: 16px;
          color: $regularTextColor;
        }
        .cmd_detail {
          flex: 8;
        }
      }
    };
    .effect_container{
      width: 30%;
      padding: 50px 20px 50px 40px
    }
  }
</style>
