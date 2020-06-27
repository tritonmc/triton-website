<template>
  <div v-if="showSettings" class="user-settings">
    <a class="settings-button" href="#" @click.prevent="onToggleClick">
      <LightbulbIcon v-if="darkTheme" class="settings-icon" />
      <MoonIcon v-else class="settings-icon" />
    </a>
  </div>
</template>

<script>
import MoonIcon from '@theme/components/settings/MoonIcon.vue';
import LightbulbIcon from '@theme/components/settings/LightbulbIcon.vue';
import yuuConfig from '@theme/mixins/yuuConfig.js';
import darkThemeHandler from '@theme/mixins/darkThemeHandler.js';

export default {
  name: 'UserSettings',
  components: {
    MoonIcon,
    LightbulbIcon,
  },
  mixins: [yuuConfig, darkThemeHandler],
  data() {
    return {
      showMenu: false,
    };
  },
  computed: {
    showSettings() {
      const { yuu } = this;
      return yuu.hasThemes || yuu.disableDarkTheme !== true || yuu.disableThemeIgnore !== true;
    },
  },
  methods: {
    hideMenu() {
      this.showMenu = false;
    },
  },
};
</script>

<style lang="stylus">
@import '../../styles/variables.styl';

.user-settings {
  position: relative;
  margin-right: 1em;

  .settings-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    .settings-icon {
      width: 18px;
    }
  }
}

@media (max-width: $MQMobile) {
  .user-settings {
    margin-right: 0;
  }
}
</style>
