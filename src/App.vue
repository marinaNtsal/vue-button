<template>
  <div id="app">
    <reusable-btn
      :customStyle="btnStyle"
      :text="'save'"
    />
  </div>
</template>

<script>
import ReusableBtn from "./components/test-reusable-btn.vue";

export default {
  name: "App",
  components: {
    ReusableBtn,
  },
  computed: {
    btnStyle() {
      return {
        color: "gray",
        fontSize: "2rem",
        padding: "1rem 2rem",
        borderRadius: "1rem",
      };
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
