<template>
  <div id="modifyword">
      <!-- 修改单词 -->
      <div class="menu">
        <select name="language" id="language">
          <option value="en">en</option>
        </select>
        <input type="text" class="version inp" value="version （1.0)"/>
        <Dropdown 
          :bookData="bookData" 
          :bookname="bookname" 
          :booktype="booktype"
        ></Dropdown>
        <button class="btn btn-search" @click="search">查询 <i class="fa fa-search" aria-hidden="true"></i></button>
        <button class="btn btn-submit" @click="saveWord">提交</button>
        <a class="text_info" href="http://rap.corp.youdao.com/workspace/myWorkspace.do?projectId=1#9">字段说明</a>
      </div>
      <Editor :jsonData="jsonData" v-if="jsonData !==  null" ref="Editor"> </Editor>
  </div> 
</template>

<script>
import Editor from './Editor'
import bookData from '../js/bookname'
import Dropdown from './Dropdown'
import { getWord, setUpdate, searchData } from './dataModal.js';
export default {
  name: 'modifyword',
  data () {
    return {
      bookname: '请选择书本',
      booktype : 'CET-4',
      bookData: bookData,
      jsonData: null
    }
  },
  mounted(){
    this.init()
  },
  components:{
    Editor,
    Dropdown
  },
  methods:{
    init:function(){
      // 添加监听事件
      getWord().then((res) =>{
          this.jsonData = res
      })
    },
    showPop:function(){
      this.popState = !this.popState
    },
    setBookType:function(type){
      this.booktype = type;
    },
    setBookBookname: function(name){
      this.bookname = name
    },
    search: function(){
      let _this = this
      let ele = document.getElementById('language')
      let version = document.getElementsByClassName('version')[0].value
      let lg = ele.options[ele.selectedIndex].value
      searchData({lg: lg, version : version, bookname: _this.bookname,}).then(res => {
      })
    },
    saveWord: function(){
      this.$refs.Editor.$emit('updata')
    },
  }
}
</script>
<style lang="scss">
#language{
  width: 50px;
  height: 30px;
  vertical-align: bottom;
}
</style>
