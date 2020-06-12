# Migrating from Triton v2 to v3-beta.x

::: warning
Before proceeding, make sure to backup your `Triton` folder on all servers
in case something goes wrong during the migration!
:::

[[toc]]

## Changelog

- MySQL support for translations **(:collision: Breaking Change)**
- Better debugging tools
- Removed `universal` field for translations since it was redundant
- Add feature that prevents players from typing placeholders in the chat
  (enabled by default)
- `players.yml` has been renamed to `players.json` and it's now not used
  when using a non-local storage type.
- `cache.json` has changed syntax

## Downloading the new beta version

Follow the instructions in the [installation guide](../getting-started/installation.md).

## Updating config files

The config files have changed substantially.
I'd recommend updating them before proceeding with the migration guide.  
Below is a copy of the default config for both Spigot and BungeeCord,
with the changes highlighted.

::: details Spigot config.yml

<<< @/docs/migration/v3_b1_config.yml{64-69,71-87,193-195}

:::

::: details Bungee config.yml

<<< @/docs/migration/v3_b1_bungee_config.yml{61-66,68-81,140-142}

:::

### Storage options

This is the most important change that you must perform before proceeding.
Make sure to read the [initial configuration guide](../getting-started/initial-configuration.md#storage-type) if you're unsure how to configure it.

## Automatic Migration

Just like every major release of Triton until now, this version includes auto migration.  
Due to the lack of major changes in the file format, Triton might have a hard time identifying that there is a need for migration.

::: tip
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

::: danger
As I said, these commands are very destructive.  
Running `/triton database upload` will **delete ALL TRANSLATIONS** that are in the database already.
:::

### Editing translations without TWIN

If you're using a database, editing the translations directly might be cumbersome.  
Instead, you can use `/triton database download` to download the translations from the database
into the `translations` folder.

Then you can simply edit them as you'd like and upload with `/triton database upload`
as before.

::: danger
Just like the upload command, `/triton database download` can be very destructive.
When executed, all `.json` files in the `translations` folder are deleted and replaced
with the translations from the database.
:::

## After Migration :tada:

Congrats, you've made it!  
You should now be running Triton v3.0.0-beta.1!

If you've encountered any issue during the migration process,
please ask for help in our Discord server.

Below are some resources that might be useful:

- [Initial Configuration](../getting-started/initial-configuration.md)
- [Commands and Permissions](../concepts/commands-permissions.md)
- [Translating your first message](../guides/first-translation.md)
