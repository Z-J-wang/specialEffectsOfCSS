import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import GaussianBlur from '@/components/GaussianBlur'
import MagnifyingMirror from '@/components/MagnifyingMirror'
import Music from '@/components/Music'
import Cloud from '@/components/Cloud'
import Bubbles from '@/components/Bubbles'
import ByBike from '@/components/ByBike'
import CSS3Var from '@/components/CSS3-var'
import FlexBoxLayout from '@/components/FlexBoxLayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },{
      path: '/GaussianBlur',
      name: 'GaussianBlur',
      component: GaussianBlur,
    },{
      path: '/MagnifyingMirror',
      name: 'MagnifyingMirror',
      component: MagnifyingMirror,
    },{
      path: '/Music',
      name: 'Music',
      component: Music,
    },{
      path: '/Cloud',
      name: "Cloud",
      component: Cloud,
    },{
      path: '/Bubbles',
      name: 'Bubbles',
      component: Bubbles,
    },{
      path: '/ByBike',
      name: 'ByBike',
      component: ByBike,
    },{
      path: '/CSS3Var',
      name: 'CSS3Var',
      component: CSS3Var,
    },{
      path: '/FlexBoxLayout',
      name: 'FlexBoxLayout',
      component: FlexBoxLayout,
    }
  ]
})
