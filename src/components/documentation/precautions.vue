<template>
    <div class="parent">
      <div v-html="value" class="styleClass"></div>
    </div>
</template>
<script>
  import fileMD from '../../../static/markdown/文件添加注意事项.md'
  //引用marked
  const marked = require('marked')
  //使用marked()将目标*.md文件转换为html
  const htmlMD = marked(fileMD)
  export default{
    name:'rule',
    components:{},
    data(){
      return {
        value:'',
        articeList:[{}]
      }
    },
    created(){
      this.value=htmlMD
    },
  }
</script>
<style scoped>
.parent{
  position: relative;
}
.a{
  background-color: #dff0d8;
}
.styleClass{
    width: 1200px;
    /* height: 400px; */
    /* border: 2px solid gray; */
    margin: 0 auto;
    padding: 20px;
    /* background-color: rgb(54, 52, 52); */
    /* color: gainsboro; */
    text-align: left;
    border-radius: 5px;
}
</style>