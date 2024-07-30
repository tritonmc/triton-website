---
description: "Run the ProtocolLib listener on a separate thread, improving performance"
sidebar_position: 1
---

# Async ProtocolLib

:::danger[Experimental Feature Ahead]
The feature below is experimental and might not behave as expected.
Enable at your own risk!
:::

Up until Triton 3.6.0 almost all packets were intercepted on the main thread.  
Starting with **Triton 3.7.0** you can enable an option on config to try out
intercepting ProtocolLib packets asynchronously.
This will **significantly improve server performance**, but it might present some
unwanted side effects (see [known issues](#known-issues) below).

## Enabling

To enable this feature you must be using **Triton 3.7.0** or above.

Setting the following option to `true` on Triton's `config.yml` on a Spigot server
will enable the feature:

```yml
# EXPERIMENTAL: Intercept and parse ProtocolLib packets asynchronously.
# This might cause incompatibilities with other plugins.
# When stable, this will be enabled by default.
# Changing this REQUIRES a server restart.
experimental-async-protocol-lib: true
```

After changing the config, **restart** your server.
A simple reload of the plugin won't work.

## Known Issues

At the moment, the following issues are present when using this feature.

- Chat does not get translated when using other plugins interacting with ProtocolLib (i.e. [InteractiveChat](https://www.spigotmc.org/resources/interactivechat-show-items-inventory-in-chat-custom-chat-keywords-bungee-velocity-support.75870/))
- If advancement translation is enabled, the player receives the pop-up saying they got all achievents everytime they change language.
  Sometimes there is even an error on terminal related to this.
- Some packets are passed through Triton's listener twice for some reason. This breaks caching and
  might cause text (e.g. on player list header/footer) to not change when the player changes language.
- Sometimes a one time error shows up on console related to initializing Entity related fields.
  This is an issue with ProtocolLib that isn't easily solvable on Triton.
