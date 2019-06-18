import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Users from '@/components/AllUsersPage'
import User from '@/components/UsersPage'
import Monitoring from '@/components/Monitoring'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/user',
      name: 'user',
      component: Users
    },
    {
      path: '/user/:id',
      name: 'detail',
      component: User
    },
    {
      path: '/monitoring/:id',
      name: 'monitoring',
      component: Monitoring
    }
  ]
})
