---
slug: triton-v4-released
title: Triton v4 has been released!
authors: [diogotcorreia]
tags: [release-notes]
---

Welcome to the release notes for Triton v4!

In this post you will find all the new features and improvements
of the highly anticipated v4 version of Triton.

<!-- truncate -->

[Migration steps are available in the documentation](/docs/migration/v3-to-v4),
and everyone is encouraged to read them,
even if you have been using the Triton v4 beta already,
given there are last-minute breaking changes.

## Preface

As some of you might know,
Triton v4 has been in the works [since August 2022][first-v4-commit],
being developed alongside Triton v3.
Now, 200+ commits later,
it is finally ready to be released as the stable version.

I would like to thank all the people that have already been running Triton v4
and reporting bugs.
Currently, around 33% of all Spigot/Paper servers running Triton are running
Triton v4.[^triton-v4-stats]

I also want to note that Triton v4 has some missing features compared to Triton v3.
However, maintaining two versions of Triton concurrently has been very challenging,
and the current feature set of Triton v4 should be sufficient for most users.
If you are using a feature that no longer works on Triton v4, please reach out.
More information can be found in the [missing features section](#missing-features) below.

## Breaking changes

As with every major version, Triton v4 contains a few breaking changes.

### Java version requirements

Up until now, Triton has required Java 8 or a later version.
However, Triton v4 now requires at least **Java 17**.
This should not be a problem for the majority of users,
as recent versions of Minecraft have required Java 21
for a while now.

Note that this does not mean a reduction in supported Minecraft versions.
If your Minecraft 1.8.8 server is running on Java 17,
that is still supported by Triton v4.

### MiniMessage in Triton messages

The `messages.yml` file is now configured using [MiniMessage] instead of
legacy color codes.
Furthermore, the display name of the languages on `config.yml` must also use MiniMessage.

See the [respective section in the migration guide](/docs/migration/v3-to-v4#messages-yml-minimessage)
for more information.

### Removal of deprecated permissions

Before version 1.0.0, Triton was called MultiLanguagePlugin,
and therefore it has supported `multilanguageplugin.*` permissions
since then.

With Triton v4, these permissions have been completely removed
and they are no longer checked by Triton.

## Improvements

This major version brings major improvements in performance,
reliability, and usability.

### Robust message parsing {#adventure-parser}

As part of its core functions,
Triton has to parse many messages and search for `[lang]`
placeholders in them.

Previously, Triton used to convert this to an internal representation,
and then back into a text component for each network packet,
regardless if it contained a `[lang]` placeholder or not.
This was a huge performance hit,
and also could interfere with other plugins by inadvertently changing their messages.
With Triton v4, this process is cancelled early if no `[lang]` placeholder is detected,
leaving those packets unchanged,
which improves both performance and robustness.

Furthermore, Triton previously used md5's chat library[^md5-lib] internally.
With Triton v4, this is no longer the case,
and the Adventure chat library is used instead.
This change unlocks [support for Velocity](#velocity-support),
and cleaner code versus the previous implementation.

However, as part of this change,
some styling might be handled differently than on Triton v3.
For this reason, a compatibility mode is provided
and can be enabled on config via `message-parser: legacy`.
Please check the [respective section of the migration guide](/docs/migration/v3-to-v4#legacy-parser)
for more information.

### `[args]` tag is no longer required

Up until now, Triton placeholders
required all arguments to be wrapped in an `[args]` tag
(e.g., `[lang]my.translation[args][arg]Foo[/arg][arg]Bar[/arg][/args][/lang]`).

As of Triton v4, this is no longer the case.
The `[args]` and `[/args]` tags can be omitted,
resulting in a slightly shorter placeholder:
`[lang]my.translation[arg]Foo[/arg][arg]Bar[/arg][/lang]`

### Velocity support {#velocity-support}

Velocity is now a first-class platform, along with BungeeCord and Spigot/Paper.
Triton v4 is able to translate messages sent by Velocity plugins.

Old hacks to enable MySQL support on Velocity are no longer required,
as the MySQL driver is bundled with Triton.

As part of this change,
references in config and documentation that mentioned only BungeeCord
have been renamed to a more generic "proxy" term.

## Experimental PacketEvents support

Maintaining compatibility with server internals across Minecraft versions
is difficult and error-prone.
For instance, recent versions of Minecraft have made interacting with item
representations cumbersome and slow,
hurting performance.

For this reason, the ProtocolLib implementation
is beginning to be [replaced with PacketEvents][packetevents-tracking],
which works at the network level instead,
avoiding all the complexity with interacting with the server internals.
This PacketEvents implementation is entirely optional for now,
and can be enabled via `experimental-use-packetevents: true` on config.
Keep in mind that Triton bundles its own version of PacketEvents,
so it is not needed to install it separately on the server.

Additionally, this PacketEvents implementation is also available
in Velocity and BungeeCord.

## Missing features {#missing-features}

Unfortunately, some features have not been able to be ported to Triton v4 yet.
These features are either not critical, or workarounds are available:

- **Terminal translation:** translating placeholders in terminal output
  is not currently supported in the first release of Triton v4;
- **Patterns:** The pattern feature for translations has been a performance
  problem since it was implemented,
  and it is not compatible with the [new parser](#adventure-parser).
  As such, patterns are only supported when using the legacy parser.
- **PlaceholderAPI in translations:** Using PAPI placeholders in
  translations directly (i.e., without passing them through `[arg]`)
  is not supported in the [new parser](#adventure-parser),
  but it is still available in the legacy parser.

## API changes

Due to the [message parser changes](#adventure-parser),
some methods had to be deprecated from the API.
While those still work for now,
users are encouraged to migrate to the newer API methods.
Please read the [JavaDocs](https://triton.rexcantor64.com/javadocs) for more information.

However, it is important to note that due to relocation,
methods that contain the `Component` class in their signature
(either as a return value or a parameter)
might not work on BungeeCord or older Spigot/Paper versions.

[first-v4-commit]: https://github.com/tritonmc/Triton/commit/ccd2fb73b727f01c775b01d6ef90fc869a4c8318
[MiniMessage]: https://docs.papermc.io/adventure/minimessage/
[packetevents-tracking]: https://github.com/tritonmc/Triton/issues/503
[^triton-v4-stats]: Statistics according to [bStats](https://bstats.org/plugin/bukkit/Triton/5606) as of 2026-04-10.
Sample size of 235 servers, of which 78 are running Triton v4.
[^md5-lib]: The md-5 chat library is used in BungeeCord and also Spigot.
However recent versions of Paper have stopped updating this library,
which is causing compatibility issues in Triton v3 when using modern Minecraft versions.
