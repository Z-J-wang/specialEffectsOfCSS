<template>
  <div class="container">
    <div class='inner'>
      <span>i</span>
      <h1>Hey</h1>
      <p>这是一张信息卡，它会告诉你一些重要的事情。</p>
    </div>
    <p>实现技巧：使用clip-path 进行剪切结合过渡效果</p>
  </div>
</template>

<script>
export default {
  name: "Bubbles",
  data() {
    return {
      msg: "纯css3鼠标移上去冒泡文字提示框特效"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background: #dcf5ff;
  margin: 0;
  height: 91vh;
  display: grid;
  justify-items: center;
  align-items: center;
  font-family: "Nunito", "sans-serif";
}
.inner {
  background: #09c999;
  padding: 1em;
  border-radius: 10px;
  width: 250px;
  /* clip-path CSS 属性可以创建一个只有元素的部分区域可以显示的剪切区域 */
  clip-path: circle(10% at 90% 20%);  /*circle(半径 at 圆心x 圆心y)*/
  transition: all .5s ease-in-out;  /* 设置过渡效果展现过程 */
  cursor: pointer;
}
.inner:hover {
  clip-path: circle(75%);
  background: #00B6FF;
}
.inner h1 {
  color: white;
  margin: 0;
}
.inner p {
  color: white;
  font-size: .8rem;
}
.inner span {
  float: right;
  color: white;
  font-weight: bold;
  transition: color .5s;
  position: relative;
  margin-right: 4%;
  line-height:20px;
  font-size:24px;
}
.inner:hover span {
  color: rgba(255, 255, 255, 0);
}
</style>
