<template>
  <div id="modifybook">
      <!-- 修改图书 -->
      <div class="menu">
        <Dropdown 
          :bookData="bookData" 
          :bookname="bookname" 
          :booktype="booktype"
        ></Dropdown>
        <input type="text" placeholder="单词" class="inp"/>
        <button class="btn btn-search" @click="search">查询 <i class="fa fa-search" aria-hidden="true"></i></button>
        <button class="btn btn-submit" @click="saveBook">提交</button>
        <a class="text_info" href="http://rap.corp.youdao.com/workspace/myWorkspace.do?projectId=1#9">字段说明</a>
      </div>
      <Editor :jsonData="jsonData" v-if="jsonData !==  null" ref="Editor"> </Editor>
  </div> 
</template>

<script>
import Editor from './Editor'
import bookData from '../js/bookname'
import Dropdown from './Dropdown'
import { getBook, setUpdate, searchData } from './dataModal.js';

export default {
  name: 'modifybook',
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
  computed:{
    
  },
  methods:{
    init:function(){
      getBook().then((res) =>{
          this.jsonData = res
      })
    },
    showPop:function(){
      this.popState = !this.popState
    },
    setBookType:function(type){
      console.log(type+", 设置type")
      this.booktype = type;
    },
    setBookBookname: function(name){
      this.bookname = name
    },
    search: function(){
      let _this = this
      let word = document.getElementsByClassName('inp')[0].value;
      searchData({bookname: _this.bookname, word: word}).then(res => {

      })
    },
    saveBook: function(){
      this.$refs.Editor.$emit('updata')
    },
  }
}
</script>
<style lang="scss">
</style>
