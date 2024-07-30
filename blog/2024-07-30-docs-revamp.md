---
slug: docs-revamp
title: Documentation Revamp
authors: [diogotcorreia]
tags: [misc]
---

Welcome to the redesigned documentation and website for Triton!

Along with a fresh new coat of paint, this redesign brings a new blog section
to Triton's website, which will contain major release notes (e.g. for the upcoming v4 release),
development journals, and more.

With regards to the content itself, nothing has changed significantly.
There were, however, some corrections made to outdated content.

Since most URLs have changed from the previous website, redirects were put in place
to ensure old links keep working.

## Why now?

The previous website used [VuePress 1](https://v1.vuepress.vuejs.org/) which is
severely outdated and still requires Python 2 (which has been end of life since 2013).
This made it impractical to edit documentation, since it would require installing and
running unmaintained and insecure software.
While [VuePress 2](https://v2.vuepress.vuejs.org/) would fix most of these issues, at the
time of writing there is no stable release yet (currently at v2.0.0-rc.14).

For this reason, the website has been migrated to [Docusaurus](https://docusaurus.io/), a
React-based documentation framework built by Meta (previously Facebook).
Docusaurus has tons of features, and completely fulfills the website's needs while allowing
for future customization.
