<template>
  <div class="container">
    <div class='music'>
      <span class='line line1'></span>
      <span class='line line2'></span>
      <span class='line line3'></span>
      <span class='line line4'></span>
      <span class='line line5'></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      msg: "高斯模糊--磨砂效果",
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  height: 600px;
  margin: 100px 100px 0 100px;
  background-color: #1a1e21;
  font-family: "ubuntu", Arial, sans-serif;
  overflow-x: hidden;
  display: grid;
  place-items: center;
}

/* 制作耳机柄，画半圆 */
.music {
  position: relative;
  width: 180px;
  height: 160px;
  border: 8px solid #bebebe;

  /* 去点方框的底部*/
  border-bottom: 0px;

  /* 曲折左半边框形成左上四分之一圆 */ 
  border-top-left-radius: 110px; 

   /* 曲折右半边框形成右上四分之一圆*/
  border-top-right-radius: 110px;
}

/* 使用伪类::before和::after绘画耳机的耳罩*/
.music:before,
.music:after {

  /* 必须设置不设置，不显示*/
  content: ""; 
  position: absolute;
  bottom: -20px;
  width: 40px;
  height: 82px;
  background-color: #bebebe;

  /* 曲折方框*/
  border-radius: 15px; 
}
.music:before {
  right: -25px;
}
.music:after {
  left: -25px;
}

.line {
  position: absolute;
  width: 6px;
  min-height: 30px;

   /* 设置过渡效果的间隔时*/
  transition: 0.5s;

  /* 运行动画为 equalize; 动画运行时长为4秒； 动画延迟时间为0秒； 动画无限次运行*/
  animation: equalize 4s 0s infinite; 

  /* 规定动画的速度曲线为线性*/
  vertical-align: middle;
  animation-timing-function: linear; 
  bottom: 0 !important;
  box-shadow: inset 0px 0px 16px -2px rgba(0, 0, 0, 0.15);
}

/* 调整每一条线的位置颜色，以及其动画延迟执行的时间*/
.line1 {
  left: 30%;
  bottom: 0px;
  animation-delay: -1.9s;
  background-color: #ff5e50;
}

.line2 {
  left: 40%;
  height: 60px;
  bottom: -15px;
  animation-delay: -2.9s;
  background-color: #a64de6;
}

.line3 {
  left: 50%;
  height: 30px;
  bottom: -1.5px;
  animation-delay: -3.9s;
  background-color: #5968dc;
}

.line4 {
  left: 60%;
  height: 65px;
  bottom: -16px;
  animation-delay: -4.9s;
  background-color: #27c8f8;
}

.line5 {
  left: 70%;
  height: 60px;
  bottom: -12px;
  animation-delay: -5.9s;
  background-color: #cc60b5;
}

/* 制定 keyframe 动画规则*/
@keyframes equalize {
  0% {
    height: 48px;
  }
  4% {
    height: 42px;
  }
  8% {
    height: 40px;
  }
  12% {
    height: 30px;
  }
  16% {
    height: 20px;
  }
  20% {
    height: 30px;
  }
  24% {
    height: 40px;
  }
  28% {
    height: 10px;
  }
  32% {
    height: 40px;
  }
  36% {
    height: 48px;
  }
  40% {
    height: 20px;
  }
  44% {
    height: 40px;
  }
  48% {
    height: 48px;
  }
  52% {
    height: 30px;
  }
  56% {
    height: 10px;
  }
  60% {
    height: 30px;
  }
  64% {
    height: 48px;
  }
  68% {
    height: 30px;
  }
  72% {
    height: 48px;
  }
  76% {
    height: 20px;
  }
  80% {
    height: 48px;
  }
  84% {
    height: 38px;
  }
  88% {
    height: 48px;
  }
  92% {
    height: 20px;
  }
  96% {
    height: 48px;
  }
  100% {
    height: 48px;
  }
}
</style>
