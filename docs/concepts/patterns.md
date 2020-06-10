# Patterns

::: warning
This page has been migrated from Triton's old docs and isn't finished yet.
:::

This feature allows you to translate messages without using placeholders.

::: tip REQUIREMENTS
Triton v2.0.0 or later is required.
:::

Sometimes plugins don't allow you to edit their messages, which means Triton wouldn't work.
For that reason, I've developed this feature that allows you to translate **any** message, even if the plugin doesn't allow you to change it.  
This feature should work everywhere except signs and scoreboards.

## Using the feature

To get started, you just need to add `patterns` to any existing Translatable Item.

**Example:**

```json
{
  "languages": {
    "en_GB": "&6Translation matched!",
    "pt_PT": "&6Tradução corresponde!"
  },
  "type": "text",
  "key": "example.item.1",
  "patterns": [
    "&aThis is something that needs &bto &dbe &1 changed.",
    "§3But this will ;\\)",
  ]
},
```

::: tip
Depending on the message and plugin, you may need to try both `&` and `§` to get the color code right.
:::

The example above will replace any `&aThis is something that needs &bto &dbe &1 changed.` and `§3But this will ;)` with `&6Translation matched!`.  
Notice that `)` in the latter needs to be escaped, since this is regex.
To make sure you're using valid regex, you can use a tool like [RegExr](https://regexr.com).

## Using variables

You can use regex groups to select variables and use them in the translated message.

**Example:**

```json
{
  "languages": {
    "en_GB": "&aTranslation matched with placeholders! %1",
    "pt_PT": "&aTradução corresponde com placeholders! %1"
  },
  "type": "text",
  "key": "example.item.2",
  "patterns": [
    "&7This is an actionbar with a random value &6(\\d{1,2}) &a woah!",
    "Bossbar with (\\S+)"
  ]
}
```

## Other information

While `key` may not be used if you're only using `patterns` instead of placeholders,
it is still good practice (and recommended) to include it.
