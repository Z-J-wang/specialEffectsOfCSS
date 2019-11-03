<template>
  <div class="container">
    <div class="sky">
      <div class="clouds_one"></div>
      <div class="clouds_two"></div>
      <div class="clouds_three"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cloud",
  data() {
    return {
      msg: "纯css3云彩动画效果"
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
/* 整体定调*/
.sky {
  height: 480px;            /* 身高480px, 体胖跟 body一样*/
  background: #007fd5;    /* 我任性长这颜色*/
  position: relative;       /* 我要立 flag, 我内部的DIV以我为标准*/
  overflow: hidden;         /* 敢忤逆我,不在我范围内的就不给露脸的机会*/
  -webkit-animation: sky_background 50s ease-out infinite;
  -moz-animation: sky_background 50s ease-out infinite;
  -o-animation: sky_background 50s ease-out infinite;
  animation: sky_background 50s ease-out infinite;  /* 自我展示的方式: 舞法-sky_background; 跳50秒; 先快后慢; 一直跳不要停*/
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);  /* 我不飘,我不3D偏移*/
}

/* 小弟一*/
.sky .clouds_one {
  background: url("../assets/cloud_one.png"); /* 比老大好,我有皮肤*/
  position: absolute;        /* 老大立了flag,那就跟着老大来*/
  left: 0;
  top: 0;
  height: 100%;
  width: 300%;
  -webkit-animation: cloud_one 50s linear infinite;
  -moz-animation: cloud_one 50s linear infinite;
  -o-animation: cloud_one 50s linear infinite;
  animation: cloud_one 50s linear infinite;  /* 自我展示的方式: 舞-cloud_one; 跳50秒; 体力好速度不变; 一直跳不要停*/
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0); /* 老大都不飘,我岂敢飘*/
}

.sky .clouds_two {
  background: url("../assets/cloud_two.png");   /* 我的皮肤独一无二*/
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 300%;
  -webkit-animation: cloud_two 75s linear infinite;    
  -moz-animation: cloud_two 75s linear infinite;
  -o-animation: cloud_two 75s linear infinite;
  animation: cloud_two 75s linear infinite;   /* 体力好,跳得比较久(好像没区别!嘻嘻)*/
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);   /* 飘是什么?我不知道*/
}

.sky .clouds_three {
  background: url("../assets/cloud_three.png");    /* 这皮肤可是史诗级的,绝无第二份*/
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 300%;
  -webkit-animation: cloud_three 100s linear infinite;
  -moz-animation: cloud_three 100s linear infinite;
  -o-animation: cloud_three 100s linear infinite;
  animation: cloud_three 100s linear infinite;  /* 我才是体力最好的,这舞别人跳不了*/
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0); /* 飘是不存在的*/
}

/* 老大的舞 -- 颜色变化*/
@-webkit-keyframes sky_background {
  0% {
	background: #007fd5;
	color: #007fd5
  }
  50% {
	background: #000;
	color: #a3d9ff
  }
  100% {
	background: #007fd5;
	color: #007fd5
  }
}
@-moz-keyframes sky_background {
  0% {
	background: #007fd5;
	color: #007fd5
  }
  50% {
	background: #000;
	color: #a3d9ff
  }
  100% {
	background: #007fd5;
	color: #007fd5
  }
}
@keyframes sky_background {
  0% {
	background: #007fd5;
	color: #007fd5
  }
  50% {
	background: #000;
	color: #a3d9ff
  }
  100% {
	background: #007fd5;
	color: #007fd5
  }
}

/* 偷偷告诉你,我们三跳舞只需要向左横移*/
@-webkit-keyframes cloud_one {
  0% {
	left: 0
  }
  100% {
	left: -200%
  }
}
@-moz-keyframes cloud_one {
  0% {
	left: 0
  }
  100% {
	left: -200%
  }
}
@keyframes cloud_one {
  0% {
	left: 0
  }
  100% {
	left: -200%
  }
}

@-webkit-keyframes cloud_two {
  0% {
	left: 0
  }
  100% {
	left: -200%
  }
}
@-moz-keyframes cloud_two {
  0% {
	left: 0
  }
  100% {
	left: -200%
  }
}
@keyframes cloud_two {
  0% {
	left: 0
  }
  100% {
	left: -200%
  }
}

@-webkit-keyframes cloud_three {
  0% {
	left: 0
  }
  100% {
	left: -200%
  }
}
@-moz-keyframes cloud_three {
  0% {
	left: 0
  }
  100% {
	left: -200%
  }
}
@keyframes cloud_three {
  0% {
	left: 0
  }
  100% {
	left: -200%
  }
}
</style>
