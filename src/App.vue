<template>
  <div id="app">
    <div id="home">
      <router-link
        to="/"
        @click.native="updateTitleState('')"
      >
        <img
          src="./assets/Back.png"
          width="30"
        />
      </router-link>
    </div>
    <div class="titleShow">
      <h2> {{title}} </h2>
    </div>
    <router-view />
  </div>
</template>

<script>

// 调用辅助函数mapState
import { mapState } from "vuex";

// 引入辅助函数mapMutations
import { mapMutations } from "vuex";

export default {
  name: "App",
  computed: mapState({
    title: state => state.title
  }),
  methods: {
    ...mapMutations(["updateTitleState"])
  }
};

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#home {
  position: absolute;
  top: 30px;
  margin-left: 60px;
}
#home:hover {
  transform: scale(1.4);
  transition: 0.5s;
}
.titleShow {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
