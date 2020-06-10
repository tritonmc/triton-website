# Dynamic Signs

::: warning
This page has been migrated from Triton's old docs and isn't finished yet.
:::

Until version 2.3.0, signs could only have static content. This means that signs that updated with dynamic information, like player count or status, couldn't be translated.  
Starting with 2.3.0, you can know turn off translation for specific lines, which allows for dynamic information.

To turn off the translation for a specific line, set it to `%use_line_default%` in the translation.  
These lines can also be combined with [patterns](/concepts/patterns) to allow for even more customization.
