<template>
  <div class="container">
    <div class="main">
      关键样式：<br />
      filter: blur(20px);<br />
      滤镜中使用高斯模糊效果<br />
      <br />
      注意还得设置给父级DIV设置<br />
      overflow: hidden;<br />
      <br />
      原因：实现高斯模糊效果时，周边会出现白边。为了去除白边，则对父元素设置 overflow: hidden;<br />
      <br />
      建议使用伪元素 ::before<br />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      msg: "高斯模糊--磨砂效果"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1200px;
  height: 80%;
}
.container,
.main::before {
  background: url("../assets/bg_LM.jpg");
}

.main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 80%;
  width: 90%;
  padding: 20px;
  border-radius: 20px;
  background: hska(0, 0%, 100%, 0) border-box;
  overflow: hidden;
  box-shadow: 0 0 0 1px hsla(0, 0%, 100%, 0.3) inset,
    0 0.5em 1em rgba(0, 0, 0, 0.6);
  /* box-shadow: 水平阴影 垂直阴影  模糊距离 阴影尺寸 颜色 内外部阴影设置 */
  text-shadow: 0 1px 1px hsla(0, 0%, 100%, 0.3);
  /* text-shadow: 水瓶阴影 垂直阴影 模糊距离 颜色 */
  /*
    HSLA 颜色：
      H是色度，取值在0度~360度之间，0度是红色，120度是绿色，240度是蓝色。360度也是红色。
      S是饱和度，是色彩的纯度，是一个百分比的值，取值在0%~100%，0%饱和度最低，100%饱和度最高
      L是亮度，也是一个百分比值，取值在0%~100%，0%最暗，100%最亮。
      A是不透明度，取值在0.0~1.0，0.0完全透明，1.0完全不透明。
  */
}

.main::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: -30px;
  /*设置高斯模糊实现磨砂效果*/
  filter: blur(20px);
  -webkit-filter: blur(20px);
  z-index: -1;
}
</style>
