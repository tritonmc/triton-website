# Migrating from Triton v2 to v3-beta.x

::: warning
Before proceeding, make sure to backup your `Triton` folder on all servers
in case something goes wrong during the migration!
:::

[[toc]]

## Changelog

-

## Updating config files

The config files have changed substantially.
I'd recommend updating them before proceeding with the migration guide.  
Below is a copy of the default config for both Spigot and BungeeCord,
which the changed highlighted.

::: details Spigot config.yml

<<< @/docs/migration/v3_b1_config.yml{64-69,71-87,193-195}

:::

::: details Bungee config.yml

<<< @/docs/migration/v3_b1_bungee_config.yml{61-66,68-81,140-142}

:::
