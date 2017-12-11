<template>
  <div id="setparam">
      <div class="menu">
        <select id="key">
          <option value="defaultCovers">defaultCovers: 默认图书封面</option>
          <option value="hotListBooks">hotListBooks: 热门自定义图书</option>
          <option value="normalBooks">normalBooks: 普通图书信息</option>
        </select>
        <button class="btn btn-search" @click="search">查询 <i class="fa fa-search" aria-hidden="true"></i></button>
        <button class="btn btn-submit" @click="saveParam">提交</button>
        <a class="text_info" href="http://rap.corp.youdao.com/workspace/myWorkspace.do?projectId=1#9">字段说明</a>
      </div>
      <Editor :jsonData="jsonData" v-if="jsonData !==  null" ref="Editor"> </Editor>
  </div> 
</template>

<script>
import Dropdown from './Dropdown'
import Editor from './Editor'
import { getParam, setUpdate, searchData } from './dataModal.js';
export default {
  name: 'setparam',
  data () {
    return {
      jsonData: null
    }
  },
  mounted(){
   //初始化的时候要去加载数据
    
  },
  components:{
    Editor
  },
  computed:{
  },
  created(){
    this.init()
  },
  methods:{
    search: function(){
      let ele = document.getElementById('key')
      let param = ele.options[ele.selectedIndex].value
      searchData({param: param}).then(res => {
        console.log('查询成功')
      })
    },
    saveParam: function(){
      this.$refs.Editor.$emit('updata')
    },
    init:function(){
      getParam().then((res) =>{
          this.jsonData = res
      })
    }
  }
}
</script>
<style lang="scss">
#key{
  height: 30px;
  vertical-align: bottom;
}
</style>
