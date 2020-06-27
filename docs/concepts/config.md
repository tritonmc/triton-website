# Plugin Configuration

::: warning
This page has been migrated from Triton's old docs and isn't finished yet.
:::

This page is a guide on Triton's `config.yml` file.

[[toc]]

## Introduction

This file is where you can configure how Triton will behave in that server.  
Triton's default config file has comments all over the place, which do a great
job at explaining what everything does. However, this page will explain some settings
in more detail.

You can check out the default Triton's [Spigot](https://triton.rexcantor64.com/github_config)
and [BungeeCord](https://triton.rexcantor64.com/github_config_bungee) `config.yml`
at any time on GitHub.

## Languages Section

This section allows you to add/remove languages from Triton.  
And you probably know by now, Triton is fully customizable, which means you can
create as many languages as you'd like!

Each language must have a language ID (the key of the YML section),
a `flag` and a `display-name`.  
Both `commands` and `minecraft-code` are optional.

::: details Example Language

```yaml
languages:
  en_GB:
    flag: eapwplpnpmbzbj
    display-name: '&aEnglish (UK)'
```

:::

::: warning
When using BungeeCord with a non-local storage option (read below),
you'll need to make sure this section is _exactly_ the same across all servers.  
The only exception to this rule is the `commands` field that is ignored on Spigot
servers when using BungeeCord, regardless of storage options.
:::

### `flag`

Represents the flag to show up in the banner in the language selection menu.
Follow the [generating a flag guide](../guides/flags.md) if you don't know what to put here.

### `minecraft-code`

This is a list of the corresponding locales in Minecraft.  
It is currently used to automatically set the player's language
when they join for the first time, if there is a corresponding locale.  
If there is not a corresponding locale, it falls back to the main language.  
You can find the complete list of locales in the
[Minecraft Wiki](https://minecraft.gamepedia.com/Language).

All the values in the list are **case-insensitive**

::: details Usage example

```yaml
languages:
  en_GB:
    flag: eapwplpnpmbzbj
    display-name: '&aEnglish (UK)'
    minecraft-code: [en_GB, en_US, en_AU, en_CA, en_NZ, en_PT, en_UD]
```

:::

### `display-name`

This is fairly obvious.  
This is what will show up as the language name in chat and the selection GUI.
Feel free to use color codes and [Triton placeholders](./placeholders.md) here.

### `commands`

There are 4 types of commands you can execute: `PLAYER`, `SERVER`, `BUNGEE`, `BUNGEE_PLAYER`; with the last two being _(obviously)_ available on BungeeCord only.

- `PLAYER`: Runs the command as if the player typed it in the chat.
- `SERVER`: Runs the command from console.
- `BUNGEE`: Runs the command from the BungeeCord console.
- `BUNGEE_PLAYER`: Runs the command as if the player typed it in the chat, but on the BungeeCord side.

There are 2 available variables for use: `%player%` and `%uuid%`.

- `%player%`: Player's name
- `%uuid`: Player's UUID (with dashes)

If you're using BungeeCord, you can also limit commands to certain servers by doing something like:
`BUNGEE:lobby,lobby-2,lobby-3:alert This will only run on 3 servers!`

The commands must NOT have a slash (`/`) before them.

#### Examples

Run command as a player:

```
PLAYER:say I'm using English now!
```

Run command as console, using 2 variables:

```
SERVER:say %player% (%uuid%) has just changed their language!
```

Run command on BungeeCord console, but only if the player is on the `lobby` server:

```
BUNGEE:lobby:alert This will only run on lobby!
```

::: tip
_(BungeeCord only)_
If a command you're using contains a `:` and you want it to be universal, do something like this:
`PLAYER::give @a minecraft:dirt`
:::

### `main-language`

The Language ID (the key of the section) of the main language.  
This will be the default language of a player when they join the server for the first time,
if no corresponding locale is found.
This will also be used to get a message
if you don't have it translated in the player's language yet.

## General Settings

### `twin-token`

If you're using BungeeCord, you only need to place your TWIN token in the BungeeCord Triton's config.  
To learn more about TWIN and how you can get the token, visit the [TWIN documentation page](./twin.md).

## Using BungeeCord

To use BungeeCord (or a fork), you must enable `bungeecord` on config. Furthermore, make sure all your servers (including BungeeCord) are using the same version of the plugin, otherwise you may encounter unexpected issues.  
While using BungeeCord, your `translations` folder is ignored in all servers except the proxy. The `languages` section in the config is also ignored if using local storage.

Make sure the `storage` settings match on all servers.
