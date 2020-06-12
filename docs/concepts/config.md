# Plugin Configuration

::: warning
This page has been migrated from Triton's old docs and isn't finished yet.
:::

This page is a guide on Triton's `config.yml` file.

[[toc]]

## Languages Section

### `flag`

Represents the flag to show up in the banner in the language selection menu.
Follow the [generating a flag guide](../guides/flags.md) if you don't know what to put here.

### `minecraft-code`

This is a list of the corresponding locales in Minecraft.
It is currently used to automatically set the player's language
when they join for the first time, if there is a corresponding language.
You can find the complete list of locales in the
[Minecraft Wiki](https://minecraft.gamepedia.com/Language).

### `display-name`

This is fairly obvious.
This is what will show up as the language name in chat and the selection GUI.
Feel free to use color codes and [Triton placeholders](./translations.md) here.

### `commands`

There are 4 types of commands you can execute: `PLAYER`, `SERVER`, `BUNGEE`, `BUNGEE_PLAYER`; with the last two being available on BungeeCord only.

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
This will be the default language of a player when they join the server for the first time.
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
