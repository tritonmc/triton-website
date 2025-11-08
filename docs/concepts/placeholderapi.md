---
description: "Triton integrates with PlaceholderAPI, allowing translations to be used through PAPI placeholders"
sidebar_position: 8
---

# clip's PlaceholderAPI

:::note[Requirements]
Requires Triton v1.1.0 or later.
:::

Triton supports [clip's PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) since version 1.1.0, which means it you can using in situations where Triton doesn't work natively.  
Keep in mind that you aren't able to use variables when using clip's PlaceholderAPI.

Using PlaceholderAPI is the **recommended way** to translate scoreboards.

To use it, simply use the following placeholder: `%triton_key%` where `key` is the key of the message you want to get.

Here are some examples on how to use this integration:

- **Using Triton Placeholders:** `[lang]chat.test.0[/lang]`  
  **Using PlaceholderAPI:** `%triton_chat.test.0%`

- **Using Triton Placeholders:** `[lang]some_plugin_message[/lang]`  
  **Using PlaceholderAPI:** `%triton_some_plugin_message%`

- **Using Triton Placeholders:** `[lang]message.with.arguments[args][arg]some argument[/arg][/args][/lang]`  
  **Using PlaceholderAPI:** _not supported_

## Using variables

While variables are not directly supported, you can use multiple placeholders to replicate the desired behaviour.

**Example:**

`%triton_placeholder1% some argument %triton_placeholder2%`

## Relative placeholders

Plugins such as DeluxeChat support relative placeholders, which involve two players (e.g. the one who sends the message, and the one who sees the message).  
You might want to use PlaceholderAPI with Triton to show the messages in the receiver's language.

For that, just use `%rel_triton_translation.key%`, where `translation.key` is the key of the translation you want (i.e. the one you set on TWIN).

Some plugins might swap the players given to PAPI, so starting in Triton v3.12.4
you can use `%rel_triton2_translation.key%` if the `triton` placeholder yields the incorrect language.

## Using in translations

Looking to use PlaceholderAPI inside translations?
Check out the [Translations](./translations.md#using-placeholderapi) documentation.
