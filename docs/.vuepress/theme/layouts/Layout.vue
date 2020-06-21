<template>
  <ParentLayout />
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue';
import yuuConfig from '@theme/mixins/yuuConfig.js';

export default {
  components: {
    ParentLayout,
  },
  mixins: [yuuConfig],
};
</script>

<style src="../styles/variables.styl" lang="stylus"></style>
<style src="../styles/index.styl" lang="stylus"></style>
<style src="../styles/themes/dark.styl" lang="stylus"></style>
