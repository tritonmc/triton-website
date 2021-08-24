# Velocity Proxy

[[toc]]

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

To fix this, download and install this additional plugin called [VelocityMysqlFix](https://forums.velocitypowered.com/t/velocitymysqlfix-bring-mysql-driver-to-velocity/863).
