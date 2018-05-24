<template>
    <div>
      <div class="menu_background">
        <div class="menu_container">
          <img src="@/assets/logo.png">
          <el-menu
            class="menu"
            :default-active="activeIndex"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="activeRouter">
            <el-menu-item v-for="item in menuItems" :key="item.id" :index="item.index" class="menu_item">{{ item.name }}</el-menu-item>
          </el-menu>
          <el-tooltip effect="dark" content="配置图片服务器" placement="bottom">
            <serviceConfig class="service_config"></serViceConfig>
          </el-tooltip>
        </div>
    </div>
    <div class="router_content">
     <router-view></router-view>
    </div>
  </div>
</template>

<script>
import serviceConfig from './serviceConfig'

export default {
  name: 'Home',
  data () {
    return {
      activeIndex: 'style',
      activeRouter: true,
      menuItems: [
        { id: 1, name: '图片样式', index: 'style' },
        { id: 2, name: '图片上传', index: 'upload' }
      ]
    }
  },
  created () {
    if (this.$route.path === '/upload') {
      this.activeIndex = 'upload'
    }
  },
  components: {
    serviceConfig
  }
}
</script>

<style lang="scss" scoped>
  @mixin contentBorder{
      max-width: 1400px;
      margin-right: auto;
      margin-left: auto;
  }
  .menu_background {
    background-color: #545c64;
    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
    .menu_container {
      display: flex;
      @include contentBorder;
      align-items: center;
      flex-direction: row;
      img {
        margin-left: 2rem;
      }
      .menu {
        margin-left: 5rem;
        flex: 7;
        border-bottom: none;
        .menu_item {
          font-size: .95rem;
          margin-left: 1rem;
        }
      }
      .service_config {
        font-size: 1.3rem;
        color: #ffffff;
        margin-right: 2rem;
      }
    }
  }
  .router_content {
    @include contentBorder;
  }
</style>
