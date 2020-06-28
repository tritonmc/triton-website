# Triton Placeholders

[[toc]]

This, along with [translations](./translations.md), is by far the most complex part of the plugin. So let's dive in!

Before processing though, make sure you've read
the [translations concept](./translations.md) already.

## What are Triton Placeholders?

A Triton Placeholder looks like this: `[lang]my.first.placeholder[/lang]`  
It looks just like [BBCode](https://en.wikipedia.org/wiki/BBCode),
so it's really easy to get started!

## Placeholder Syntax

Triton placeholders are composed by the boilerplate tags and its content.  
Tags such as `[lang]`, `[/lang]`, `[args]`, `[/args]`, `[arg]` and `[/arg]` are considered
boilerplate because they don't have any meaning when it coming to identifying which
translation you want.  
If you want, these tags can be changed in [the config](./config.md#language-creation).

However, it's inside those tags that you can place the content you want, such
as the translation key and arguments (or variables).

This placeholders should be placed inside the messages configuration files of other
plugins, on holograms, items, etc, so that Triton can detect them when the packets are sent
to the player.

### Simple placeholders

Simple placeholders are those that don't have any arguments.

It's syntax is very simple: `[lang]translation.key.here[/lang]`.  
If you replace `translation.key.here` with the key of the translation you want,
that placeholder will be replaced with the translation in the language of the player.

::: warning
Since various kinds of text in Minecraft have length limits, most plugins truncate those texts if they would cause the client to crash.  
Because of that, Triton might not be able to detect a placeholder if it has been truncated. To fix that, reduce the key length and try again.
:::

### Advanced placeholders (using variables)

To add the arguments to the placeholder, you need to use two more boilerplate tags: `[args]` and `[arg]`.  
The first tag, `[args]`, tells the plugin that this placeholder contains variables.  
The second one, `[arg]`, tells the plugin what are the values of those variables.

Example: `[lang]death.kill[args][arg]Player1[/arg][arg]Player2[/arg][/args][/lang]`

All the content between the `[arg]` and `[/arg]` tags will be treated as a variable
and passed to the translation content.  
If you remember correctly, you define variables in the translation using `%1`, `%2`, `%3`, etc.  
These will be replaced with the content inside the `[arg]` tags, in order
(the first `[arg]` tag will be `%1`, the second will be `%2` and so on).

::: tip
You can nest placeholders if you want.

Example: `[lang]economy.withdrawal[args][arg]10[/arg][arg][lang]currency.usd[/lang][/arg][/args][/lang]`
:::

When using this inside another plugin, you can place their variables inside the `[arg]` tag:  
`[lang]example.plugin[args][arg]%player_name%[/arg][/args][/lang]`
