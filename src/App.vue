<!--
 * @Author: Timber.Wang
 * @Date: 2022-04-09 17:02:54
 * @LastEditors: Timber.Wang
 * @LastEditTime: 2022-07-07 16:29:46
 * @Description: 
-->
<template>
  <div id="app" :style="bgStyle">
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
        <el-button round icon="el-icon-picture" size="small" @click="overloadedStyle">点击切换</el-button>
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
      // 小彩蛋
      smallEggsInit: 0
    }
  },
  // 生命周期函数
  created() {},
  // 方法区（函数区）
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
          message: '您还没有输入搜索内容(~￣▽￣)~'
        })
      } else {
        window.open(URL + a)
        return false
      }
    },

    /*
      切换背景图片事件（屎山代码警告）
      
      原本考虑点击按钮后动态CSS加载的方式切换背景图片
      但本人学艺不精，感觉实现起来有些困难
      这里采用直接刷新页面方式来实现背景图片的随机切换
     */
    overloadedStyle() {
      location.reload()
      this.$message.success({
        message: '切换背景图片成功！'
      })
      // this.$router.push('/index')
    }
  },
  // 计算属性函数区
  computed: {
    // 加载动态背景图片
    bgStyle: function () {
      // 存放要换的图片
      /*
        直接从本地上加载图片
      */
      let imgs = [
        '/static/img/bg/photo/bg1.jpg',
        '/static/img/bg/photo/bg2.jpg',
        '/static/img/bg/photo/bg3.jpg',
        '/static/img/bg/color/1.png',
        '/static/img/bg/color/2.png',
        '/static/img/bg/color/3.png'
      ]

      /*
        弃用远程连接加载背景图片
      */
      // let imgs = [
      //   'https://timber.oss-cn-chengdu.aliyuncs.com/img/blog/DSC_-4ee19fbc46214a70afb43d21ca43a503_1622734010445.jpg',
      //   'https://timber.oss-cn-chengdu.aliyuncs.com/img/blog/DSC_7013453452-5f0f9c42ebdb4ac7a48eb36ac319427a_1622734011246.jpg',
      //   'https://timber.oss-cn-chengdu.aliyuncs.com/img/utool_up/1643434208435-1.jpg',
      //   'https://elijah-cq-1256924628.file.myqcloud.com/img/30A5BCB669FBC98314FF8FCC8F1152F7.png',
      //   'https://elijah-cq-1256924628.file.myqcloud.com/img/3.png',
      //   'https://elijah-cq-1256924628.file.myqcloud.com/img/2.png',
      //   'https://elijah-cq-1256924628.file.myqcloud.com/img/1.png',
      //   'https://elijah-cq-1256924628.file.myqcloud.com/img/DSCF2849.jpg'
      // ]

      // console.log(imgs.length)
      let imgName = imgs[Math.floor(Math.random() * imgs.length)] //进行计算随机
      // 动态插入CSS样式
      let style = "background:url('" + imgName + "'); background-repeat: round; height: 100%; width: 100%; background-size: 100% 100%;"
      return style
    }
  }
}
</script>

<style scoped>
@import '../src/css/index.css';

/* #app {
  background: url('https://timber.oss-cn-chengdu.aliyuncs.com/img/utool_up/1643434208435-1.jpg');
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
} */
</style>
