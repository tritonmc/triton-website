# clip's PlaceholderAPI

::: tip REQUIREMENTS
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
