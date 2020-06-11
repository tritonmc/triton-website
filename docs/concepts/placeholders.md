# Triton Placeholders

::: warning
This page has been migrated from Triton's old docs and isn't finished yet.
:::

[[toc]]

This is by far the most complex part of the plugin. So let's dive in!

## What are Triton Placeholders?

A Triton Placeholder looks like this: `[lang]my.first.placeholder[/lang]`  
It looks just like [BBCode](https://en.wikipedia.org/wiki/BBCode),
so it's really easy to get started!

## How can I create my first placeholder?

It's really simple to get started! Simply open the `translations/default.json` file and add this object to the JSON array:

```json
{
  "type": "text",
  "key": "my.first.placeholder",
  "languages": {
    "en_GB": "This is my first placeholder!",
    "pt_PT": "Isto é o meu primeiro placeholder!"
  }
}
```

For further reference, this JSON Object will be called **Translatable Item**.
If this is the first time you opened your `translations/default.json` file, this is how it should look like right now:

```json
[
  {
    "type": "text",
    "key": "my.first.placeholder",
    "languages": {
      "en_GB": "This is my first placeholder!",
      "pt_PT": "Isto é o meu primeiro placeholder!"
    }
  }
]
```

Remember, to make sure you're using valid JSON, use a JSON parser.
There are hundreds of JSON parsers online, but [here](https://jsonformatter.org/json-pretty-print) is one (completely random one).  
You can also use an IDE like [Visual Studio Code](https://code.visualstudio.com)

If you're not comfortable using JSON, don't worry;
I've built TWIN just for that! TWIN helps you to easily manage your `translations` folder without having to write a single line of JSON.
You can get started with TWIN [here](./twin.md).

Save the file and type `/triton reload`.

If you write `[lang]my.first.placeholder[/lang]` in the chat, it should be replaced with `This is my first placeholder!`.
If so, nice job! You've just created your first placeholder.  
Of course, you won't be writing those in the chat.
**To take advantage of these placeholders, edit the messages of other plugins and put the placeholder there!**

If you are not sure how to use the `translations/default.json` file, take a look at these [examples](https://github.com/tritonmc/Triton/tree/v1/examples).

::: warning
Since various kinds of text in Minecraft have length limits, most plugins truncate those texts if they would cause the client to crash.  
Because of that, Triton might not be able to detect a placeholder if it has been truncated. To fix that, reduce the key length and try again.
:::

### Advanced placeholders (using variables)

Advanced placeholders work just like normal placeholders, but they can have variables (arguments) inside them.
For example, if you need to translate a message like _"Player1 killed Player2"_, you want replace _Player1_ and _Player2_ with they actual player names.
To do that, replace them in `translations/default.json` by `%1` and `%2` respectively.

This is what the translatable item should look like
(`death.kill` is used as the key in this example, but you can use whatever you want; to learn more, read the rest of this page):

```json
{
  "type": "text",
  "key": "death.kill",
  "languages": {
    "en_GB": "%1 killed %2",
    "pt_PT": "%1 matou %2"
  }
}
```

To add the arguments to the placeholder, you need to use two more special tags: `[args]` and `[arg]`.  
The first tag, `[args]`, tells the plugin that this placeholder contains variables.  
The second one, `[arg]`, tells the plugin what are the values of those variables.

For example, to get the message _"Player1 killed Player2"_,
you'd have to use the following placeholder: `[lang]death.kill[args][arg]Player1[/arg][arg]Player2[/arg][/args][/lang]`.
In this case, `%1` would be replaced by `Player1` and `%2` by `Player2`.  
You can put anything inside the `[arg][/arg]` tags, even other placeholders!

## Understanding Translatable Items

Back to that example. As you can see, I start the Translatable Item with `"type": "text"` (order doesn't really matter inside JSON Objects).
This tells the plugin that this object represents a text message.
Right now, `type` can only be two things: `text` or `sign`. I'll get to signs later.

After that, we have the `key` parameter. This is what will identify the translatable items, so you can refer to them while using placeholders.  
In the example above, I used `my.first.placeholder`, but it can be literally anything.

Finally, we have the `languages` parameter.
This is where you'll write the actual text that will be replaced in-game.
You can add as many languages as you want.  
In the example above, I used `en_GB` and `pt_PT` as my only languages.
These should match the Language IDs that are on your `config.yml`.

## Signs

**Translatable Signs** look a bit different. As said previously, their type is `sign` instead of `text`.  
Here is an example of a working sign:

```json
{
  "type": "sign",
  "key": "sign.0",
  "lines": {
    "en_GB": ["&aThis is a line", "&6Another one", "&bC&cO&dL&cO&eR", "Black text"],
    "pt_PT": ["&aIsto é uma linha", "&6Outra", "&bC&cO&dR", "Texto preto"]
  },
  "locations": [
    {
      "world": "world",
      "x": 33,
      "y": 68,
      "z": 291
    },
    {
      "world": "world",
      "x": 33,
      "y": 67,
      "z": 291
    }
  ]
}
```

As you can see, its layout is fairly different from Translatable Texts.  
It still has a `key` parameter that is only used in the `/triton sign` command.

The `lines` parameter is similar to `languages`, but instead of strings, it has a list of 4 strings (the lines of the sign).

Finally, the `locations` parameter holds a list of all the signs in this **Sign Group**.

At the moment, only static signs are supported. You can't provide dynamic arguments to signs.
Take a look at [dynamic signs](./dynamic-signs.md) if you want to translate signs
that have dynamic information (e.g. game join, shops).

## Available Parameters for Translatable Items

Here is a full list of supported parameters:

### `type`

_required_  
**Type**: String Enum  
**Possible Values**: `text`, `sign`  
This parameter defines the remaining structure of the item.

### `key`

_required_  
**Type**: String  
If `type` is `text`, this will be used to match the in-game placeholders.  
If `type` is `sign`, this will be used to match this **Sign Group** when using `/triton sign`.

### `languages`

_required for `text`_  
**Type**: JSON Object  
**Example**:

```json
{
  "en_GB": "Your text in English here.",
  "pt_PT": "Your text in Portuguese here."
}
```

Holds the text in each language.

### `lines`

_required for `sign`_  
**Type**: JSON Object  
**Example**:

```json
{
  "en_GB": ["line1_EN", "line2_EN", "line3_EN", "line4_EN"],
  "pt_PT": ["line1_PT", "line2_PT", "line3_PT", "line4_PT"]
}
```

Holds the sign lines in each language.

### `locations`

_required for `sign`_  
**Type**: JSON Array of Locations  
**Example**:

```json
[
  {
    "world": "world",
    "x": 33,
    "y": 68,
    "z": 291
  },
  {
    "world": "world",
    "x": 33,
    "y": 67,
    "z": 291
  }
]
```

Represents which signs are in this **Sign Group**.

If you're using BungeeCord, you must also include a `server` parameter in each location, like this:

```json
{
  "server": "lobby",
  "world": "world",
  "x": 33,
  "y": 68,
  "z": 291
}
```

### `patterns`

_optional | `text` only_  
**Type**: String (regex) array  
**Default**: `[]`  
If any of the regex strings in this array matches a message (everywhere except scoreboards and signs), it will be replaced with the translation.

### `servers`

_optional | `text` only | BungeeCord only_  
**Type**: String list  
**Default**: empty list  
**Example**: `["lobby-1", "lobby-2", "lobby-3"]`  
If `blacklist` is false, represents the servers where this item is available.  
Otherwise, this represents the servers where this item is **not** available.

### blacklist

_optional | `text` only | BungeeCord only_  
**Type**: Boolean (true or false)  
**Default**: `true`  
If enabled, turns `servers` into a blacklist instead of a whitelist.

### `_twin.tags`

_optional | TWIN only_  
**Type**: String list  
**Default**: `[]`  
**Example**: `["tag1", "tag2", "tag3"]`  
This is only used by TWIN and it is not detected by the plugin whatsoever.

### `_twin.description`

_optional | TWIN only_  
**Type**: String  
**Default**: empty string  
This is only used by TWIN and it is not detected by the plugin whatsoever.
