export default {
  data() {
    return {
      yuu: {},
    };
  },

  mounted() {
    const { yuu = {} } = this.$site.themeConfig;

    this.yuu = {
      defaultDarkTheme: yuu.defaultDarkTheme || false,
      disableDarkTheme: yuu.disableDarkTheme || false,
      extraOptions: yuu.extraOptions || {},
    };
  },
};
