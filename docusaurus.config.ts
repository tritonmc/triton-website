import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Triton Documentation',
  tagline: 'Translate Your Server - Minecraft Plugin',
  favicon: 'img/logo.png',

  url: 'https://triton.rexcantor64.com',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/tritonmc/triton-website/tree/master',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/tritonmc/triton-website/tree/master',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    image: 'img/banner.png',
    navbar: {
      title: 'Triton Documentation',
      logo: {
        alt: 'TritonMC Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://triton.rexcantor64.com/spigot',
          label: 'Spigot',
          position: 'right',
        },
        {
          href: 'https://triton.rexcantor64.com/polymart',
          label: 'Polymart',
          position: 'right',
        },
        {
          href: 'https://triton.rexcantor64.com/discord',
          label: 'Discord',
          position: 'right',
        },
        {
          href: 'https://github.com/tritonmc/Triton',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'search',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://triton.rexcantor64.com/discord',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/tritonmc/Triton',
            },
          ],
        },
        {
          title: 'Purchase',
          items: [
            {
              label: 'Spigot',
              href: 'https://triton.rexcantor64.com/spigot',
            },
            {
              label: 'Polymart',
              href: 'https://triton.rexcantor64.com/polymart',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'JavaDocs',
              href: 'https://triton.rexcantor64.com/javadocs',
            },
          ],
        },
      ],
      copyright: `Copyright © 2016-${new Date().getFullYear()} Diogo Correia.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.palenight,
      additionalLanguages: ['json']
    },
    algolia: {
      appId: '05H2PEO6IV',
      apiKey: '546bcea7b4670b37f2b7d4dd0b47d0cb',
      indexName: 'tritonmc_triton',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
