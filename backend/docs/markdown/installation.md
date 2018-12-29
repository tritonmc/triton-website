# Installation

The process of installing the plugin is fairly simple:

1. Download and install [ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/).
2. Download the latest version from [Spigot](/spigot).
3. Place the `.jar` in your plugins folder.
4. Start the server so it generates the default configuration.
5. Stop the server.
6. Configure the plugin accordingly.
7. Start the server.

## Configuring the plugin

The default config files can be found on GitHub: [Spigot side config](/github_config) | [BungeeCord side config](/github_config_bungee)

The config has comments all over the place, so it should be fairly simple to understand.  
Nonetheless, here is a brief explanation on how to configure the main features of the plugin:

### Adding/Removing languages

<div class="warning">If you're using BungeeCord, you only need to do this in your BungeeCord Triton config.</div>

Open your `config.yml` and locate the `languages` section.  
To remove a language, just delete it from the file.  
To add a language, you need to add the following to your config:

Example of a language:

```yaml
pt:
  flag: bacLlt
  minecraft-code:
    - pt_PT
    - pt_BR
  display-name: "&aPortuguese"
  commands:
    - "SERVER:say %player% (%uuid%) has just changed their language!"
```

In this example, `pt` represents the Language ID (LID for short). This LID is used to store the player's language between shutdowns and across servers, as well as an argument to in-game commands. Changing the LID after someone has selected that language will result in the player's language being set to default.

#### flag

The flag parameter is probably the most difficult one to understand. For that reason, here are step-by-step instructions on how to do it:

1. Go to [Miners Need Cool Shoes' Banner Generator](https://www.needcoolshoes.com/banner).
   ![Step 1](/documentation/images/installation-flags1.png)
2. Draw the flag as you want. If you're not sure how you can make your country flag, just search around the internet and you'll probably find someone that did it already.
3. Get the flag code. It is appended to the URL when you change the flag. In this case, the flag code is `eapwplpnpmbzbj`
   ![Step 3](/documentation/images/installation-flags2.png)

#### minecraft-code

This is a list of the corresponding locales in Minecraft. It is currently not used for anything on the plugin but might be used in the future to automatically set the player's language when they join. You can find the complete list of locales in the [Minecraft Wiki](https://minecraft.gamepedia.com/Language).

#### display-name

This is fairly obvious. This is what will show up as the language name in chat and the selection GUI. Feel free to use color codes and [Triton placeholders](/docs/placeholders) here.

#### commands

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

The commands do NOT need a slash before them.

##### Examples

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

<div class="warning">(BungeeCord only) If a command you're using contains a <code>:</code> and you want it to be universal, do something like this:
<code>PLAYER::give @a minecraft:dirt</code></div>

### main-language

The LID of the main language.  
This will be the default language of a player when they join the server for the first time. This will also be used to get a message if you don't have it translated in the player's language yet.

### twin-token

If you're using BungeeCord, you only need to place your TWIN token in the BungeeCord Triton's config.  
To learn more about TWIN and how you can get the token, visit the [TWIN documentation page](/docs/twin).

## Using BungeeCord

To use BungeeCord (or a fork), you must enable `bungeecord` on config. Furthermore, make sure all your servers (including BungeeCord) are using the same version of the plugin, otherwise, some unexpected problems may show up.  
While using BungeeCord, your `languages.json` file is ignored in all servers except the proxy. The `languages` section in the config is also ignored.
