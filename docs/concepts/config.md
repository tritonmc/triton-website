# Plugin Configuration

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

::: warning
The commands **must not** have a preceding slash (`/`).
:::

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

### `run-language-commands-on-join`

_Default: false_  
This when is pretty self explanatory.
When enabled, the commands under the language commands are run when the player joins
the server as well, instead of only on language change.

### `force-client-locale-on-join`

_Default: false_  
By default, Triton attempts to identify the locale used by the client and find a
similar locale in the available languages when the player joins the server for the first time.  
When this is enabled, Triton does this every time a player joins the server,
effectively ignoring the player's preferences between rejoins.

It is **highly recommended** to leave this disabled for user experience purposes.

### `config-auto-refresh-interval`

_Default: `-1` (disabled)_  
When this option is enabled, Triton reloads automatically (in this server) every X seconds.
It is recommended to use a relatively high value here to avoid lag.  
With Triton v3's database storage for translations, I can't see where this could be used,
but it's still an option for the sake of flexibility.

### `log-level`

_Default: `0`_  
This option changes how verbose Triton's log messages will be.

Available log levels:

- **0:** Only errors and startup messages are logged to the console.
- **1:** Also outputs details about config initialization and other relevant information (translation count, startup time, stack traces etc).
- **2:** Also outputs information related to reading/writing files, as well as communication with BungeeCord and a database.
- **3:** Logs EVERYTHING. Only recommended for debugging purposes. When enabled, every translation job will be logged to the console.

### `storage`

This section defines where Triton will save/load translation and language preferences.
At the moment, languages aren't synced automatically yet when a non-local storage option
is in use.

A more detailed guide on this section can be found in the
[initial configuration guide](../getting-started/initial-configuration.md#storage-type).

## Using BungeeCord

To use BungeeCord (or a fork), you must enable `bungeecord` on config. Furthermore, make sure all your servers (including BungeeCord) are using the same version of the plugin, otherwise you may encounter unexpected issues.  
While using BungeeCord, your `translations` folder is ignored in all servers except the proxy. The `languages` section in the config is also ignored if using local storage.

Make sure the `storage` settings match on all servers.

## Language Creation

This section only applies to the current server/proxy, which means you can customize it
to fit the needs of a specific situation.

If you remember correctly, [Triton's placeholders](./placeholders.md) are composed of three
tags: `lang`, `args` and `arg`.
In this section, you can change these per context type, giving you huge amounts of flexibility!
You can also enable/disable certain translation contexts if you aren't using them or they're
causing issues.  
Some contexts also have more options, so read the YML comments to get to know them.

### `disabled-line`

This feature was requested by a user and it's extremely useful in certain situations.  
Using Triton's ability to intercept every packet, you can block messages with being sent
by using this.

For example, if you set `disabled-line: 'disabled.line'`, any chat message that **contains**
`[lang]disabled.line[/lang]` won't be sent at all.  
Depending on the context, this placeholder behaves differently:

- **Chat:** the message isn't sent and there isn't any visual
  indication of that message on the client. It behaves as if that message never existed.
- **Actionbar:** same as chat, with the pro that it doesn't
  even hide the current actionbar if there is one.
- **Items titles:** the client will see the default item material name
  (in their client locale) instead of the custom display name (e.g. `Block of Diamond`).
- **Item lores:** the line containing the disabled line placeholder will be removed from the lore.
- **Books:** the page containing the placeholder is deleted.
- **Titles and subtitles:** If there is a disabled line placeholder in the title,
  neither the title nor the subtitle will be sent.
  If there is a disabled line placeholder in the subtitle, only the subtitle won't be sent.
  Like actionbars, it won't hide the current title/subtitle if there is one.
- **Tab header/footer:** The header/footer will be removed.
- **Bossbars:** The text of the bossbar will be blank.
- **GUI titles:** The title will be blank.
- **Entities:** Their display name will be hidden.
- **Custom TABs:** The display name of the entity will be swapped for the real entity name.
- **Kick:** The kick message will be blank.

### `terminal`

_Default: false_  
When enabled, placeholders that appear on console with chat's syntax will
be translated to the default language.

### `prevent-placeholders-in-chat`

_Default: true_
When enabled, if a player types a placeholder in the chat, it will be ignored by Triton.
Otherwise, the placeholder will be translated like normal.  
Keep in mind that placeholders outside the player's message (e.g. in the prefix), will
still be translated when this is enabled.
