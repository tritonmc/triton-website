---
description: "Detailed steps on upgrading from Triton v3 to Triton v4"
sidebar_position: 996
---

# Migrating from Triton v3 to v4

:::warning
Before proceeding, make sure to backup your `Triton` folder on all servers
in case something goes wrong during the migration!
If you are using MySQL, it is recommended to backup the database as well.
:::

## Changelog

Below are the highlights of this update that might require your attention:

- `messages.yml` now use MiniMessage syntax instead of legacy color codes **(:boom: Breaking Change)**.
- `multilanguageplugin.*` permissions are no longer checked and therefore have no effect;
  please migrate to `triton.*` equivalents **(:boom: Breaking Change)**.
- There is a new parser based on Adventure that is the default for new installations; see below for details.
- `[args]` is no longer required on placeholders; only `[lang]` and `[arg]` need to be used now.

A full changelog can be found on GitHub, Spigot and Polymart. // TODO link

## Downloading the new version

Follow the instructions in the [installation guide](../getting-started/installation.md).

## Changes to `messages.yml`

The `messages.yml` file has been updated to use MiniMessage instead of legacy color codes.
You can find the [new version on GitHub](https://github.com/tritonmc/Triton/). // TODO

## Removal of `[args]` (optional)

// TODO

## Migrating to the new parser (optional)

// TODO

- no patterns
- no papi in translations
- minimessage `<triton>`

## After Migration :tada:

Congrats, you've made it!  
You should now be running Triton v4.0.0!

If you've encountered any issue during the migration process,
please ask for help in our Discord server.

Below are some resources that might be useful:

- [Initial Configuration](../getting-started/initial-configuration.md)
- [Commands and Permissions](../concepts/commands-permissions.md)
- [Translating your first message](../guides/first-translation.md)
