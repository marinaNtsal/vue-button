<template>
  <div>
    <button :style="customStyle">
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
        color: "gray",
        fontSize: "2rem",
        padding: "1rem 2rem",
        borderRadius: "1rem",
        background: "blue"
      }),
    },
  },
};
</script>

<style lang="scss" scoped>
</style>