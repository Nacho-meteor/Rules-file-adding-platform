<template>
    <div>
      <!-- 主页 -->
        <el-container>
            <!-- 顶部标题 -->
            <el-header>
                <h1 class="headerH3">
                   规则文件添加平台 
                </h1>
                <span class="headerSpan">
                    v1.0.0
                </span>
            </el-header>
            <!-- 顶部导航 -->
            <div class="topNav">
              <el-row class="elRow">
                  <el-col :span="8" style="textAlign:left">
                      <div class="grid-content bg-purple">
                          <div class="welcome">
                              欢迎
                          </div>
                      </div>
                  </el-col>
                  <el-col :span="8" style="textAlign:center">
                      <div class="grid-content bg-purple">
                          <!-- 显示当前模块名 -->
                          <strong>{{$route.name}}</strong>
                      </div>
                  </el-col>
                  <el-col :span="8" style="textAlign:right">
                      <div class="grid-content bg-purple">
                          <div class="headerIcon" @click="toMain">
                              <img src="../../static/image/index.png" style='vertical-align:middle;' alt="">
                              <span>主页</span>
                          </div>
                          <div  class="headerIcon"  @click="toLogin">
                              <img src="../../static/image/logout.png" style='vertical-align:middle;' alt=""><span>注销</span>
                          </div>
                      </div>
                  </el-col>
              </el-row>
            </div>
            <!-- 中间 -->
            <el-container class="middle">
                <!-- 侧边栏导航 -->
                <el-aside width="200px" class="aside">
                        <div>
                          <div @click="Agencyshow" class="tittle">
                            <span>相关文档</span><span v-show='!showAgency'>∨</span><span v-show="showAgency">∧</span>
                          </div>
                          <div v-show="showAgency">
                            <div>
                              <router-link v-bind:class="this.$route.path=='/rulesDocumentation'?'routerActive':'router'" to="/rulesDocumentation">规则文件编写规范</router-link>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div @click="Financialshow" class="tittle">
                            <span>注意事项</span><span v-show='!showFinancial'>∨</span><span v-show="showFinancial">∧</span>
                          </div>
                          <div v-show="showFinancial">
                            <div>
                              <router-link v-bind:class="this.$route.path=='/precautions'?'routerActive':'router'" to="/precautions">规范添加注意事项</router-link>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div @click="Runshow" class="tittle">
                            <span>添加入口</span><span v-show='!showRun'>∨</span><span v-show="showRun">∧</span>
                          </div>
                          <div v-show="showRun">
                            <div>
                              <router-link v-bind:class="this.$route.path=='/addEntry'?'routerActive':'router'" to="/addEntry">规则文件添加</router-link>
                            </div>
                            <div>
                              <router-link v-bind:class="this.$route.path=='/searchEntry'?'routerActive':'router'" to="/searchEntry">添加历史查询</router-link>
                            </div>
                          </div>
                        </div>
                </el-aside>
                <!-- 右侧路由出口 -->
                <el-main>
                  <el-col :span="24" class="content-wrapper">
                    <transition name="fade" mode="out-in">
                      <router-view></router-view>
                    </transition>
                  </el-col>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      account: "1100", //登录账户
      maxLimit: "3000", //该账户的上限额度
      lastLimit: "2000", //该账户的剩余额度
      showAgency: false, //显示代理事务
      showFinancial: false, //显示代理事务
      showRun: false //显示代理事务
    };
  },
  created() {
    // 获取本地数据登录账号信息
    this.account = sessionStorage.getItem("account")
      ? sessionStorage.getItem("account")
      : this.account;
    this.maxLimit = sessionStorage.getItem("maxLimit")
      ? sessionStorage.getItem("maxLimit")
      : this.maxLimit;
    this.lastLimit = sessionStorage.getItem("lastLimit")
      ? sessionStorage.getItem("lastLimit")
      : this.lastLimit;
  },
  methods: {
    // 左侧导航栏---------------------------------------
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleSelect(index, indexPath) {
      // console.log(index,indexPath)
    },
    // 左侧导航栏结束-----------------------
    // 只显示代理事物
    Agencyshow() {
      this.showAgency = !this.showAgency;
      this.showFinancial = false;
      this.showRun = false;
    },
    // 只显示财务报表
    Financialshow() {
      this.showFinancial = !this.showFinancial;
      this.showAgency = false;
      this.showRun = false;
    },
    // 只显示运营数据
    Runshow() {
      this.showRun = !this.showRun;
      this.showAgency = false;
      this.showFinancial = false;
    },
    // 点击主页，前往主页面
    toMain(){
      this.$router.push('/rulesDocumentation')
    },
    // 点击注销，前往登录页
    toLogin(){
      this.$router.push('/')
    },
  }
};
</script>
<style scoped>
/* 顶部导航 */
.topNav{
  margin-bottom: 40px;
}
.aside{
  overflow: hidden;
}
/* 路由 */
.router {
  width:100%;
  display: block;
  padding: 15px;
  margin-bottom: -1px;
  color: black;
  background-color: #fff;
  border: 1px solid #ddd;
  padding-left: 44px;
  text-align: left;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
}
/* 路由点击 */
.routerActive {
  width:100%;
  color: #ffffff;
  display: block;
  padding: 15px;
  margin-bottom: -1px;
  background-color: #a2b0d8;
  border: 1px solid #ddd;
  padding-left: 44px;
  text-align: left;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
}
.tittle{
  display: block;
  padding: 15px;
  margin-bottom: -1px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  text-align: left;
  font-size: 16px;
  display:flex;
  justify-content: space-between;
  cursor: pointer;
  width:100%;
}
.router:hover{
  background-color:rgba(250, 246, 252, 0.959)
}
.tittle:hover{
  background-color:rgba(250, 246, 252, 0.959)
}
/* 标题 */
.headerH3 {
  display: inline-block;
  font-size: 24px;
}
.headerSpan {
  font-size: 14px;
  color: gray;
  margin-left: 4px;
}
/* 顶部导航 */
.el-row:not(:last-child) {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
/* 顶部导航栏颜色 */
.bg-purple-dark {
  background: #a2b0d8;
}
.bg-purple {
  padding-left: 10px;
  padding-right: 10px;
  line-height: 36px;
  background: #a2b0d8;
}
.bg-purple-light {
  background: #a2b0d8;
}
.grid-content {
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
/* 右侧导航 */
.headerIcon {
  padding-left: 10px;
  padding-right: 10px;
  line-height: 36px;
  cursor: pointer;
  cursor: hand;
  display: inline-block;
}
.headerIcon:hover {
  background-color: #f1ecec;
}
.headerIcon1 {
  padding-left: 10px;
  padding-right: 10px;
  line-height: 36px;
  cursor: pointer;
  cursor: hand;
  display: inline-block;
  text-decoration: none;
}
.headerIcon1:hover {
  background-color: #f1ecec;
}
/* 导航小图标 */
.bg-purple > div > img {
  width: 16px;
  height: 16px;
  margin-right: 4px;
  margin-bottom: 4px;
}
/* 欢迎 */
.welcome span {
  color: #840dcc;
  text-shadow: 0 1px 0 rgba(236, 226, 241, 0.78);
}
/* 中间部分 */
.middle {
  padding: 0 15px;
}
</style>



