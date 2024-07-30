---
description: "Detailed steps on upgrading from Triton v0 to Triton v1"
sidebar_position: 999
---

# Migrating from Triton v0 to v1

:::warning
**This guide is only intended to upgrade from v0 to v1. If you want to migrate from v0 to another version, you need to fully migrate to v1 beforehand.**
:::

This guide shows how to migrate all your data from Triton v0 (MultiLanguagePlugin).  
Migrating from v0 is completely free.

:::warning
**IT IS HIGHLY RECOMMENDED TO BACKUP AT LEAST YOUR** `MultiLanguagePlugin` **FOLDER. PLEASE BACKUP
THE ENTIRE SERVER(S) IF POSSIBLE**
:::

## Major changes

Before proceeding, please take a look at what changed in Triton v1:

- The `languages` folder has been replaced by a single file: `languages.json`. This is probably the biggest change in the configuration and might require some tweaking, especially if you're using BungeeCord (or a fork).
- The config file (`config.yml`) has been modified and thus requires reconfiguration.
- SQL support has been removed since it's no longer needed. Your player's language preferences will reset if you were using SQL.
- [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/) is now a dependency. You must install it on all your Spigot servers. Make sure you have the latest version.

## Migrating the language files

Once you replace your old `.jar` with the new one, start the server.  
A new folder called `Triton` will be created and all your language files have been migrated automatically.

If you're **NOT** using BungeeCord (or a fork) this is all you need to do.

### Using BungeeCord

If you're using BungeeCord, the process requires a bit of manual work.  
There are two options:

#### Using TWIN (Triton Web Interface)

1. Visit [TWIN's Migration page](https://twin.rexcantor64.com/migrate).
2. Page every Spigot server's `languages.json` file along with the server name **as it is on your BungeeCord config**.
3. Click `GET RESULT` and paste the contents in your BungeeCord's Triton `languages.json` file.

#### Manually

1. Install the plugin on BungeeCord and let it create the `Triton` folder.
2. Open the generated `languages.json` file and put the merged contents of all the `languages.json` files from the other servers.

That should be it!  
Before restarting your server, please migrate the config files:

## Migrating the config file

Migrating the config file should be easy. You can find the latest version of the default config here: [Spigot](https://github.com/tritonmc/Triton/blob/3f91979f8a223ce778e4af7fb659a44f909fe9a0/config.yml) | [BungeeCord](https://github.com/tritonmc/Triton/blob/3f91979f8a223ce778e4af7fb659a44f909fe9a0/bungee_config.yml)

If you're using BungeeCord, you don't need to configure the `languages` section in the Spigot servers and please enable `bungeecord: true`.  
Simply do a side-by-side comparison on your old config to know what you should change.

## Migrating the API

If you were using the API, you'll be happy to know that v1 has backwards compatibility.  
That means you'll probably not need to do anything!

However, some features of the API were removed since they've been changed in v1. If you use any of the following methods/classes, please switch to the new API:

- `Lang#getMeta()`
- `Lang#getStack()`
- `Lang#getMap()`
- `Banner` (the entire class)
- `BungeeMLP#reloadConfigValues()`

Using these in Triton v1 will throw an error on console.

You can get started with the API on our [GitHub](https://triton.rexcantor64.com/api).

## After Migrating

Congratulations! You've made it!

Here's what to do next:

- Learn more about [TWIN](../concepts/twin.md)
- Learn more about the new [Commands and Permissions](../concepts/commands-permissions.md)
