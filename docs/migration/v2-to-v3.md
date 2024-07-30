---
description: "Detailed steps on upgrading from Triton v2 to Triton v3"
sidebar_position: 997
---

import CodeBlock from '@theme/CodeBlock';
import SpigotConfig from '!!raw-loader!./v3_config.yml';
import BungeeConfig from '!!raw-loader!./v3_bungee_config.yml';

# Migrating from Triton v2 to v3

:::warning
Before proceeding, make sure to backup your `Triton` folder on all servers
in case something goes wrong during the migration!
:::

## Changelog

Below are the changes that require your attention:

- MySQL support for translations **(:boom: Breaking Change)**
- Better debugging tools (`debug` has been replaced with `log-level`)
- Removed `universal` field for translations since it was redundant
- Add feature that prevents players from typing placeholders in the chat
  (enabled by default)
- `players.yml` has been renamed to `players.json` and it's now not used
  when using a non-local storage type
- `cache.json` has changed syntax
- `messages.yml` content has changed and it now has a blueish theme
- `/triton setlanguage` for others has changed format (arguments have swapped)
- Removed scoreboard translation
- Removed all `multilanguageplugin.*` permissions

All other changes in this version can be found on Spigot or Polymart.

## Downloading the new version

Follow the instructions in the [installation guide](../getting-started/installation.md).

## Updating config files

The config files have changed substantially.
I'd recommend updating them before proceeding with the migration guide.  
Below is a copy of the default config for both Spigot and BungeeCord,
with the changes highlighted.

<details>
<summary>Spigot config.yml</summary>

Alternatively, see the [diff on GitHub](https://github.com/tritonmc/Triton/commit/8c54291111a4693c07c8373f3945405c50c33fa2#diff-0f1be8eec416e71c28b41efb0544df26).

<CodeBlock language="yaml" title="spigot/plugins/Triton/config.yml" showLineNumbers>{SpigotConfig}</CodeBlock>

</details>

<details>
<summary>Bungee config.yml</summary>

Alternatively, see the [diff on GitHub](https://github.com/tritonmc/Triton/commit/8c54291111a4693c07c8373f3945405c50c33fa2#diff-c86926b4793226abff7207c78d20c992).

<CodeBlock language="yaml" title="bungee/plugins/Triton/config.yml" showLineNumbers>{BungeeConfig}</CodeBlock>

</details>

### Storage options

This is the most important change that you must perform before proceeding.
Make sure to read the [initial configuration guide](../getting-started/initial-configuration.md#storage-type) if you're unsure how to configure it.

The `database` section has been renamed to `storage`.
The guide linked above will help you go through the configuration.

## Automatic Migration

Just like every major release of Triton until now, this version includes auto migration.  
Due to the lack of major changes in the file format, Triton might have a hard time identifying that there is a need for migration.

:::tip
Triton starts the migration if it finds the `players.yml` file but it doesn't find the `players.json` file. This is important if you want to manually trigger the migration.  
It is **extremely important that you do not run the migration more than once**,
otherwise it might break your translations.
:::

This is what the auto migration does:

- Convert your `players.yml` to `players.json`
- Convert `cache.json` (if it exists) to the new format
- Replace all entries of `universal: true` in translations with `blacklist: true` and `servers: []`.

## Upload local translation to a database

If you're using a database (e.g. MySQL), you must learn two new commands:
`/triton database upload` and `/triton database download`.  
They are two very destructive commands, so make sure you're the
only one that has permissions (`triton.database`) to use them.

After starting your server and **making sure all servers share the same storage settings**,
you must run `/triton database upload` to copy all the translations from the `translations`
folder to the database.

:::danger
As I said, these commands are very destructive.  
Running `/triton database upload` will **delete ALL TRANSLATIONS** that are in the database already.
:::

### Editing translations without TWIN

If you're using a database, editing the translations directly might be cumbersome.  
Instead, you can use `/triton database download` to download the translations from the database
into the `translations` folder.

Then you can simply edit them as you'd like and upload with `/triton database upload`
as before.

:::danger
Just like the upload command, `/triton database download` can be very destructive.
When executed, all `.json` files in the `translations` folder are deleted and replaced
with the translations from the database.
:::

## Changes to `messages.yml`

The `messages.yml` file has updated translations and a new blueish color theme.
You can find the [diff on GitHub](https://github.com/tritonmc/Triton/commit/8c54291111a4693c07c8373f3945405c50c33fa2#diff-b7bfb7063d6b6ccbda02c1e078c91e72).

## Changes to `/triton setlanguage`

This command previously was used as `/triton setlanguage [player] <language>`.  
Now, as it should have been from the beginning, the new format is `/triton setlanguage <language> [player]`.

If you're using this command on menus or something similar, please swap the arguments.

## Removal of scoreboard translation

Scoreboard translation using Triton placeholders was deprecated since v2.5.1.  
It has now been removed from the plugin completely.

Reasons for removal include poor and laggy implementation and visual glitches.

As an alternative (and recommended), use [PlaceholderAPI](../concepts/placeholderapi.md) from now on.

## After Migration :tada:

Congrats, you've made it!  
You should now be running Triton v3.0.0!

If you've encountered any issue during the migration process,
please ask for help in our Discord server.

Below are some resources that might be useful:

- [Initial Configuration](../getting-started/initial-configuration.md)
- [Commands and Permissions](../concepts/commands-permissions.md)
- [Translating your first message](../guides/first-translation.md)
