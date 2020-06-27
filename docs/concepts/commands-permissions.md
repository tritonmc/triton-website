# Commands and Permissions

Here is a brief summary of the plugin's commands and permissions:

| Command                                            | Permissions                                   |
| -------------------------------------------------- | --------------------------------------------- |
| /triton, /triton openselector                      | triton.openselector                           |
| /triton help                                       | triton.help                                   |
| /triton getflag \<language>                        | triton.getflag                                |
| /triton reload [all/server/bungee]                 | triton.reload                                 |
| /triton setlanguage [player] \<language>           | triton.setlanguage, triton.setlanguage.others |
| /triton sign \<set/remove> \<group key (set only)> | triton.sign                                   |
| /twin database \<upload/download>                  | triton.database                               |
| /twin                                              | twin.upload                                   |
| /twin \<code>                                      | twin.download                                 |

## Commands

All commands starting with `/triton` can be also typed as `/lang` and `/language`.
Additionally, in order to keep backwards support with v0, you can also use
the following commands: `/mlp`, `/ml`, `/multilanguage`, `/multilanguageplugin`.

### /triton, /triton openselector

_(only available-ingame)_
Permission: `triton.openselector`

Opens up a GUI that allows you to select a language.

### /triton help

Permission: `triton.help`

Shows a help menu with all the available commands.

### /triton getflag \<language>

_(only available in-game)_  
Permission: `triton.getflag`

Gives the player the flag of that language.

#### Arguments

`language`: The Language ID to get the flag from.

### /triton reload [mode]

Permission: `triton.reload`

Reloads the plugin.

#### Arguments

`mode` _(bungee in-game only / optional)_: One of the following options:

- `all`/`a`: reloads both Spigot and Bungee
- `bungee`/`b` _(default)_: reloads only Bungee
- `server`/`s`: reloads only Spigot

When using this command through console, it can only reload the current server/proxy.

### /triton setlanguage [player] \<language>

_(only available in-game when used for self)_  
Permission: `triton.setlanguage`

Sets the language of self or another player.

#### Arguments

`player` _(optional)_: Specify the target player. Requires the `triton.setlanguage.others` permission.  
`language`: The ID of the target language.

### /triton sign \<mode> [group id]

_(only available in-game)_  
Permission: `triton.sign`

Add/remove a sign from a sign group. The target sign is the sign the player is looking at.

#### Arguments

`mode`: The action to perform:

- `set`: Set the group of the target sign.
- `remove` Remove the sign from its current group (if any).

`group id` _(only if `mode` is `set`)_: The sign group to assign the sign to.

### /triton database \<mode>

_(only available in BungeeCord)_  
Permission: `triton.database`

If using non-local storage, this command downloads and uploads from the database
to the `translation` folder for easier editing and migration purposes.

#### Arguments

`mode`: One of the following options:

- `upload`/`u`: overwrite all the translations in the database with the ones in the `translations` folder
- `download`/`d`: overwrite all the translation in the `translations` folder with the ones in the database

### /twin

Permission: `twin.upload`

Uploads the current `translations` folder to TWIN.

### /twin \<code>

Permission: `twin.download`

Downloads the `translations` folder from TWIN after editing.

## Permissions

All permissions starting with `triton.` can also be expressed as `multilanguageplugin.` for compatibility reasons. However, it is recommended to use `triton.` from now on.

### triton.help

Allows access to `/triton help`.  
Default: everyone

### triton.openselector

Allows access to `/triton` and `/triton openselector`.  
Default: everyone

### triton.getflag

Allows access to `/triton getflag <language>`.  
Default: op

### triton.reload

Allows access to `/triton reload [all/server/bungee]`.  
Default: op

### triton.setlanguage

Allows access to `/triton setlanguage <language>`.  
Default: everyone

### triton.setlanguage.others

Allows access to `/triton setlanguage [player] <language>`.  
Default: op

### triton.sign

Allows access to `/triton sign <set/remove> <group key (set only)>`.  
Default: op

### triton.database

Allows access to `/triton database <upload/download>`.  
Default: op

### twin.upload

Allows access to `/twin`.  
Default: op

### twin.download

Allows access to `/twin <code>`.  
Default: op
