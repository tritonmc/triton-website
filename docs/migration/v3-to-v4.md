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

- `messages.yml` and language display names now use MiniMessage syntax instead of legacy color codes **(:boom: Breaking Change)**;
- `multilanguageplugin.*` permissions are no longer checked and therefore have no effect.
  Please migrate to `triton.*` equivalents **(:boom: Breaking Change)**; and
- There is a new parser based on Adventure that is the default for new installations; see below for details.

Contrary to previous major Triton updates, this update **requires manual intervention**.

## Download the new version

Follow the instructions in the [installation guide](../getting-started/installation.md).

## Update `messages.yml` {#messages-yml-minimessage}

:::note
Keep in mind the MiniMessage changes below do **NOT**
affect your translations.
Legacy color codes are still the default for your translations
on TWIN and in the `translations` folder,
so no action is required for those.
:::

The `messages.yml` file has been updated to use [MiniMessage]
instead of legacy color codes.

If you have not changed any of these messages,
you can simply delete your `messages.yml`
and let Triton regenerate it with the new defaults.
Otherwise, you might need to perform the migration manually.
Alternatively, you can attempt to use [automated tools](https://mcitemlist.com/minimessage-converter/),
which may not be perfect.
The [default `messages.yml` can be found on GitHub][messages-yml-default]
as a reference.

Furthermore, the following messages have been renamed:

- `error.bungee-reload-invalid-mode` to `error.proxy-reload-invalid-mode`
- `success.bungee-reload` to `success.proxy-reload`
- `twin.failed-bungeecord` to `twin.failed-behind-proxy`

## Update language display names

Similarly to the previous section,
the display name of languages also only supports MiniMessage as of Triton v4.0.0.
As a result, `config.yml` needs to be updated respectively.

For example:

```diff
-    display-name: '&3English (UK)'
+    display-name: '<dark_aqua>English (UK)'
```

## Enable the legacy parser {#legacy-parser}

The new Adventure parser is enabled by default.
However, it is likely desirable to use the legacy parser instead,
to ensure full compatibility with existing translations.

To achieve this, change the value of the
[new `message-parser` option on config][config-parser]:

```yml
message-parser: "legacy"
```

## Remove deprecated permissions

If you are still using `multilanguageplugin.*` permissions,
you must switch to the equivalent `triton.*` permissions instead.

The [Commands and Permissions](../concepts/commands-permissions.md)
page details all the available permissions.

## After Migration :tada:

Congrats, you've made it!  
You should now be running Triton v4.0.0!

If you've encountered any issue during the migration process,
please ask for help in our Discord server.

Below are some resources that might be useful:

- [Initial Configuration](../getting-started/initial-configuration.md)
- [Commands and Permissions](../concepts/commands-permissions.md)
- [Translating your first message](../guides/first-translation.md)

[MiniMessage]: https://docs.papermc.io/adventure/minimessage/
[messages-yml-default]: https://github.com/tritonmc/Triton/blob/v4.0.0/core/src/main/resources/messages.yml
[config-parser]: https://github.com/tritonmc/Triton/blob/v4.0.0/triton-spigot/src/main/resources/config_spigot.yml#L141-L146
