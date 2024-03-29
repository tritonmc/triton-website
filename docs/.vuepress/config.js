module.exports = {
  title: 'Triton Documentation',
  description: 'Translate Your Server - Spigot Plugin',
  dest: './public',
  plugins: [
    '@vuepress/medium-zoom',
    'vuepress-plugin-element-tabs',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
  ],
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://cdn.rexcantor64.com/triton/assets/logo.png',
      },
    ],

    [
      'meta',
      {
        property: 'og:title',
        content: 'Triton Documentation',
      },
    ],
    [
      'meta',
      {
        property: 'og:type',
        content: 'article',
      },
    ],
    [
      'meta',
      {
        property: 'og:url',
        content: 'https://triton.rexcantor64.com/',
      },
    ],
    [
      'meta',
      {
        property: 'og:description',
        content: 'Translate Your Server - Spigot Plugin',
      },
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://cdn.rexcantor64.com/triton/assets/banner.png',
      },
    ],
    [
      'meta',
      {
        property: 'og:article:author',
        content: 'diogotc2002',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:url',
        content: 'https://triton.rexcantor64.com/',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:site',
        content: '@diogotc2002',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:title',
        content: 'Triton Documentation',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:description',
        content: 'Translate Your Server - Spigot Plugin',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:image',
        content: 'https://cdn.rexcantor64.com/triton/assets/banner.png',
      },
    ],
    ['meta', { name: 'theme-color', content: '#008ff8' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    [
      'meta',
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
    ],
  ],
  themeConfig: {
    algolia: {
      appId: '05H2PEO6IV',
      apiKey: '546bcea7b4670b37f2b7d4dd0b47d0cb',
      indexName: 'tritonmc_triton',
    },
    yuu: {
      defaultDarkTheme: true,
      disableThemeIgnore: true,
    },
    logo: 'https://cdn.rexcantor64.com/triton/assets/logo.png',
    nav: [
      {
        text: 'Spigot',
        link: 'https://triton.rexcantor64.com/spigot',
      },
      {
        text: 'Polymart',
        link: 'https://triton.rexcantor64.com/polymart',
      },
      {
        text: 'Discord',
        link: 'https://triton.rexcantor64.com/discord',
      },
    ],
    repo: 'tritonmc/triton-website',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Improve this page',
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    serviceWorker: true,
    sidebarDepth: 1,
    sidebar: [
      {
        collapsable: false,
        title: '🚀 Getting Started',
        children: [
          '/getting-started/installation',
          '/getting-started/initial-configuration',
          '/faq/',
        ],
      },
      {
        collapsable: true,
        title: '💡 Concepts',
        children: [
          '/concepts/config',
          '/concepts/storage',
          '/concepts/commands-permissions',
          '/concepts/translations',
          '/concepts/placeholders',
          '/concepts/twin',
          '/concepts/patterns',
          '/concepts/placeholderapi',
          '/concepts/dynamic-signs',
        ],
      },
      {
        collapsable: true,
        title: '📚 Guides',
        children: [
          '/guides/first-translation',
          '/guides/bulk-translate',
          '/guides/flags',
          '/guides/velocity',
        ],
      },
      {
        collapsable: true,
        title: '🧪 Experimental Features',
        children: ['/experimental-features/async-protocollib'],
      },
      {
        collapsable: true,
        title: '🔌 Programatic API',
        children: ['/programatic-api/getting-started'],
      },
      {
        collapsable: true,
        title: '📦 Migration Guides',
        children: ['/migration/v2-to-v3', '/migration/v1-to-v2', '/migration/v0-to-v1'],
      },
    ],
  },
};
