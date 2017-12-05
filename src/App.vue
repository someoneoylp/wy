<template>
  <div id="app">
      <header class="header">
          <p class="title">编辑系统</p>
      </header>
      <ul @click="goto" v-if="selectedCom === 'nav'" class="nav">
        <li class="menu-item modifybook" data-target="modifybook">修改图书</li>
        <li class="menu-item modifyword" data-target="modifyword">修改单词</li>
        <li class="menu-item setparam" data-target="setparam">参数配置</li>
      </ul>
      <div class="content" v-show="selectedCom !== 'nav'">
        <!-- 根据 show来判断要显示哪一个组件 -->
        <div class="bread_crumbs"> <span class="home" @click="goto" data-target="nav"><i class="fa fa-home" aria-hidden="true"></i>首页</span> / ~~</div>
        <v-modifyBook v-if="selectedCom === 'modifybook'"></v-modifyBook>
        <v-modifyWord v-if="selectedCom === 'modifyword'"></v-modifyWord>
        <v-setParam   v-if="selectedCom === 'setparam'"></v-setParam>
      </div>
  </div> 
</template>

<script>
import modifyBook from './components/modifyBook'
import modifyWord from './components/modifyWord'
import serParam from './components/setParam'

export default {
  name: 'app',
  data () {
    return {
      selectedCom: 'modifybook' // 判断当前应该显示的组建，初始化的时候显示导航
    }
  },
  components: {
    'v-modifyBook': modifyBook,
    'v-modifyWord' : modifyWord,
    'v-serParam':serParam
  },
  mounted(){
   
  },
  computed:{
   },
  methods:{
    goto: function(e){
      e.preventDefault()
      this.selectedCom = e.target.getAttribute('data-target') === null ? 'nav' : e.target.getAttribute('data-target') // 设置当前显示的组件
      // 还要显示back按钮
      console.log()
    }
  }
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
body{
    background: #E8CBC0;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #636FA4, #E8CBC0);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #636FA4, #E8CBC0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#app{
  .header{
      width: 100%;
      height: 50px;
      color: #ffffff;
      line-height: 50px;
      font-size: 16px;
      letter-spacing: 3px;
      background: url('./assets/logo.png') left center no-repeat rgba(0,0,0,0.3);
      background-position: 25px 10px;
      box-shadow: 0px 10px 40px -10px rgba(0,64,128,0.5);
      .title{
        padding-left: 70px; 
      }
  }
  .nav{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      li{
        margin-top: 200px;
        list-style: none;
        width: 250px;
        text-align: center;
        line-height: 130px;
        margin: 200px 10px 0 0;
        color: #ffffff;
        cursor: pointer;
        border-radius: 10px;
        box-shadow: 0px 10px 40px -10px rgba(0,64,128,0.2);
        transition: all .3s;
        &:nth-child(1){
          background:#f15c5c;
        }
        &:nth-child(3){
          background: #F8D435;
        }
        &:nth-child(2){
          background: #68CACB;
        }
        &:hover{
           box-shadow: 0px 10px 40px 8px rgba(0,0,0,0.2);
        }
      } 
  }
  .content{
    width: 80%;
    margin: 30px auto;
    border-radius: 5px;
    padding: 10px 20px;
    // background: rgba(0, 0, 0, 0.22);
    background: rgba(250, 250, 250, 0.9);
    color: rgba(0,0,0,.85);
    .bread_crumbs{
      .home{
        height: 40px;
        border-radius: 40px;
        display: inline-block;
        background-size: 100% 100%; 
        font-style: normal;
        font-size: 14px;
        cursor: pointer;
      }
    }
  }
}

</style>
