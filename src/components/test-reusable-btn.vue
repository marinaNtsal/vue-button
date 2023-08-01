<template>
  <div>
    <button class="test-reusable-btn" :style="customStyle">
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: "vue-button",
  props: {
    text: {
      default: "My Button",
    },
    customStyle: {
      default: () => ({
        color: "black",
        fontSize: "2rem",
        padding: "1rem 2rem",
        borderRadius: "1rem",
        backgroundColor: "rgb(76, 184, 251)"
      }),
    },
  },
};
</script>

<style lang="scss" scoped>
</style>