<template>
  <div class="process_cmd_container">
    <span>处理命令</span>
    <div class="process_cmd">
      <div class="process_cmd_codes">imageView2/5/w/3333/q/75|imageslim</div>
      <div class="cmd_copy">
        <div class="cmd_text_wrap">
          <a>复制命令</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import 'src/styles/mixin';
  .process_cmd_container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 30px;
    border-bottom: 1px solid #e6e9f0;
    padding: 0 30px 30px 30px;
    span {
      width: 14.2%;
      color: $regularTextColor;
    }
    .process_cmd {
      width: 70%;
      position: relative;
      .process_cmd_codes {
        color: $secondaryTextColor;
        padding: 12px;
        word-wrap: break-word;
        border: 1px solid #dcdfe5;
        margin-right: 100px;
        border-radius: 5px 0 0 5px;
        font-size: 13px;
      }
      .cmd_copy {
        right: 0;
        top: 0;
        position: absolute;
        height: 96.5%;
        width: 100px;
        text-align: center;
        border: 1px solid #dcdfe5;
        border-left-width: 0;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
        .cmd_text_wrap {
          display: table;
          width: 100%;
          height: 100%;
          a {
            display: table-cell;
            text-align: center;
            vertical-align: middle;
            cursor: pointer;
            color: $blue;
            font-weight: 500;
            font-size: 14px;
          }
        }
      }
    }
  }
</style>
