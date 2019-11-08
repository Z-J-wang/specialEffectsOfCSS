<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>特效案例目录</h2>
    <ul>
      <li v-for=' (router,$index) in routers' v-bind:key="$index">
        <router-link :to="{ name: router.name }" @click.native="updateTitleState($event.srcElement.innerText)">{{ router.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// 引入辅助函数mapMutations
import { mapMutations } from 'vuex' 

export default {
  name: 'Home',
  data () {
    return {
      msg: 'CSS样式特效展示',
      routers:
      [
        {name:'GaussianBlur', title: '高斯模糊--磨砂效果'},
        {name:'MagnifyingMirror', title: '产品展示--放大镜'},
        {name:'Music', title: '纯css3动态耳机音乐阶梯动画特效'},
        {name: 'Cloud', title: "纯css3云彩动画效果"},
        {name: 'Bubbles', title: '纯css3鼠标移上去冒泡文字提示框特效'},
        {name: 'ByBike', title: 'css3自行车走动动画场景特效'},
        {name: 'CSS3Var', title: 'CSS3变量与响应式布局实例demo'},
        {name: 'FlexBoxLayout', title: 'CSS3 弹性盒模型'},
        {name: 'Filter', title: 'CSS3 实现滤镜效果'},
        {name: 'MouseoverTextAndImage', title: 'CSS3 炫酷鼠标悬停图文动画效果'},
      ]
    }
  },
  methods:{
    ...mapMutations([
      'updateTitleState'
    ])
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
