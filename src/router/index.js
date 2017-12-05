import Vue from 'vue'
import Router from 'vue-router'
import ModifyBook from '../components/modifyBook'
import ModifyWord from '../components/modifyWord'
import SetParam from '../components/setParam'


Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/modifybook',
        name: 'modifyBook',
        component: ModifyBook
    },
    {
        path: '/modifyWord',
        name: 'modifyWord',
        component: ModifyWord
    },
    {
        path: '/setParam',
        name: 'setParam',
        component: SetParam
    }
  ]
})
