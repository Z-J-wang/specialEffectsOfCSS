<template>
  <div class="container">
    <div class="min_pic2"  @mouseover="createMinBox($event)"
        @mousemove="move($event)">
      <img
        src="../assets/bg_SH.jpg"
        width="200px"
      />
    </div>
    <div class="min_pic">
      <img
        src="../assets/bg_SH.jpg"
        width="200px"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "magnifyingMirror",
  data() {
    return {
      msg: "产品展示--放大镜"
    };
  },
  methods: {
    createMinBox(event) {
      var oldWhiteBox = document.getElementById("whiteBox");
      if (oldWhiteBox !== null) {
        return;
      }
      
      var whiteBox = document.createElement("div");
      var container = document.getElementsByClassName("container")[0];
      container.append(whiteBox);
      whiteBox.id = "whiteBox";
    },
    move(event) {
      whiteBox.style.left = event.offsetX + "px";
      whiteBox.style.top = event.offsetY + "px";
    },
    out() {
      var whiteBox = document.getElementById("whiteBox");
      whiteBox.remove();
    }
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
.min_pic {
  float: left;
  position: absolute;
  z-index: 80;
}
.min_pic>img{
  position: absolute;
  z-index: 90;
}
.min_pic2{
  float: left;
  position: absolute;
  z-index: 100;
}
.min_pic2>img{
  visibility: hidden;
}
</style>
<style>
#whiteBox {
  position: absolute;
  width: 80px;
  height: 60px;
  background: rgba(249, 250, 250, 0.3);
  z-index: 99;
}
</style>
