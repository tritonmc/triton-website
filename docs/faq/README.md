---
title: ❓ FAQ
description: Frequently asked questions about Triton
sidebar_position: 2
---

# FAQ

## I cannot translate item names and lores on inventory

By default, the `allow-in-inventory` option in Triton's config is disabled.  
This is because items might permanently change their name if the player is in creative mode.
If the player's cannot drop their items or they're always in survival/adventure mode, this is safe to enable.  
Otherwise, translating item names and lores will only work on GUIs.

To fix this, enable `allow-in-inventory` on config.

## I cannot use placeholders on scoreboards

Translating scoreboards requires using [PlaceholderAPI](../concepts/placeholderapi.md) instead of Triton's
`[lang]` placeholders.  
This is due to technical limitations.

Since version **3.7.0** you can use PlaceholderAPI placeholders inside translations, which
aliviates the limitation of not being able to use variables when translating with PlaceholderAPI.
