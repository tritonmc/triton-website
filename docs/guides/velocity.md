---
description: "Learn how to use Triton on the Velocity Proxy"
sidebar_position: 4
---

# Velocity Proxy

:::note[Requirements]

Requires Triton v3.3.0 or newer.

:::

Setup with the Velocity Proxy is very similar with BungeeCord.  
Follow the instructions for BungeeCord available in this documentation after
reading the limitations below.

## Limitations

Since v3.3.0 it is possible to use Triton on [Velocity](https://velocitypowered.com/).

However, there are some limitations to this.
Triton on Velocity will only act as a bridge between servers,
meaning it won't translate any messages from other Velocity plugins.

Full Velocity support might come at a later date.

## Using MySQL with Velocity

By default, Velocity does not include any database drivers.
For this reason, using Triton's MySQL feature results in an error.

It is possible to fix this error by installing a plugin that includes a MySQL driver.

## Velocity on Triton v4

If you are using Velocity, it is **recommended** that you use Triton v4 instead of v3.

:::warning[Unstable Software]

Triton v4 is still in development and might have less features than the current stable version.
Get informed with the developer (e.g., through the Discord server) before trying it out.

:::

Triton v4 brings many improvements to Velocity support in Triton, overcoming the
aforementioned limitations.
In Triton v4, it is possible to translate Velocity plugins and use MySQL, along with
many other improvements.

