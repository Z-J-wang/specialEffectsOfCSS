<template>
  <div class="container">
    <div class="box green"></div>
    <div class="box yellow"></div>
    <div class="box red"></div>
    <div class="box blue"></div>
    <div class="box grey"></div>
    <div class="box cyan"></div>
    <div class="box antiquewhite"></div>
    <div class="box sandybrown"></div>
  </div>
</template>

<script>
export default {
  name: "cssVar",
  data() {
    return {
      msg: "CSS3变量与响应式布局实例demo"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
:root {
  --column: 4;
  --box-margin: calc(4px * var(--column));
  --container-width: calc(var(--column) * (200px + 4px * var(--column) * 2));
}
@media screen and (max-width: 1000px) {
  :root {
    --column: 3;
  }
}
@media screen and (max-width: 800px) {
  :root {
    --column: 2;
  }
}
@media screen and (max-width: 500px) {
  :root {
    --column: 1;
  }
}
</style>
<style scoped>
.container {
  width: var(--container-width);
  margin: 0 auto;
}
.box {
  float: left;
  width: 200px;
  height: 200px;
  margin: var(--box-margin);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.green {
  background-color: green;
}
.yellow {
  background-color: yellow;
}
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
.grey {
  background-color: grey;
}
.cyan {
  background-color: cyan;
}
.antiquewhite {
  background-color: antiquewhite;
}
.sandybrown {
  background-color: sandybrown;
}
</style>
