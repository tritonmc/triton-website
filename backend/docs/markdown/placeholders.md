# Placeholders

This is by far the most complex part of the plugin. So let's dive in!

## What are Triton Placeholders?

A Triton Placeholder looks like this: `[lang]my.first.placeholder[/lang]`  
It looks just like [BBCode](https://en.wikipedia.org/wiki/BBCode), so it's really easy to get started!

## How can I create my first placeholder?

It's really simple to get started! Simply open the `languages.json` file and add this object to the JSON array:

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

For further reference, this JSON Object will be called **Language Item**.
If this is the first time you opened your `languages.json` file, this is how it should look like right now:

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

Remember, to make sure you're using valid JSON, use a JSON parser. There are hundreds of JSON parsers online, but [here](https://jsonformatter.org/json-pretty-print) is one (completely random one).

If you're not comfortable using JSON, don't worry; I've built TWIN just for that! TWIN helps you to easily manage your `languages.json` without having to write a single line of JSON. You can get started with TWIN [here](/docs/twin).

Save the file and type `/triton reload`.

If you write `[lang]my.first.placeholder[/lang]` in the chat, it should be replaced with `This is my first placeholder!`. If so, nice job! You've just created your first placeholder.  
Of course, you won't be writing those in the chat. To take advantage of these placeholders, edit the messages of other plugins and put the placeholder there!

## Understanding Language Items

Back to that example. As you can see, I start the Language Item with `"type": "text"` (order doesn't really matter inside JSON Objects). This tells the plugin that this object represents a text message. Right now, `type` can only be two things: `text` or `sign`. I'll get to signs later.

After that, we have the `key` parameter. This is what will identify the language items, so you can refer to them while using placeholders.  
In the example above, I used `my.first.placeholder`, but it can be literally anything.

Finally, we have the `languages` parameter. This is where you'll write the actual text that will be replaced in-game. You can add as many languages as you want.  
In the example above, I used `en_GB` and `pt_PT` as my only languages. These should match the Language IDs that are on your `config.yml`.

## Signs

**Language Signs** look a bit different. As said previously, their type is `sign` instead of `text`.  
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

As you can see, its layout is fairly different from Language Texts.  
It still has a `key` parameter that is only used in the `/triton sign` command.

The `lines` parameter is similar to `languages`, but instead of strings, it has a list of 4 strings (the lines of the sign).

Finally, the `locations` parameter holds a list of all the signs in this **Sign Group**.

At the moment, only static signs are supported. You can't provide dynamic arguments to signs.

## Available Parameters for Language Items

Here is a full list of supported parameters:

### type

_required_  
**Type**: String Enum  
**Possible Values**: `text`, `sign`  
This parameter defines the remaining structure of the item.

### key

_required_  
**Type**: String  
If `type` is `text`, this will be used to match the in-game placeholders.  
If `type` is `sign`, this will be used to match this **Sign Group** when using `/triton sign`.

### languages

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

### lines

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

### locations

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

### universal

_optional | `text` only | BungeeCord only_  
**Type**: Boolean (true or false)  
**Default**: `true`  
If enabled, this message will be available in all servers.

### servers

_optional | `text` only | BungeeCord only_  
**Type**: String list  
**Default**: empty list  
**Example**: `["lobby-1", "lobby-2", "lobby-3"]`  
If `blacklist` is false, represents the servers where this item is available.  
Otherwise, this represents the servers where this item is **not** available.

### blacklist

_optional | `text` only | BungeeCord only_  
**Type**: Boolean (true or false)  
**Default**: `false`  
If enabled, turns `servers` into a blacklist instead of a whitelist.

### tags

_optional | TWIN only_  
**Type**: String list  
**Default**: empty blacklist  
**Example**: `["tag1", "tag2", "tag3"]`
This is only used by TWIN and it is not detected by the plugin whatsoever.

### description

_optional | TWIN only_  
**Type**: String  
**Default**: empty string  
This is only used by TWIN and it is not detected by the plugin whatsoever.
