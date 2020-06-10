# Migrating from Triton v1 to v2

Migrating from v1 to v2 is pretty straight forward and doesn't include any manual work.  
Simply place the new version in your plugin folder and let it create the new files automatically.

A new `translations` folder will be generated.
No files will be deleted, which means you'll need to delete `languages.json` manually (after verifying if everything is working).

`languages.cache.json` has been replaced with `translations.cache.json`, so you can safely delete that as well.

## Understanding what has changed

The old `languages.json` file has been moved to `translations/default.json`.
It it now possible to have multiple translation files.
One of the goals of this change is to have pre-made translations of popular plugins, reducing the amount of work needed to have the plugin up and running.

If you're using BungeeCord, you'll also notice that the contents have changed:

### Before

```json
[
  {...},
  {...}
]
```

### After

```json
{
  "metadata": {
    "servers": [],
    "blacklist": false,
    "universal": true
  },
  "items": [
    {...},
    {...}
  ]
}
```

As you can see, you can now set defaults for every file, so if you want one file to only contain translations for one server you can now do that!

## Conclusion

As you can see, there's almost no work included in upgrating from v1 to v2.
If you need help with any of the steps above, feel free to ask for help on our Discord!