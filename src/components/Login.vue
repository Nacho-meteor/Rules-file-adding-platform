<template>
    <!-- 登录 -->
    <div class="loginPage">
        <!-- 图片文字 -->
        <div>
            <img src="../assets/logo.svg" alt="统信">
        </div>
        <div class="word">
            <span class="agency">规则文件添加平台</span><span class="versions">v1.0.0</span>
        </div>
        <!-- 账号密码 -->
        <div class="main">
            <div class="input">
                <span class="label">账号</span><span class="Inputbox"><el-input v-model="account" placeholder="请输入账号"></el-input></span>
            </div>
            <div class="input">
                <span class="label">密码</span><span class="Inputbox"><el-input v-model="password" placeholder="请输入密码"></el-input></span>
            </div>
            <!-- 多选框 -->
            <div class="checkBox">
                <el-radio v-model="radio" label="1">管理员登陆</el-radio>
                <el-radio v-model="radio" label="2">普通用户登陆</el-radio>
            </div>
            <!-- 登录 -->
            <div>
                <el-button @click="toHome">登录</el-button>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      account: "", //账号
      password: "", //密码
      radio: "1" //选中管理员登陆还是普通用户登陆
    };
  },
  methods: {
    toHome() {
      if (this.account != "" && this.password != "") {
        if (this.radio == "1") {
          if (this.account == 1 && this.password == 1) {
            console.log("管理员登陆");
            let info = {};
            info.account=this.account;//保存账号
            info.password=this.password;//保存密码
            info.name=this.account;//保存姓名
            info.level="root";//保存后台等级
            // console.log(info)
            sessionStorage.setItem("info",JSON.stringify(info)); //保存账号的相关信息
            this.$router.push("/Home");
            this.account = "";
            this.password = "";
          } else {
            this.$alert("账号名或密码错误", "提示", {
              confirmButtonText: "确定",
              callback: action => {}
            });
            this.account = "";
            this.password = "";
          }
        } else if((this.radio == "2")) {
          if (this.account == 2 && this.password == 2) {
            console.log("普通用户登陆");
            let info = {};
            info.account=this.account;//保存账号
            info.password=this.password;//保存密码
            info.name=this.account;//保存姓名
            info.level="general";//保存后台等级
            sessionStorage.setItem("info",JSON.stringify(info)); //保存账号的相关信息
            this.$router.push("/Home");
            this.account = "";
            this.password = "";
          } else {
            this.$alert("账号名或密码错误", "提示", {
              confirmButtonText: "确定",
              callback: action => {}
            });
            this.account = "";
            this.password = "";
          }
        }
      } else {
        this.$alert("请输入账号和密码", "提示", {
          confirmButtonText: "确定",
          callback: action => {}
        });
        this.account = "";
        this.password = "";
      }
    }
  }
};
</script>
<style scoped>
.loginPage {
  text-align: center;
  margin-top: 6%;
}
/* 字 */
.word {
  margin: 5px;
}
.agency {
  display: inline-block;
  margin-right: 5px;
  margin-left: 30px;
  font-size: 24px;
}
.versions {
  font-size: 14px;
  color: gray;
}
.main {
  width: 340px;
  margin: 50px auto;
}
/* 账号 */
.input {
  margin-bottom: 20px;
}
.label {
  display: inline-block;
  width: 60px;
  font-size: 14px;
  line-height: 32px;
  height: 32px;
  color: #555;
  text-align: center;
  background-color: #eee;
  border: 1px solid #dcdfe6;
  border-collapse: collapse;
  border-right: 0;
  vertical-align: top;
}
.Inputbox {
  display: inline-block;
  border-collapse: collapse;
  border-left: 0;
  width: 260px;
  vertical-align: top;
}
/* 多选框 */
.checkBox {
  margin-bottom: 10px;
}
</style>

