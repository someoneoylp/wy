<template>
    <div class="select_bookname">
      <p class="book_name" data-showpop="true" @click="showPop"><span data-showpop="true">{{bookname}}</span><i data-showpop="true" class="fa fa-chevron-down" aria-hidden="true"></i></p>
      <div class="pop-box">
        <div class="popover" v-show="popState">
            <div class="tab">
              <ul @click.stop="handleBookType">
                <li v-for="(item, index) in bookData" :key="index" :data-booktype="item.label" :class=" booktype === item.label ? 'actType' : ''  ">{{item.title}}</li>
              </ul>
            </div>
            <div class="tab_content" v-for="(item , index) in bookData" :key="index" v-show="item.label === booktype">
              <label class="radio_box" v-for="(value, ind) in item.books" :key="ind"><span class="radio-inner"></span><input @click="getBookname" name="bookname" type="radio" :value="value" />{{value}}</label> 
            </div>
        </div>
      </div>
  </div> 
</template>

<script>
export default {
  name: 'dropdown',
  data () {
    return {
      popState: false,
    }
  },
  props: {
    bookData: {
      type:Object,
      default:()=> {
        return {};
      }
    },
    booktype: String,
    bookname: String, 
  },
  mounted(){
   
  },
  computed:{
   },
  methods:{
    showPop:function(){
      this.popState = !this.popState
    },
    handleBookType:function(e){
      // console.log("handleBookType")
      this.booktype = e.target.dataset.booktype
      // this.$emit('setBookType', e.target.dataset.booktype)
    },
    getBookname: function(e){
      this.bookname = e.target.value
      // this.$emit('setBookBookname', e.target.value)
    },
  }
}
</script>
<style lang="scss">
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
      padding: 20px 20px 40px 20px;
      transition: all .3s;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.47);
      .tab{
        // border: 1px solid;
        padding-bottom: 8px; 
        border-bottom: 1px solid #c3c3c3;
        ul{
          list-style: none;
          li{
            display: inline-block;
            margin-left: 10px;
            padding: 3px 5px;
            color: #000;
            font-size: 14px;
            border-radius: 3px;
            cursor: pointer;
            border:1px solid #c3c3c3;
            transition: all .3s;
          }
          .actType{
            color: #ffffff;
            background: #1890ff;
            border-color: transparent;
          }
        }
      }
      .tab_content{
        // border: 1px solid #1890ff;
        // border-radius: 4px;
        margin-top: 20px ;
        font-size: 13px;
        .radio_box{
          color: rgba(0, 0, 0, 0.65);
          position: relative;
          margin-left: 10px;
          .radio-inner{
            position: absolute;
            border: 1px solid #d9d9d9;
            width: 14px;
            height: 14px;
            display: inline-block;
            border-radius: 50%;
            top: 2px;
            transition: all 0.3s;
            opacity: 0;
          }
        }
        input{
          width: 15px;
          height: 15px;
          margin-left: 5px; 
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
</style>
