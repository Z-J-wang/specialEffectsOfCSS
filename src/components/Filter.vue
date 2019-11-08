<template>
  <div class="container">
    <main class="lanren">
      <div data-filter="image-grayscale">
        <h2 
          title="将图像转换为灰度图像。值定义转换的比例。值为100%则完全转为灰度图像，值为0%图像无变化。值在0%到100%之间，则是效果的线性乘子。若未设置，值默认是0；"
          >
          grayscale</h2>
        <img src="../assets/filter.jpg">
      </div>
      <div data-filter="image-saturate">
        <h2 
          title="转换图像饱和度。值定义转换的比例。值为0%则是完全不饱和，值为100%则图像无变化。其他值，则是效果的线性乘子。超过100%的值是允许的，则有更高的饱和度。 若值未设置，值默认是1。"
        >
        saturate</h2>
        <img src="../assets/filter.jpg">
      </div>
      <div data-filter="image-sepia">
        <h2
          title="将图像转换为深褐色。值定义转换的比例。值为100%则完全是深褐色的，值为0%图像无变化。值在0%到100%之间，则是效果的线性乘子。若未设置，值默认是0；"
        >
        sepia</h2>
        <img src="../assets/filter.jpg">
      </div>
      <div data-filter="image-invert">
        <h2 
        title="反转输入图像。值定义转换的比例。100%的价值是完全反转。值为0%则图像无变化。值在0%和100%之间，则是效果的线性乘子。 若值未设置，值默认是0。"
        >
          invert</h2>
        <img src="../assets/filter.jpg">
      </div>
      <div data-filter="image-opacity">
        <h2
          title="转化图像的透明程度。值定义转换的比例。值为0%则是完全透明，值为100%则图像无变化。值在0%和100%之间，则是效果的线性乘子，也相当于图像样本乘以数量。 若值未设置，值默认是1。该函数与已有的opacity属性很相似，不同之处在于通过filter，一些浏览器为了提升性能会提供硬件加速。"
        >
        opacity</h2>
        <img src="../assets/filter.jpg">
      </div>
      <div data-filter="image-brightness">
        <h2
          title="给图片应用一种线性乘法，使其看起来更亮或更暗。如果值是0%，图像会全黑。值是100%，则图像无变化。其他的值对应线性乘数效果。值超过100%也是可以的，图像会比原来更亮。如果没有设定值，默认是1。"
        >brightness</h2>
        <img src="../assets/filter.jpg">
      </div>
      <div data-filter="image-contrast">
        <h2
          title="调整图像的对比度。值是0%的话，图像会全黑。值是100%，图像不变。值可以超过100%，意味着会运用更低的对比。若没有设置值，默认是1。"
        >contrast</h2>
        <img src="../assets/filter.jpg">
      </div>
      <div data-filter="image-hue-rotate">
        <h2
          title="给图像应用色相旋转。'angle'一值设定图像会被调整的色环角度值。值为0deg，则图像无变化。若值未设置，默认值是0deg。该值虽然没有最大值，超过360deg的值相当于又绕一圈。"
        >hue-rotate</h2>
        <img src="../assets/filter.jpg">
      </div>
      <div data-filter="image-blur">
        <h2
          title="给图像设置高斯模糊。'radius'一值设定高斯函数的标准差，或者是屏幕上以多少像素融在一起， 所以值越大越模糊；如果没有设定值，则默认是0；这个参数可设置css长度值，但不接受百分比值。"
        >blur</h2>
        <img src="../assets/filter.jpg">
      </div>
      <div data-filter="image-normal">
        <h2>normal</h2>
        <img src="../assets/filter.jpg">
      </div>
    </main>
    <footer style="width:100%;text-align:cebter;background-color: #ffffff;">
      <p>代码：引用自《懒人之家》www.Lanrenzhijia.com</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      msg: "CSS3 实现滤镜效果",
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin: 100px 100px 0 100px;
  background-color: #163065;
  font-family: "ubuntu", Arial, sans-serif;
  line-height: 1;
  overflow-x: hidden;
  display: grid;
  place-items: center;
}

[data-filter*=image-] {
  flex: 0 1 20%;
  line-height: 0;
  position: relative;
  z-index: 0;
}

[data-filter*=image-] img {
  height: auto;
  width: 100%;
}

[data-filter="image-grayscale"] img {
  filter: grayscale(50%);
}

[data-filter="image-saturate"] img {
  filter: saturate(360%);
}

[data-filter="image-sepia"] img {
  filter: sepia(100%);
}

[data-filter="image-invert"] img {
  filter: invert(100%);
}

[data-filter="image-opacity"] img {
  filter: opacity(50%);
}

[data-filter="image-brightness"] img {
  filter: brightness(120%);
}

[data-filter="image-contrast"] img {
  filter: contrast(160%);
}

[data-filter="image-hue-rotate"] img {
  filter: hue-rotate(160deg);
}

[data-filter="image-blur"] img {
  filter: blur(2px);
}

.lanren {
  display: flex;
  flex-wrap: wrap;
}

.lanren h2 {
  background: rgba(100, 0, 50, 0.8);
  color: #fff;
  display: block;
  font-size: 1.25rem;
  font-weight: 300;
  left: 0;
  line-height: 1.5;
  margin: 0;
  padding: .5rem;
  position: absolute;
  top: 0;
  z-index: 1;
}

.lanren a {
  color: #fff;
  display: inline-block;
  font-size: 1rem;
}

.lanren a:hover {
  color: #f8be00;
}
</style>
