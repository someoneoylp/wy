<template>
  <div id="editor">
      <div id="jsoneditor"></div>
  </div> 
</template>

<script>
import JSONEditor from 'Jsoneditor'
import { setUpdate } from './dataModal.js';
export default {
  name: 'editor',
  data () {
    return {
      container: '',
      editor: ''
    }
  },
  props:{
    jsonData:{
      type: Object,
      default: ()=>{
        return {}
      }
    }
  },
  mounted(){
    this.init()
    this.$on('updata', function(data){
      // 要注意每次查询的地址可能不同
      setUpdate(this.editor.get()).then(res =>{
      })
    })
  },
  computed: {
  },
  methods:{
    init:function(){
      this.container = document.getElementById('jsoneditor')
      this.editor = new JSONEditor(this.container, {});
      this.editor.set(this.jsonData)
    },
  }
}
</script>
<style lang="scss">
#editor{
    margin: 10px;
    background: #ffffff;
}
</style>
