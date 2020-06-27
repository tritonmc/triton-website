export default {
  data() {
    return {
      darkTheme: false,
    };
  },

  mounted() {
    if (this.yuu.disableDarkTheme !== true) {
      if (this.yuu.defaultDarkTheme === true && !localStorage.getItem('dark-theme')) {
        const { matches } = window.matchMedia('(prefers-color-scheme: dark)');
        localStorage.setItem('dark-theme', matches);
      }

      this.darkTheme = localStorage.getItem('dark-theme') === 'true';
      this.toggleDarkTheme();
    }
  },

  methods: {
    onToggleClick() {
      this.darkTheme = !this.darkTheme;
      this.toggleDarkTheme();
    },

    toggleDarkTheme() {
      if (this.darkTheme) {
        document.body.classList.add('yuu-theme-dark');
        return localStorage.setItem('dark-theme', true);
      }

      document.body.classList.remove('yuu-theme-dark');
      localStorage.setItem('dark-theme', false);
    },
  },
};
