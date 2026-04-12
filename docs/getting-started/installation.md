---
description: Download and install the plugin, along with its dependencies
sidebar_position: 1
---

# Installation

## Downloading the plugin and dependencies

To get started, you first need to download the plugin.  
Triton is available to download from
[SpigotMC](https://triton.rexcantor64.com/spigot) or
[Voxel Shop (formerly Polymart)](https://triton.rexcantor64.com/polymart).

Additionally, you might need to download some dependencies if you don't have them already:

- [ProtocolLib 5.4.0+](https://www.spigotmc.org/resources/protocollib.1997/)
- [_(Optional)_ PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)

Once you have downloaded the plugin,
place the `.jar` in the `plugins` folder of all your servers (Spigot/Paper, BungeeCord, Velocity, etc).

:::warning
Triton is internally tested on the latest versions of Paper, BungeeCord, and Velocity.
If you are using older versions, or a fork, you might encounter bugs, which you are encouraged to report.
:::

## Generate default files

Finally, start all your servers and let Triton generate the default files.
Proceed to the [initial configuration](./initial-configuration.md) guide.

## Installation without internet

:::note
Most users will never need to follow the steps below.
:::

Depending on your server version and platform,
Triton might need to download additional dependencies during its first start.
If you are installing Triton into a server
that does not have an active internet connection,
or if the distribution server is offline,
this step might fail.

For these cases,
a zip file with all the necessary dependencies is provided for every release,
and can be downloaded from the [GitHub releases page][gh-releases].

[gh-releases]: https://triton.rexcantor64.com/github_releases
