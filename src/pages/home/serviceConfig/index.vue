<template>
  <div>
    <i class="el-icon-setting" @click="configFormVisible = true" style="cursor:pointer"></i>

    <el-dialog title="图片服务配置" :visible.sync="configFormVisible">
    <el-form>
      <el-form-item label="服务域名或IP">
        <el-input v-model="serviceHost" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="服务端口">
        <el-input v-model="servicePort" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="configFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="saveConfig">保存</el-button>
  </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      configFormVisible: false
    }
  },
  computed: {
    serviceHost: {
      get () {
        return this.$store.state.app.nepheleService.host
      },
      set (value) {
        this.SET_NEPHELE_SERVICE_HOST(value)
      }
    },
    servicePort: {
      get () {
        return this.$store.state.app.nepheleService.port
      },
      set (value) {
        this.SET_NEPHELE_SERVICE_Port(value)
      }
    }
  },
  methods: {
    ...mapMutations([
      'SET_NEPHELE_SERVICE_HOST',
      'SET_NEPHELE_SERVICE_PORT'
    ]),
    saveConfig () {
      this.configFormVisible = false
      this.$notify({
        title: '成功',
        message: '更新图片服务器配置成功',
        type: 'success'
      })
    }
  }
}
</Script>
