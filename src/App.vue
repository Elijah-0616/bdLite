<!--
 * @Author: Timber.Wang
 * @Date: 2022-04-09 17:02:54
 * @LastEditors: Timber.Wang
 * @LastEditTime: 2022-06-10 08:56:38
 * @Description: 
-->
<template>
  <div id="app">
    <form name="search">
      <table>
        <tr>
          <td id="search">
            <div id="keyword-box">
              <div>
                <el-input placeholder="请输入内容" v-model="input" @keyup.enter.native="searchEnterFun">
                  <el-select v-model="selectUrl" slot="prepend" placeholder="百度" id="select-box">
                    <el-option label="百度" value="https://www.baidu.com/s?wd="></el-option>
                    <el-option label="必应" value="https://cn.bing.com/search?q="></el-option>
                    <el-option label="谷歌" value="https://www.google.com/search?q="></el-option>
                    <el-option label="B站" value="https://search.bilibili.com/all?keyword="></el-option>
                    <el-option label="油管" value="https://www.youtube.com/results?search_query="></el-option>
                  </el-select>
                </el-input>
              </div>
            </div>
          </td>
          <!-- 搜索按钮 -->
          <td id="btn-search">
            <el-button icon="el-icon-search" circle size="medium" @click="bottomForm"></el-button>
          </td>
          <!-- 设置中心抽屉按钮 -->
          <td id="btn-settings">
            <el-button @click="drawer = true" circle size="medium" icon="el-icon-s-tools"></el-button>
          </td>
        </tr>
      </table>
    </form>

    <!-- 设置抽屉 -->
    <el-drawer title="设置中心" size="25%" :visible.sync="drawer" :direction="direction">
      <!-- 卡片一 -->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>页面效果设置</span>
        </div>
        <div class="text item">切换背景图片</div>
        <div class="text item">XXXXXXXX</div>
      </el-card>
      <br />

      <!-- 卡片二 -->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>搜索设置</span>
        </div>
        <div class="text item">XXXXXXXX</div>
        <div class="text item">XXXXXXXX</div>
      </el-card>
      <br />

      <!-- 卡片三 -->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>标签设置</span>
        </div>
        <div class="text item">XXXXXXXX</div>
        <div class="text item">XXXXXXXX</div>
      </el-card>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      // 输入框内容
      input: '',
      // 选择的URL，默认百度
      selectUrl: 'https://www.baidu.com/s?wd=',
      // 抽屉
      drawer: false,
      // 抽屉弹出方向
      direction: 'rtl',
      // 动态背景启用
      dynamicBg: true,
      // 小彩蛋
      smallEggs: 0
    }
  },
  // 生命周期函数
  created() {},
  // 方法区
  methods: {
    // 搜索输入框回车键监听
    searchEnterFun() {
      this.smallEggs = this.smallEggs + 1
      // console.log(this.smallEggs)
      // 小彩蛋
      if (this.smallEggs === 10) {
        this.$confirm('即将为你导航到神秘网页，是否继续？', '恭喜你发现了一个彩蛋！', {
          confirmButtonText: '去瞧瞧',
          cancelButtonText: '算了吧',
          roundButton: true,
          type: 'success'
        })
          .then(() => {
            window.open('https://github.com/Elijah-0616/bdLite')
            return
          })
          .catch(() => {
            this.$notify.warning({
              title: '你已取消前往神秘网页',
              message: '若想再次激活此彩蛋，请刷新网页！'
            })
            return
          })
      }
      // 搜索功能
      this.bottomForm()
    },

    // 点击搜索事件
    bottomForm() {
      const URL = this.selectUrl
      const a = this.input
      // 输入框判空
      if (a === null || a === '' || typeof a === 'undefined') {
        // console.log('输入框空！')
        this.$notify.info({
          title: '输入框为空',
          message: '您还没有输入搜索内容(～￣▽￣)～'
        })
      } else {
        window.open(URL + a)
        return false
      }
    }
  }
}
</script>

<style scoped>
@import '../src/css/index.css';

#app {
  background: url('https://timber.oss-cn-chengdu.aliyuncs.com/img/utool_up/1643434208435-1.jpg');
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}
</style>
