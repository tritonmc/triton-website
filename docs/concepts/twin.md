---
description: "TWIN is the web interface for Triton that allows for easy management of your translations"
sidebar_position: 6
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# TWIN

**TWIN** stands for **T**​riton **W**​eb **In**​terface.  
Its goal is you help you manage your `translations` folder easily.

## Get your TWIN token

To get started, you first need to get your TWIN token.
This token is used to verify your purchase and give you access to the TWIN web services.
There are two ways to get it: using Discord or by sending me a PM on Spigot.

<Tabs>
<TabItem value="discord" label="Discord" default>

This is by far the fastest and most efficient way to get your TWIN token. Here is what you need to do:

1. [Join our Discord if you haven't already](https://triton.rexcantor64.com/discord).
2. Use the `/verify <username>` command in **any** channel.
3. You should receive a message from the bot saying that your account has been verified.
4. Finally, click the button on `#verification` (or use the `/twintoken` command) to get the token.

</TabItem>
<TabItem value="spigot" label="PM on Spigot">

This is really straightforward, but it takes longer than the previous method. I might take a few hours or even days before I reply.  
Just send me a [PM on Spigot](https://www.spigotmc.org/members/rexcantor64.165436/) asking for your TWIN token.

</TabItem>
</Tabs>

## Using TWIN

To open your config on TWIN, type `/twin` in-game or on your console.
You'll receive a link as a response, which you can open using your preferred browser.

When you open TWIN for the first time, this is what you might see:

![TWIN Empty Page](./twin1.png)

You will be presented with a search bar, an add button and a save button. There are also undo and redo buttons, but those are disabled until they are available.  
If you have any translatable items, you'll also see those on this page. If not, a message saying `No items found` will show up (like above).

### Adding/Removing a Translatable Item

To add an item, simply click the `+` button and select either Text or Sign. You'll be presented with a screen like this:

![TWIN empty text item](./twin2.png)

An thorough explanation of each of these fields are is available in the
[translations page](./translations.md), so check it out if you haven't already.

To remove an item, simply click the `DELETE` button in the editing screen. If you've deleted an item by accident, simply click the undo button.  
You can also bulk delete items from the items list.

### Archiving

To archive a translation, you can do it from the translation item page for a single item
or select multiple translations from the list and click the bulk archive button.

When a translation is archived, it won't be loaded by the plugin, but it won't be deleted.
You can unarchive a translation at any time to re-enable it.

### Saving

To save, simply click the `SAVE` button in the top right of your screen. Follow the instructions on-screen to apply the changes to your server. To save bandwidth, only the changes are sent to your server, not all translations.

### Bulk actions

By selecting multiple items in the items list, you can archive,
delete or move multiple items to another collection.

### Import/Export

You can use this to export or import all (or selected) translation items from/to a specific
language from/to a `.properties` file.  
This can be used with tools like [Crowdin](https://crowdin.com/) to easily translate your
server.

## Dark mode

You can toggle TWIN's dark mode by going to the settings (in the left sidebar).

## Privacy concerns

All translations sent to/from TWIN are stored exclusively on TWIN's servers
for 24 hours since upload.
This includes both uploading from the plugin and saving in the web interface.  
This data can only be accessed using the config code
(the code that is generated when you type `/twin` in-game or when you save
the config on TWIN), which is randomly generated and cannot be bruteforced in
a reasonable amount of time.  
TWIN does not derive any data from your translations for purposes other
than providing you with this service.
Triton doesn't, and will never, sell any of this data to third parties.
