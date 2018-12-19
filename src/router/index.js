import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Home from '@/pages/home/Home'
=======
import HelloWorld from '@/components/HelloWorld'
>>>>>>> aa7ce50cc826054aae08e1d20edba3eaaaea6342

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'Home',
      component: Home
=======
      name: 'HelloWorld',
      component: HelloWorld
>>>>>>> aa7ce50cc826054aae08e1d20edba3eaaaea6342
    }
  ]
})
