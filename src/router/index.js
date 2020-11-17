import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [
    {
      // 登录
      path: '/',
      component: resolve => require(['@/components/Login'], resolve),
      name: '登录'
    },
    {
      // 主页--懒加载
      path: '/Home',
      component: resolve => require(['@/components/Home'], resolve),
    },
    {
      // 主页--懒加载
      path: '/Home',
      component: resolve => require(['@/components/Home'], resolve),
      name: '代理事物',
      iconCls: 'el-icon-message',
      children: [{
        path: '/rulesDocumentation',
        component: resolve => require(['@/components/documentation/rulesDocumentation'], resolve),
        name: '规则文件编写规范',
        hidden: true
      }]
    },
    {
      // 主页
      path: '/Home',
      component: resolve => require(['@/components/Home'], resolve),
      name: '注意事项',
      iconCls: 'el-icon-menu',
      children: [{
        path: '/precautions',
        component: resolve => require(['@/components/documentation/precautions'], resolve),
        name: '规则文件添加注意事项',
        hidden: true
      }]
    },
    {
      // 主页
      path: '/Home',
      component: resolve => require(['@/components/Home'], resolve),
      name: '添加入口',
      iconCls: 'el-icon-document',
      children: [{
        path: '/addEntry',
        component: resolve => require(['@/components/entry/addEntry'], resolve),
        name: '规则文件添加',
        hidden: true
      },
      {
        path: '/searchEntry',
        component: resolve => require(['@/components/entry/searchEntry'], resolve),
        name: '添加历史查询'
      }]
    }
  ]
})
