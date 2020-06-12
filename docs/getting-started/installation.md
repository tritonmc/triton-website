# Installation

Make sure you've [enrolled in the beta program](./beta-enrollment.md) before proceeding.

## Downloading the plugin and dependencies

To get started with the plugin, you first need to download the plugin.  
For beta versions, the plugin will be hosted on [Songoda](https://triton.rexcantor64.com/songoda).  
Otherwise, download the plugin from your marketplace of choice.

Additionally, you might need to download some dependencies if you don't have them already:

- [ProtocolLib 4.5.0+](https://www.spigotmc.org/resources/protocollib.1997/)
- [_(Optional)_ PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)

Once you've downloaded the plugin, unzip the file.

## Choosing the appropriate flavor

:::: tabs

::: tab Spigot
Place the appropriate flavor in the `./plugins` folder of your Spigot server.  
Even if using BungeeCord, you should still place the jar into all Spigot servers.

For Spigot 1.8 through 1.12, use `Triton-X-legacy.jar`.  
For Spigot 1.13, 1.14 and 1.15 use `Triton-X-1.13.jar`, `Triton-X-1.14.jar` and `Triton-X-1.15.jar` respectively.
:::

::: tab BungeeCord
Place any flavor in the `./plugins` folder of your BungeeCord server, all of them work properly on BungeeCord.
:::

::::

::: warning
Using any other server software than those listed above (e.g. Paper, Waterfall, etc) is not officially supported.
However, since a large number of users are using those, bug fixes will be provided, even though internal testing is done on vanilla Spigot/BungeeCord.
:::

## Generate default files

Finally, start all your servers and let Triton generate the default files.
Proceed to the [initial configuration](./initial-configuration.md) guide.
