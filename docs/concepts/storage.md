# Storage

::: warning
Triton handles storage differently since v3. The documentation below
might not apply to other versions.
:::

[[toc]]

## Introduction

Changing the storage location will affect where translations/collections
and player language preferences (known as `players.json`) are stored.

Moving these away from file-based storage (also known as _local storage_),
will bring many performance benefits for large servers.  
Regardless of storage location, all translations will still be loaded into memory
to allow for quick translation times.  
Player language preferences when using non-local storage are fetched as needed.

## Quick setup

Triton currently supports local (JSON) storage and MySQL storage.
MongoDB support is in the works, but it's not supported at the moment.

If you want to use local storage, you don't need the make any changes, it's good to go out of the box.

However, if you want to use non-local storage, you have to change the storage type and fill in the information accordingly.

```yaml{7}
# This section controls the storage location of player data and translations.
# If using a database, the tables/collections will be created automatically for you.
# You can use '/triton database upload' to upload the local translations to a remote storage.
# This MUST match what is on BungeeCord
storage:
  # Valid options: 'local', 'mysql', 'mongodb'
  type: 'local'
  # This should match the name of this server in BungeeCord's config.yml
  # Used to filter translations for this server only
  server-name: 'lobby'
  # The options below this are for non-local storage only
  host: 'localhost'
  port: 3306
  database: 'triton'
  username: 'root'
  password: ''
  table-prefix: 'triton_'
```

::: tip
The `server-name` variable is only loaded when using non-local storage types
and it's used to filter translations that have entries in the `server` field.  
If you're using a server template system, it might not be possible to set this.
Leaving this empty will work correctly as long as you don't want to filter
translations by server.
:::

::: warning
If you're using the BungeeCord network approach, you must use the same storage configuration on all servers, including on BungeeCord itself.
If you fail to do that, translations might not be loaded correctly.
:::

All fields in the configuration above should be pretty self explanatory.

## Managing translations while using non-local storage

If you're using non-local storage, it is very hard to edit translations manually.
You could always edit translations directly in the database, but it'd be very
easy to break something.  
With that said, you have two viable options:

1. Use TWIN **(recommended)**
2. Use the `/triton database` command to fetch/upload translations to/from the database

### Using TWIN

Using [TWIN](./twin.md) is pretty easy, it works exactly like non-local storage and it's
extremely seamless.

### Using `/triton database`

::: danger
Be extremely careful when using this command, since it will overwrite all files on download
and all database content on upload.
:::

This command allows you to copy your database content to a JSON format in the
`translations` folder.  
To do this, run `/triton database download` from the BungeeCord console
(or Spigot console if you're not running a network) or in-game.
The fields will be downloaded to BungeeCord if you're running a network.
Otherwise, they'll be placed in your Spigot server.

After downloading the content from the database, you can edit was you wish.

Once that's done, you can upload your changes back to the database
using `/triton database upload`.

## Migrating between storage types

It's not possible to migration player language preferences.

### From non-local storage to local storage

Simply download the content before changing the settings on config
using `/triton database download`.

### From local storage to non-local storage

You must first change the settings on config and then run `/triton database upload`.

### Between non-local storage types

To achieve this, you must first migrate to local storage
and then back to non-local storage.
