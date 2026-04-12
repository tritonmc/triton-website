---
description: "Use PacketEvents for intercepting packets, improving performance and reliability"
sidebar_position: 2
---

# PacketEvents

:::danger[Experimental Feature Ahead]
The feature below is experimental and might not behave as expected.
Enable at your own risk!
:::

Starting with **Triton 4.0.0** you can enable an option on config to try out
intercepting packets with PacketEvents instead.
This might **improve server performance**,
but some packets might not be supported yet.
You can follow progress in the [respective GitHub issue](https://github.com/tritonmc/Triton/issues/503).

## Enabling

To enable this feature you must be using **Triton 4.0.0** or above.

Setting the following option to `true` on Triton's `config.yml`
will enable the feature:

```yml
# EXPERIMENTAL: Use PacketEvents for intercepting packets.
# Some packets that have not been migrated might still use the legacy
# method of interception.
# When stable, this will be enabled by default.
# Changing this REQUIRES a server restart.
experimental-use-packetevents: false
```

After changing the config, **restart** your server.
A simple reload of the plugin won't work.

Note that you do **NOT** need to install PacketEvents separately,
as Triton bundles its own version.
