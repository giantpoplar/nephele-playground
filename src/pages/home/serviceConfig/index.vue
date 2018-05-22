<template>
  <div>
    <i class="el-icon-setting" @click="configFormVisible = true" style="cursor:pointer"></i>

    <el-dialog title="图片服务配置" :visible.sync="configFormVisible">
    <el-form>
      <el-form-item label="服务域名或IP">
        <el-input v-model="service.ip" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="服务端口">
        <el-input v-model="service.port" auto-complete="off"></el-input>
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
export default {
  data () {
    return {
      configFormVisible: false,
      service: {
        ip: '192.168.1.1',
        port: '80'
      }
    }
  },
  methods: {
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
