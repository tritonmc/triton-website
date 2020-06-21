<template>
  <ParentLayout />
</template>

<script>
import ParentLayout from '@parent-theme/layouts/404.vue';
import yuuConfig from '@theme/mixins/yuuConfig.js';
import darkThemeHandler from '@theme/mixins/darkThemeHandler.js';

export default {
  components: {
    ParentLayout,
  },
  mixins: [yuuConfig, darkThemeHandler],
};
</script>

<style src="../styles/variables.styl" lang="stylus"></style>
<style src="../styles/index.styl" lang="stylus"></style>
<style src="../styles/themes/dark.styl" lang="stylus"></style>
