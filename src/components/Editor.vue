<template>
  <div id="editor">
      <div id="jsoneditor"></div>
  </div> 
</template>

<script>
import JSONEditor from 'Jsoneditor'
export default {
  name: 'editor',
  data () {
    return {
      
    }
  },
  mounted(){
    this.init()
  },
  computed:{
   },
  methods:{
    init:function(){
        const container = document.getElementById('jsoneditor');
        let options = {};
        var editor = new JSONEditor(container, options);
         var json = {
            "Array": [1, 2, 3],
            "Boolean": true,
            "Null": null,
            "Number": 123,
            "Object": {"a": "b", "c": "d"},
            "String": "Hello World"
        };
        editor.set(json);
    }
  }
}
</script>
<style lang="scss">
#editor{
    margin: 10px;
    background: #ffffff;
}
</style>
