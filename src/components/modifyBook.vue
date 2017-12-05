<template>
  <div id="modifybook">
      <!-- 修改图书 -->
      <div class="menu">
        <div class="select_bookname">
          <p class="book_name"><span>{{bookname}} </span><i class="fa fa-chevron-down" aria-hidden="true"></i></p>
          <div class="popover">
              <div class="tab">
                <ul>
                  <li>四级</li>
                  <li>六级</li>
                  <li>教科书</li>
                  <li>新东方</li>
                  <li>四级</li>
                  <li>六级</li>
                  <li>教科书</li>
                  <li>新东方</li>
                </ul>
              </div>
              <div class="tab_content">
                <label class="radio_box"><span class="radio_inner"></span><input name="bookname" type="radio" value="《六级真题核心词》" />《六级真题核心词》 </label> 
                <label class="radio_box"><span class="radio-inner"></span><input name="bookname" type="radio" value="《六年级核心词》" />《六年级核心词》 </label> 
                <label class="radio_box"><span class="radio-inner"></span><input name="bookname" type="radio" value="" />《四级真题核心词》 </label> 
                <label class="radio_box"><span class="radio-inner"></span><input name="bookname" type="radio" value="" />《新东方》 </label> 
                <label class="radio_box"><span class="radio-inner"></span><input name="bookname" type="radio" value="" />《六级真题核心词》 </label> 
              </div>
              <!-- <button>确认</button> -->
          </div>
        </div>
        <input type="text" placeholder="单词" class="word"/>
        <button class="btn btn-search">查询 <i class="fa fa-search" aria-hidden="true"></i></button>
        <button class="btn btn-submit">提交</button>
        <a class="text_info" href="#">字段说明</a>
      </div>
      <!-- <Editor></Editor> -->
  </div> 
</template>

<script>
import Editor from './Editor'
export default {
  name: 'modifybook',
  data () {
    return {
      bookname: '《人教版初中英语-九年级全册》'
    }
  },
  mounted(){
    this.init()
  },
  components:{
    Editor
   },
  methods:{
    init:function(){
    }
  }
}
</script>
<style lang="scss">
.menu{
  .select_bookname{
    display: inline-block;
    position: relative;
    .book_name{
        display: inline-block;
        height: 28px;
        line-height: 24px;
        padding:0 5px;
        font-size: 12px;
        border-radius: 3px;
        border: 1px solid #d9d9d9;
        // color: #108ee9;//rgba(0,0,0,.85);
        background: #ffffff;
        cursor: pointer;
        span{
          display: inline-block;
          width: 180px;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          vertical-align: middle;
        }
    }
    .popover{
      position: absolute;
      width: 500px;
      top: 40px;
      left: 0;
      z-index: 2;
      background: #fafafa;
      border-radius: 5px;
      border: 1px solid transparent;
      padding: 20px;
      .tab{
        // border: 1px solid;
        ul{
          list-style: none;
          li{
            display: inline-block;
            padding: 3px 5px;
            // background: #1890ff;
            color: #000;
            font-size: 14px;
            border-radius: 3px;
            cursor: pointer;
            border:1px solid #c3c3c3;
          }
        }
      }
      .tab_content{
        // border: 1px solid #1890ff;
        // border-radius: 4px;
        margin-top: 10px ;
        font-size: 14px;
        .radio-inner{
          border: 1px solid;
          width: 15px;
          height: 15px;
          display: inline-block;
          border-radius: 50%;
        }
        input{
          vertical-align: middle;
          width: 15px;
          height: 15px;
          margin-left: 20px; 
        }
      }
      &::before{
        border: 10px solid transparent;
        border-bottom: 10px solid #ffffff;
        width: 0;
        height: 0;
        position: absolute;
        content: '';
        border-radius: 4px;
        top: -20px;
        left: 20px;
      }
    }
  }
  
  .word{
    width: 150px;
    height: 28px;
    line-height: 28px;
    vertical-align: bottom;
    border: 1px solid #d9d9d9;
    border-radius: 3px;
    padding-left: 3px;
  }
  .btn{
      background-color: #1890ff;
      border-color: #1890ff;
      color: #ffffff;
      height: 28px;
      line-height: 1.15;
      padding: 0 15px;
      border-radius: 5px;
      border: 1px solid transparent;
      vertical-align: bottom;
      cursor: pointer;
  }
  .text_info{
    display: inline-block;
    font-size: 14px;
    text-decoration: none;
    background-color: #1890ff;
    border-color: #1890ff;
    color: #ffffff;
    height: 26px;
    line-height: 26px;
    padding: 0 15px;
    border-radius: 5px;
    border: 1px solid transparent;
    vertical-align: bottom;
    cursor: pointer;
  }
}

</style>
